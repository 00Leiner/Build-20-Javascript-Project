const display = document.getElementById("_status");
const body = document.body;
const submit = document.getElementById("_submit");
const refresh = document.getElementById("_refresh");

const char = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

currentCaptcha = "";

function generateCaptchaFunction(){
    let captcha = "";

    const captchaLength = 6;
    for(let i = 0; i<captchaLength; i++){
        const randomIndex = Math.floor(Math.random() * char.length);
        captcha += char.substring(randomIndex,randomIndex + 1);
    }
    currentCaptcha = captcha
    document.getElementById("_generator").value = captcha;
    display.innerText = "Captcha Generator"
}

body.onload = function generateCaptcha(){
    generateCaptchaFunction()

}

refresh.onclick = function refreshCaptcha(){
    generateCaptchaFunction()

}

submit.onclick = function chekckInput(){
    const input = document.getElementById("_client-text").value;

    if(input === ""){
        display.innerText = "Please Enter the text Shown below👇";
    }else if(input === currentCaptcha){
        display.innerText = "Matched😎";
    }else{
        display.innerText = "Not-Matched😖";
    }

}

