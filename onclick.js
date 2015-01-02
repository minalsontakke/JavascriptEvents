function processClick() {

    console.warn("You have clicked body and called onclick");

}

document.onclick = processClick;
