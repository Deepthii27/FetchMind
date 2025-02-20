//SELECTORS
const btnSelector = document.querySelector("#button");
const inputSelector = document.querySelector("#input");
const answerSelector = document.querySelector("#answer");


//API
const API_ENDPOINT = "https://yesno.wtf/api";

//FLAGS
let isRequestInProgress = false;

const setIsRequestInProgress = value => {
    isRequestInProgress = value;
};

const setDisableButtonState = isDisabling => {
    if (isDisabling) {
        btnSelector.setAttribute("disabled", "disabled");
    }
    else {
        btnSelector.removeAttribute("disabled");
    }
};

const cleanupResponse = () => {
    setTimeout(() => {
        answerSelector.innerHTML = "";
        setIsRequestInProgress(false);
        setDisableButtonState(false);
    }, 5000);
};

const showAnswer = answer => {
    setTimeout(() => {
        answerSelector.innerHTML = answer;
    }, 2000);
}