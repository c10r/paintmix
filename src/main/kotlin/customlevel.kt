import kotlinx.css.*
import kotlinx.html.classes
import kotlinx.html.js.onClickFunction
import react.RProps
import react.child
import react.dom.div
import react.dom.p
import react.functionalComponent
import styled.styledButton

external interface CustomLevelProps : RProps {
    var isReady: Boolean
    var isSolved: Boolean
    var onPaletteClick: (color: Color) -> Unit
}

val customLevel = functionalComponent<CustomLevelProps> { props ->
    div {
        attrs {
            classes = setOf("flex-column", "items-center")
        }

        if (!props.isReady) {
            child(palette) {
                attrs {
                    colors = Paints.ALL_COLORS
                    onClick = { color: Color -> props.onPaletteClick(color) }
                }
            }
        }

        if (props.isSolved) {
            p {
                +"Solved!"
                attrs {
                    classes = setOf("text-9xl")
                }
            }
        }
    }
}