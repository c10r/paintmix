import kotlinx.html.classes
import kotlinx.html.js.onClickFunction
import react.RProps
import react.dom.div
import react.dom.img
import react.dom.p
import react.functionalComponent
import react.useState

external interface SettingsProps : RProps {
    var clickLevel: () -> Unit
    var clickDelete: () -> Unit
    var clickCustom: () -> Unit
}

private val settingsClasses = setOf(
    "flex",
    "flex-row",
    "flex-grow",
    "items-center",
    "justify-center",
    "hover:bg-gray-200",
    "p-2",
    "rounded-lg",
)

val settings = functionalComponent<SettingsProps> { props ->
    val (isOpen, setIsOpen) = useState(false)

    div {
        attrs {
            classes = setOf("flex-column")
        }

        img {
            attrs {
                classes = setOf("h-14", "mb-2")
                src = "settings.svg"
                onClickFunction = {
                    setIsOpen(!isOpen)
                }
            }
        }

        if (isOpen) {
            div {
                attrs {
                    classes = setOf(
                        "flex",
                        "flex-row",
                        "border-b-2",
                        "border-gray-900",
                        "p-1",
                        "w-full",
                        "absolute",
                        "top-0",
                        "left-0",
                        "items-center",
                        "justify-around",
                    )
                }

                div {
                    attrs {
                        classes = settingsClasses
                        onClickFunction = {
                            props.clickLevel()
                            setIsOpen(false)
                        }
                    }

                    img {
                        attrs {
                            classes = setOf("h-6", "m-2")
                            src = "stairs.svg"
                        }
                    }

                    p {
                        +"Levels"
                    }
                }

                div {
                    attrs {
                        classes = settingsClasses
                        onClickFunction = {
                            props.clickCustom()
                            setIsOpen(false)
                        }
                    }

                    img {
                        attrs {
                            classes = setOf("h-6", "m-2")
                            src = "wrench.svg"
                        }
                    }

                    p {
                        +"Level-Maker"
                    }
                }

                div {
                    attrs {
                        classes = settingsClasses
                        onClickFunction = {
                            props.clickDelete()
                            setIsOpen(false)
                        }
                    }

                    img {
                        attrs {
                            classes = setOf("h-6", "m-2")
                            src = "trash.svg"
                        }
                    }

                    p {
                        +"Delete save"
                    }
                }
            }
        }
    }
}