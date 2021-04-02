import react.dom.render
import kotlinx.browser.document
import kotlinx.browser.window
import react.child

@ExperimentalJsExport
fun main() {
    window.onload = {
        render(document.getElementById("root")) {
            child(paintMixer)
        }
    }
}
