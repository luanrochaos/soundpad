function playSound(id) {
    document.querySelector(id).play();
}

const buttonList = document.querySelectorAll('.tecla');
let counter = 0;

for(let counter = 0; counter < buttonList.length; counter++) {

    const button = buttonList[counter];
    const instrument = button.classList[1];
    const idAudio = `#som_${instrument}`;

    button.onclick = function() {
        playSound(idAudio);
    }
}