document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn');
    const colorText = document.querySelector('.color-text'); // Changed from h2 to a more specific span
    const body = document.body;

    // Array of possible hexadecimal characters
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    // Function to generate a random hexadecimal color
    function getRandomHexColor() {
        let hexColor = '#';
        for (let i = 0; i < 6; i++) {
            hexColor += hex[getRandomNumber()];
        }
        return hexColor;
    }

    // Helper function to get a random number between 0 and hex.length - 1
    function getRandomNumber() {
        return Math.floor(Math.random() * hex.length);
    }

    // Event listener for the button click
    btn.addEventListener('click', () => {
        const newColor = getRandomHexColor();
        body.style.backgroundColor = newColor;
        colorText.textContent = newColor;
    });

    // Set initial color on load (optional, but good practice)
    // You could also grab the initial color from CSS if you prefer
    // For now, it will start with the color in the HTML, and the first click will change it.
});
