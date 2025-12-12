import { nameValidation } from "./modules/utils.js";
import { emailValidation } from "./modules/utils.js";
import { phoneValidation } from "./modules/utils.js";
import { subjectValidation } from "./modules/utils.js";
import { messageValidation } from "./modules/utils.js";

let states = {name: false, email: false, phone:false, subject:false, message:false, terms:false};

const inputs = document.querySelectorAll('input');



const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputPhone = document.getElementById("phone");

const inputSubject = document.getElementById("subject");
const inputMessage = document.getElementById("message");


const inputTerms = document.getElementById("terms");

const contactForm = document.getElementById("contactForm");
const submitButton = document.getElementById("submitBtn");


contactForm.addEventListener("input", validateInput);

function validateInput(e) {
    const inputText = e.target.value;
    
    let idTag = e.target.id;

    switch (idTag) {
        case "name":
            states.name = nameValidation(inputText);
            break;
        case "email":
            states.email = emailValidation(inputText);
            
            break;
        case "phone":
            states.phone = phoneValidation(inputText);
            break;
        case "subject":
            states.subject = subjectValidation(inputText);
            break;
        case "message":
            states.message = messageValidation(inputText);
            break;
        case "terms":
            states.terms = e.target.checked; 
            break;
        case "submitBtn":
            break;
    }

    let element = e.target;
    if (element.type != "checkbox") {
        if (element.value != "") {
            if (!states[element.id]) {
                element.classList.remove("valid");
                element.classList.add("invalid");
            } else {
                element.classList.remove("invalid");
                element.classList.add("valid");    
            }
        } else {
            element.classList.remove("invalid");
            element.classList.remove("valid");
        }
    } else {
        if (element.checked) {
            element.classList.remove("invalid");
            element.classList.add("valid");
        } else {
            element.classList.add("invalid");
            element.classList.remove("valid");
        }
    }

    let formState = Object.values(states).every(v => v === true);
    submitButton.disabled = formState ? false : true;
}