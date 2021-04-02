import kotlinx.css.*
import kotlinx.html.classes
import react.*
import styled.css
import styled.styledDiv

external interface TestTubeProps : RProps {
    var testTube: TestTube
    var maxSize: Int
    var isStart: Boolean
    var numRows: Int
}

private val PADDING = 8.px

data class TestTube(val paints: MutableList<Color>) {
    fun isEmpty(): Boolean = paints.isEmpty()

    fun isFull(maxSize: Int): Boolean = paints.size == maxSize

    fun topPaintInTube(): Color? =
        if (!isEmpty()) paints.last()
        else null
}

val testTube = functionalComponent<TestTubeProps> { props ->
    val (testTube, setTestTube) = useState(props.testTube)

    useEffect(listOf(props.testTube)) {
        setTestTube(props.testTube)
    }

    styledDiv {
        css {
            if (props.isStart) {
                backgroundColor = Color("#e80bc329")
            }
        }

        attrs {
            classes = setOf("pl-4", "pr-4", "py-8", "flex", "flex-col", "items-center")
        }

        for (i in (props.maxSize - 1) downTo 0) {
            styledDiv {
                css {
                    borderColor = Color.black
                    borderStyle = BorderStyle.solid
                    borderTopStyle = BorderStyle.none
                    backgroundColor =
                        if (testTube.paints.size - 1 >= i) testTube.paints[i]
                        else Color.white
                }

                attrs {
                    classes = setOf(
                        "border-2",
                        when (props.numRows) {
                            1 -> "w-20 h-20 md:w-24 md:h-24"
                            2 -> "w-14 h-14 md:w-20 md:h-20"
                            else -> "w-10 h-10 md:w-14 md:h-14"
                        },
                        if (i == 0) "rounded-b-full" else ""
                    )
                }
            }
        }
    }
}