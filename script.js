const userName = prompt("Please enter your name:");
const welcomeMessage = document.getElementById("welcomeMessage");

if (userName) {
    welcomeMessage.textContent = `Hey ${userName}, Welcome!`;
} else {
    welcomeMessage.textContent = "Hey there, Welcome!";
}


let inputs = document.getElementById("input");
let text = document.querySelector(".text");

function Add(){
    if(inputs.value == ""){
        alert("Please Enter a Task!");
    } 

    else{
        let newElement = document.createElement("ul");
        newElement.innerHTML = `${inputs.value} <i class="fa-solid fa-trash" style="color: #264653;"></i>`;
        text.appendChild(newElement); //putting child in text
        inputs.value = "";
        newElement.querySelector("i").addEventListener("click", remove);
        function remove(){
            newElement.remove();
        }
    }
}