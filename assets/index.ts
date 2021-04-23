import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";

const video = document.querySelector("video");
const player = new MediaPlayer({
    el: video,
    plugins: [new AutoPlay(), new AutoPause()],
});

const togglePlayBtn:HTMLElement = document.querySelector("#togglePlay");
const toggleMuteBtn:HTMLElement = document.querySelector("#toggleMute");

togglePlayBtn.onclick = () => player.togglePlay();
toggleMuteBtn.onclick = () => player.toggleMute();

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").catch((error) => {
        console.log(error);
    });
}
