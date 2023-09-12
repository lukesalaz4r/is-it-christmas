document.addEventListener("DOMContentLoaded", () => {
    const isItChristmasElement = document.querySelector("#is-it-christmas");
    const date = new Date();
    console.log(date.getDate());
    console.log(date.getMonth());

    if (date.getDate() == 25 && date.getMonth() == 11) {
        isItChristmasElement.innerHTML = "YES";
    }
    else {
        isItChristmasElement.innerHTML = "NO";
    }
});