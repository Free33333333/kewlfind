const pic = document.getElementById("meisho");
const video = document.getElementById("rick");

pic.addEventListener("click", () => {
    pic.style.display = "none";
    video.style.display = "block";
    video.play();
});