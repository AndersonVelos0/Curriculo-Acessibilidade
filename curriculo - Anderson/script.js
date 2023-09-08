document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const colorButton = document.getElementById("color-button");
    const increaseFontButton = document.getElementById("increase-font");
    const decreaseFontButton = document.getElementById("decrease-font");

    // Função para trocar as cores
    let isDarkMode = false;
    colorButton.addEventListener("click", function () {
        isDarkMode = !isDarkMode;
        if (isDarkMode) {
            body.style.backgroundColor = "#000000";
            body.style.color = "#ffffff";
        } else {
            body.style.backgroundColor = "#ffffff";
            body.style.color = "#000000";
        }
    });

    // Funções para aumentar e diminuir o tamanho da fonte
    let fontSize = 16;
    increaseFontButton.addEventListener("click", function () {
        fontSize += 2;
        body.style.fontSize = fontSize + "px";
    });

    decreaseFontButton.addEventListener("click", function () {
        fontSize -= 2;
        body.style.fontSize = fontSize + "px";
    });
});
