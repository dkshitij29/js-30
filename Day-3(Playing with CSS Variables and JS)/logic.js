function adjustBlur() {
    var slider = document.getElementById("blur-slider");
    var blurLevel = slider.value;
    var image = document.getElementById("image");

    if (blurLevel > 0) {
        image.classList.add("blur");
        image.style.filter = "blur(" + blurLevel + "px)";
    } else {
        image.classList.remove("blur");
        image.style.filter = "none";
    }
}

function adjustBorder() {
    var slider = document.getElementById("border-width");
    var borderWidth = slider.value;
    var image = document.getElementById("image");

    image.style.borderWidth = borderWidth + "px";
    // Add the class to apply border
    image.classList.add("image-with-border");
}
