const display = document.querySelector('.display');
const buttons = document.querySelectorAll("button");
const specialChars = ['%','*','/','-','+','='];
let output = "";
let toggleBtn =document.querySelector('.toggleBtn')
let body = document.querySelector('body');

const calculate = (btnValue) => {
    if (btnValue === "=" && output!== ""){
        output = eval(output.replace("%","/100"));
    }
    else if(btnValue === "AC"){
        output = ""
    }
    else if(btnValue === "DEL"){
        output = output.toString().slice(0 , -1);
    }
    else{
        if(output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
}

function handleKeyPress(event) {
    const key = event.key;
    
    if (/[0-9+\-*/.=%]/.test(key)) {
      calculate(key);
    }
    if(key === "Backspace"){
        calculate("DEL");
    }
    if(key === "Enter"){
        calculate("=");
    }
    if(key === "c"){
        calculate("AC");
    }
}

buttons.forEach((button) => {
    button.addEventListener("click" , (e) => calculate(e.target.dataset.value));
});

toggleBtn.onclick = function(){
    body.classList.toggle('dark');
}

document.addEventListener('keydown', handleKeyPress);