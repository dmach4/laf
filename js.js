function vibra() {
    window.navigator.vibrate(4000);
}

document.querySelector(".card-item img").addEventListener("click", vibra);