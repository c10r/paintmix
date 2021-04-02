import kotlinx.browser.localStorage
import kotlinx.browser.window
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.await
import kotlinx.coroutines.launch
import kotlinx.css.*
import org.w3c.dom.get
import org.w3c.dom.set
import react.*
import styled.*

external interface PaintProps : RProps {}

private const val START_TUBES = 4
private const val MIN_TUBES = 2
private const val MAX_TUBES = 18
private const val MAX_TUBE_SIZE = 4
private const val LEVEL_KEY = "level"
private const val BACKEND_URL = "https://us-central1-bored-games-io.cloudfunctions.net/paintmix"

val paintMixer = functionalComponent<PaintProps> { _ ->
    val (selectedColor, setSelectedColor) = useState<Color?>(null)
    val (isReady, setIsReady) = useState(false)
    val (isSolved, setIsSolved) = useState(false)
    val (numTestTubes, setNumTestTubes) = useState(START_TUBES)
    val (start, setStart) = useState<Int?>(null)
    val (end, setEnd) = useState<Int?>(null)
    val (level, setLevel) = useState(0)
    val (isCustomLevel, setIsCustomLevel) = useState(true)

    // Original configuration of the tubes
    // Once play has started, resetting reverts tubes to originalTubes
    val (originalTubes, setOriginalTubes) = useState<MutableList<TestTube>?>(null)
    // Current configuration of the tubes
    val (tubes, setTubes) = useState(
        numTestTubes.downTo(1)
            .map { TestTube(mutableListOf()) }
            .toMutableList())

    useEffect(listOf(numTestTubes, isSolved)) {
        if (!isSolved && isCustomLevel) {
            setTubes(
                numTestTubes.downTo(1)
                    .map { TestTube(mutableListOf()) }
                    .toMutableList())
        }
    }

    useEffect(listOf(level, isCustomLevel)) {
        GlobalScope.launch {
            if (level < 1) {
                localStorage[LEVEL_KEY]?.let {
                    setLevel(it.toInt())
                } ?: run {
                    localStorage[LEVEL_KEY] = "1"
                    setLevel(1)
                }
            } else {
                localStorage[LEVEL_KEY] = level.toString()
            }
        }

        if (level > 0 && !isCustomLevel) {
            GlobalScope.launch {
                val levelApi = window.fetch("$BACKEND_URL?level=$level")
                    .await()

                val levelJson = levelApi
                    .json()
                    .await()

                val partialLevel: Level = levelJson.unsafeCast<Level>()
                val partialTubes = JSON.parse<Array<Array<String>>>(partialLevel.tubes as String)
                val newLevel = Level(partialTubes)

                setNumTestTubes(newLevel.createTubes().size)
                setTubes(newLevel.createTubes())
                setOriginalTubes(newLevel.createTubes())
                setIsReady(true)
            }
        }
    }

    styledDiv {
        css {
            display = Display.flex
            flexDirection = FlexDirection.column
            alignItems = Align.center
            justifyContent = JustifyContent.center
            height = LinearDimension("100vh")
        }

        child(actionBar) {
            attrs {
                clickCustomSetting = {
                    setIsReady(false)
                    setIsSolved(false)
                    setIsCustomLevel(true)
                    setNumTestTubes(START_TUBES)
                }
                clickLevelSetting = {
                    setIsReady(true)
                    setIsSolved(false)
                    setIsCustomLevel(false)
                }
                clickDeleteSetting = {
                    GlobalScope.launch {
                        localStorage.removeItem(LEVEL_KEY)
                    }
                }
                clickAddTube = {
                    if (numTestTubes < MAX_TUBES) {
                        setNumTestTubes(numTestTubes + 1)
                    }
                }
                clickRemoveTube = {
                    if (numTestTubes > MIN_TUBES) {
                        setNumTestTubes(numTestTubes - 1)
                    }
                }
                clickReset = {
                    originalTubes?.let {
                        // Deep copy
                        val tubesCopy = it.map { t -> TestTube(t.paints.toMutableList()) }
                        setTubes(tubesCopy.toMutableList())
                    }
                }
                clickReady = {
                    // Deep copy
                    val originalTubesCopy = tubes.map { t -> TestTube(t.paints.toMutableList()) }
                    setOriginalTubes(originalTubesCopy.toMutableList())
                    setIsReady(true)
                }
                clickNew = {
                    setOriginalTubes(null)
                    setIsReady(false)
                    setIsSolved(false)
                    setNumTestTubes(START_TUBES)
                }
                clickNextLevel = {
                    setLevel(level + 1)
                }
                this.numTestTubes = numTestTubes
                this.level = level
                this.isReady = isReady
                this.isSolved = isSolved
                this.isCustomLevel = isCustomLevel
            }
        }

        child(board) {
            attrs {
                board = Board(start, end, tubes, MAX_TUBE_SIZE)
                onClick = { index: Int ->
                    if (isReady) {
                        val newIndices = board.selectTube(index)
                        setStart(newIndices.first)
                        setEnd(newIndices.second)

                        val newTubes = board.tubes.map { tube -> tube.copy() }
                        setTubes(newTubes.toMutableList())

                        setIsSolved(board.isSolved())
                    } else {
                        selectedColor?.let {
                            val newTubes = tubes.map { tube -> tube.copy() }
                            newTubes[index].paints.add(it)
                            setTubes(newTubes.toMutableList())
                        }
                    }
                }
            }
        }

        if (isCustomLevel) {
            child(customLevel) {
                attrs {
                    this.isReady = isReady
                    this.isSolved = isSolved
                    onPaletteClick = { color: Color -> setSelectedColor(color) }
                }
            }
        }
    }
}
