const pic = document.getElementById("meisho");
const sound = new Audio("awawawawa_meisho_doto.mp3");

pic.addEventListener("click", () => {
    pic.width = 400;
    pic.height = 400;
    sound.play();
});