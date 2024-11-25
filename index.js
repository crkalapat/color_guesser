window.onload = () => {
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    document.documentElement.style.setProperty('--main-bg-color', randomColor);
    var bestPercentage = 0;

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
        randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        document.getElementById('comparison').innerHTML = "";
        document.documentElement.style.setProperty('--main-bg-color', randomColor);
        document.getElementById('submit').disabled = false;
        document.getElementById('code').value = "";
        document.getElementById('color-preview').style.backgroundColor = "white";
    })

    document.getElementById('submit').addEventListener('click', function () {

        var userInput = document.getElementById('code').value.trim(); // Get input and remove spaces
        var userColor = hexToRgb(userInput);
        var actualColor = hexToRgb(randomColor);
        const hexPattern = /^[0-9a-fA-F]{6}$/; // Regex for 6-character hex code

        this.disabled = true;

        if (hexPattern.test(userInput)) {
            const colorInput = document.getElementById('code').value.trim();
            const description = document.createElement("div");
            description.id = "description";
            const textNode = document.createTextNode("Your color was ");
            description.appendChild(textNode);


            const similarity = calculateSimilarityPercentage(userColor, actualColor);
            if (similarity > bestPercentage) {
                bestPercentage = similarity;
            } else if (similarity == 100) {
                bestPercentage = 100.00;
            }
            const similarityText = document.createTextNode(`${similarity}` + "% close to the actual color, " + `${randomColor}`);
            const similarityNum = document.createTextNode("Best: " + `${bestPercentage}` + "%");

            // Create a new anchor (<a>) element
            const link = document.createElement("a");

            link.href = "https://en.wikipedia.org/wiki/Color_difference";
            link.textContent = "How this is calculated";  // Link text
            link.target = "_blank";


            description.appendChild(document.createElement("h1").appendChild(similarityText));
            if (similarity == 100) {
                description.appendChild(document.createElement("br"));
                description.appendChild(document.createElement("h1").appendChild(document.createTextNode("Nice job! Makes me wonder if you cheated...🧐")));
            }
            description.appendChild(document.createElement("br"));
            description.appendChild(document.createElement("br"));
            description.appendChild(link);
            document.getElementById("comparison").appendChild(description);
            document.getElementById("best").innerHTML = "";
            document.getElementById("best").appendChild(similarityNum);
        } else {
            // Input is invalid
            alert("Invalid hex code. Please enter 6 hexadecimal characters.");
        }
        
    })


    // Convert hex color to RGB
    function hexToRgb(hex) {
        // Remove '#' if it exists
        hex = hex.replace('#', '');
        // Convert to RGB
        const bigint = parseInt(hex, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return { r, g, b };
    }

    // Calculate the Euclidean distance between two RGB colors
    function calculateColorDistance(color1, color2) {
        return Math.sqrt(
            Math.pow(color2.r - color1.r, 2) +
            Math.pow(color2.g - color1.g, 2) +
            Math.pow(color2.b - color1.b, 2)
        );
    }

    // Calculate the similarity percentage
    function calculateSimilarityPercentage(inputColor, actualColor) {
        const maxDistance = Math.sqrt(255 * 255 + 255 * 255 + 255 * 255); // Maximum distance in RGB space
        const distance = calculateColorDistance(inputColor, actualColor);
        const similarity = (1 - distance / maxDistance) * 100;
        return similarity.toFixed(2); // Limit to 2 decimal places
    }
};