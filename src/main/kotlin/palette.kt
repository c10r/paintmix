import kotlinx.css.*
import kotlinx.html.classes
import kotlinx.html.js.onClickFunction
import react.*
import react.dom.div
import styled.css
import styled.styledDiv

external interface PaletteProps : RProps {
    var colors: List<Color>
    var onClick: (Color) -> Unit
}

val palette = functionalComponent<PaletteProps> { props ->
    div {
        attrs {
            classes = setOf("flex", "justify-center")
        }

        for ((index, color) in props.colors.withIndex()) {
            styledDiv {
                attrs {
                    classes = setOf(
                        "py-4",
                        "w-16",
                        "h-16",
                        "md:w-20",
                        "md:h-20",
                        "lg:w-24",
                        "lg-h-24",
                        when (index) {
                            0 -> "rounded-l-2xl"
                            props.colors.size - 1 -> "rounded-r-2xl"
                            else -> ""
                        },
                    )
                    onClickFunction = { props.onClick(color) }
                }

                css {
                    backgroundColor = color
                    cursor = Cursor.pointer
                }
            }
        }
    }
}