// SELECTORS
const btn = document.querySelector("#button");
const inputField = document.querySelector("#input");
const answerField = document.querySelector("#answer");

// API ENDPOINT
const API_URL = "https://yesno.wtf/api";

// FUNCTION TO FETCH ANSWER
const fetchAnswer = () => {
    if (!inputField.value.trim()) return; // Ignore if input is empty

    btn.disabled = true;
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            answerField.value = data.answer;
            setTimeout(clearResponse, 3000);
        });
};

// FUNCTION TO CLEAR RESPONSE
const clearResponse = () => {
    answerField.value = "";
    btn.disabled = false;
};

// EVENT LISTENER
btn.addEventListener("click", fetchAnswer);
