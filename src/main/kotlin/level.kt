import kotlinx.css.Color

data class Level(val tubes: Array<Array<String>>) {

    fun createTubes(): MutableList<TestTube> {
        return tubes.map { tube ->
            val colors = tube.map {
                when (it.toUpperCase()) {
                    "P", "PINK" -> Color.pink
                    "R", "RED" -> Color.red
                    "O", "ORANGE" -> Color.orange
                    "Y", "YELLOW" -> Color.yellow
                    "L", "LIMEGREEN" -> Color.limeGreen
                    "GR", "GREEN" -> Color.green
                    "C", "CYAN" -> Color.cyan
                    "B", "BLUE" -> Color.blue
                    "PURPLE" -> Color.purple
                    "G", "GREY" -> Color.grey
                    else -> Color.white
                }
            }.toMutableList()
            TestTube(colors)
        }.toMutableList()
    }
}