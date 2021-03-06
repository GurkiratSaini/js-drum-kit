document.addEventListener('DOMContentLoaded', () =>{

const keys = document.querySelectorAll(".key");

function playSound(event){
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if(!audio) {
        return;
    }
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
    recordKeysPressed(key);
}

function removeTransition(event) {
    if(event.propertyName != "transform") {
        return;
    }
    this.classList.remove("playing");
}

window.addEventListener("keydown", playSound);

keys.forEach(key => key.addEventListener("transitionend", removeTransition));
});