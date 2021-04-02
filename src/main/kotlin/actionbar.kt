import kotlinx.css.marginTop
import kotlinx.css.px
import kotlinx.css.width
import kotlinx.html.classes
import kotlinx.html.js.onClickFunction
import react.RProps
import react.child
import react.dom.div
import react.dom.img
import react.dom.p
import react.functionalComponent
import styled.css
import styled.styledButton

external interface ActionBarProps: RProps {
    var isReady: Boolean
    var isSolved: Boolean
    var isCustomLevel: Boolean
    var numTestTubes: Int
    var level: Int
    var clickCustomSetting: () -> Unit
    var clickDeleteSetting: () -> Unit
    var clickLevelSetting: () -> Unit
    var clickAddTube: () -> Unit
    var clickRemoveTube: () -> Unit
    var clickReset: () -> Unit
    var clickReady: () -> Unit
    var clickNew: () -> Unit
    var clickNextLevel: () -> Unit
}

val actionBar = functionalComponent<ActionBarProps> { props ->
    div {
        attrs {
            classes = setOf("flex", "flex-row", "pb-4", "w-full", "justify-center")
        }

        div {
            attrs {
                classes = setOf("pr-4", "pl-4")
            }

            child(settings) {
                attrs {
                    clickCustom = { props.clickCustomSetting() }
                    clickLevel = { props.clickLevelSetting() }
                    clickDelete = { props.clickDeleteSetting() }
                }
            }
        }

        if (props.isCustomLevel) {
            if (!props.isReady) {
                img {
                    attrs {
                        classes = setOf("pr-4", "pl-4", "h-14")
                        src = "minus.svg"
                        onClickFunction = { props.clickRemoveTube() }
                    }
                }

                p {
                    +"${props.numTestTubes}"

                    attrs {
                        classes = setOf("text-6xl", "pr-4", "pl-4")
                    }
                }

                img {
                    attrs {
                        classes = setOf("pr-4", "pl-4", "h-14")
                        src = "plus.svg"
                        onClickFunction = { props.clickAddTube() }
                    }
                }

                styledButton {
                    attrs {
                        classes = setOf(
                            "text-green-800",
                            "bg-green-100",
                            "rounded",
                            "font-semibold",
                            "text-2xl",
                            "pl-2",
                            "pr-2",
                        )
                        text("Ready")
                        onClickFunction = { props.clickReady() }
                    }
                }
            } else if (!props.isSolved) {
                img {
                    attrs {
                        classes = setOf("pr-4", "pl-4", "h-14")
                        src = "refresh.svg"
                        onClickFunction = { props.clickReset() }
                    }
                }
            } else {
                styledButton {
                    css {
                        width = 80.px
                        marginTop = 10.px
                    }

                    attrs {
                        classes = setOf(
                            "rounded",
                            "font-semibold",
                            "bg-blue-100",
                            "text-blue-800",
                            "text-2xl",
                            "pl-4",
                            "pr-4",
                        )
                        text("New")
                        onClickFunction = { props.clickNew() }
                    }
                }
            }
        } else {
            p {
                +"Level ${props.level}"

                attrs {
                    classes = setOf("text-6xl", "pr-4", "pl-4")
                }
            }

            if (props.isSolved) {
                styledButton {
                    css {
                        width = 80.px
                        marginTop = 10.px
                    }

                    attrs {
                        classes = setOf(
                            "rounded",
                            "font-semibold",
                            "bg-blue-100",
                            "text-blue-800",
                            "text-2xl",
                            "pl-4",
                            "pr-4",
                        )
                        text("Next Level")
                        onClickFunction = { props.clickNextLevel() }
                    }
                }
            } else {
                img {
                    attrs {
                        classes = setOf("pr-4", "pl-4", "h-14")
                        src = "refresh.svg"
                        onClickFunction = { props.clickReset() }
                    }
                }
            }
        }
    }
}