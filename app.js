var btnTranslator = document.querySelector("#btn-trans");
var inputText = document.querySelector("#in-txt-area");
var outputText = document.querySelector("#out-txt-area");

var url = "https://api.funtranslations.com/translate/minion";

function constructUrl(text) {
    return url + "?text=" + text;
}

function errorHandler(error) {
    console.log("Error occured! " + error);
    alert("Error occured! Something went wrong!");
}

function getTranslation(input) {
    var inputTxt = input.value;
    fetch(constructUrl(inputTxt))
        .then(Response => Response.json())
        .then(json => {
            var translatedTxt = json.contents.translated;
            outputText.innerText = translatedTxt;
        })
        .catch(errorHandler);
}

btnTranslator.addEventListener("click", function clickEventHandler() {
    getTranslation(inputText);
})