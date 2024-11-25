window.onload = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    document.documentElement.style.setProperty('--main-bg-color', randomColor);

    const colorBox = document.getElementById("color-box");
    if (colorBox) {
        const color = document.createElement("div");
        color.id = "color";
        colorBox.appendChild(color);
    } else {
        console.error("No element with ID 'color-box' found!");
    }


    document.getElementById('code').addEventListener('input', function () {
        const colorInput = this.value.trim(); // Get the current value
        const colorPreview = document.getElementById('color-preview');
    
        // Check if input is a valid hex color (6 characters, 0-9, a-f)
        if (/^[0-9A-Fa-f]{6}$/.test(colorInput)) {
            colorPreview.style.backgroundColor = `#${colorInput}`;
        } else {
            colorPreview.style.backgroundColor = ''; // Reset to default if invalid
        }
    });

    document.getElementById('reset-btn').addEventListener('click', function () {
        // Generate a random hex color
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        document.documentElement.style.setProperty('--main-bg-color', randomColor);
    })
};