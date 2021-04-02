import kotlinx.css.*
import kotlinx.html.classes
import kotlinx.html.js.onClickFunction
import react.*
import react.dom.div
import styled.css
import styled.styledDiv
import kotlin.math.ceil

external interface BoardProps : RProps {
    var board: Board
    var onClick: (Int) -> Unit
}

private const val MAX_TUBES_PER_ROW = 6

data class Board(val start: Int?, val end: Int?, val tubes: List<TestTube>, val maxTubeSize: Int) {

    // Each color must be collected into a single tube
    fun isSolved(): Boolean {
        val colorsMap = HashMap<Color, MutableSet<Int>>()
        tubes.forEachIndexed { index, tube ->
            tube.paints.forEach { color ->
                if (!colorsMap.containsKey(color)) {
                    colorsMap[color] = mutableSetOf()
                }
                colorsMap[color]!!.add(index)
            }
        }

        return colorsMap.values.all { it.size <= 1 }
    }

    fun selectTube(index: Int): Pair<Int?, Int?> {
        if (start == null && !tubes[index].isEmpty()) {
            return Pair(index, null)
        }

        if (index == start) {
            return Pair(null, null)
        }

        makeMove(start, index)
        return Pair(null, null)
    }

    fun isLegalMove(start: Int?, end: Int?): Boolean {
        if (start == null || end == null) {
            return false
        }

        // Validate indices
        if (start >= tubes.size || end >= tubes.size || start < 0 || end  < 0) {
            return false
        }

        // Starting test tube must have some paint
        if (tubes[start].isEmpty()) {
            return false
        }

        // Ending test tube must not be full
        if (tubes[end].isFull(maxTubeSize)) {
            return false
        }

        // Can't pour an empty tube
        if (tubes[start].topPaintInTube() == null) {
            return false
        }

        // Pouring into an empty tube
        if (tubes[end].topPaintInTube() == null) {
            return true
        }

        // Paints must match
        return tubes[start].topPaintInTube() == tubes[end].topPaintInTube()
    }

    fun makeMove(start: Int?, end: Int?) {
        if (isLegalMove(start, end)) {
            // Pour as much paint as possible while the colors still match
            while (!tubes[start!!].isEmpty() && !tubes[end!!].isFull(maxTubeSize) &&
                (tubes[start].topPaintInTube() == tubes[end].topPaintInTube() ||
                        tubes[end].topPaintInTube() == null)
            ) {
                val paint = tubes[start].paints.removeLast()
                tubes[end].paints.add(paint)
            }
        }
    }
}

val board = functionalComponent<BoardProps> { props ->

    val (board, setBoard) = useState(props.board)
    val (tubesPerRow, setTubesPerRow) = useState(0)

    useEffect(listOf(props.board)) {
        setBoard(props.board)

        val numTubes = props.board.tubes.size
        val numRows = ceil((numTubes * 1.0) / MAX_TUBES_PER_ROW)
        setTubesPerRow(ceil(numTubes / numRows).toInt())
    }

    div {
        attrs {
            classes = setOf("w-full", "flex", "flex-row", "flex-wrap", "items-center", "justify-around")
        }

        for ((index, tube) in board.tubes.withIndex()) {
            // Insert a new row every `tubesPerRow` tubes
            if (index % tubesPerRow == 0) {
                styledDiv {
                    css {
                        height = LinearDimension("0px")
                        width = LinearDimension("100vw")
                    }
                }
            }

            styledDiv {
                css {
                    flexBasis = FlexBasis("${ceil(1 / (MAX_TUBES_PER_ROW + 1).toDouble())}%")
                }

                attrs {
                    onClickFunction = { props.onClick(index) }
                }

                child(testTube) {
                    attrs {
                        maxSize = board.maxTubeSize
                        testTube = tube
                        isStart = board.start == index
                        numRows = ceil(board.tubes.size.toDouble() / MAX_TUBES_PER_ROW).toInt()
                    }
                }
            }
        }
    }
}