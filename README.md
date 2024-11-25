# Color Guesser

Test your artistic sense and see how well you know your color codes. Enter in a HEX color in the input, and try and get it as close as you can to the color that is display above it (you will be able to see the color you inputted in the box right next to it). Hit submit to see how close you got your inputted color to the actual color! If you want a different color, you can always refresh or hit "New Color" to try something else.

## How this Works

Whenever you submit a hexadecimal color on the website, it is converted into an RGB color. This RGB color is then compared to the original color value via the [Euclidean distance](https://en.wikipedia.org/wiki/Color_difference) between the two RGB colors. Smaller distance leads to a greater percentage similarity between the two colors.
