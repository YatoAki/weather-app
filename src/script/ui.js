import API from "./api.js"


export default class UI{

  static loadPage(){
    UI.setBtn();
  }

  static getInput(){
    const input = document.getElementById("city");
    API.start(input.value);
  }

  static setBtn(){
    const searchBtn = document.getElementById("search-btn");
    const input = document.getElementById("city");
    searchBtn.addEventListener("click", UI.getInput);
    input.addEventListener("keypress",(e) =>{
      if (event.key === "Enter"){
        event.preventDefault();
        UI.getInput();
      }
    });
  }

  static handleError(cityName){
    const error = document.getElementById("error");
    error.textContent = "Sorry, the name of the city is not found.";
  }

  static cleanUpInput(){
    const input = document.getElementById("city");
    const error = document.getElementById("error");
    input.value = "";
    error.textContent = "";
  }
}
