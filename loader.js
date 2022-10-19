var loading;

function loadNow(opacity) {
    if (opacity <= 0) {
        displayContent();
    } else {
        loader.style.opacity = opacity;
        window.setTimeout(function () {
            loadNow(opacity - 0.045);
        }, 200);
    }
}

function displayContent() {
    loader.style.display = 'none';
    document.getElementById('').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function () {
    loader = document.getElementById('loading');
    loadNow(1);
});