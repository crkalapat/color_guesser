# Color Guesser

Test your artistic sense and see how well you know your color codes. Enter in a HEX color in the input, and you will be able to see what it is in the box right next to it. Try and see how close you can get your inputted color to the actual color! If you want a different color, you can always refresh or hit "New Color" to try something else.

## How this Works

Whenever you input a hexadecimal color, it is converted into an RGB color. This RGB color is then compared to the original color value via the [Euclidean distance](https://en.wikipedia.org/wiki/Color_difference) between the two RGB colors.
