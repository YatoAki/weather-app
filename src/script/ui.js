import API from "./api.js"
import Convert from "./convert.js"

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

  static handleError(text){
    const error = document.getElementById("error");
    error.textContent = text;
  }

  static cleanUpInput(){
    const input = document.getElementById("city");
    const error = document.getElementById("error");
    input.value = "";
    error.textContent = "";
  }

  static updateLocation(cityName,countryCode){
    const countryName = Convert.toCountryName(countryCode);
    const location = document.getElementById("location");
    const country = document.getElementById("country");
    location.textContent = cityName;
    country.textContent = countryName;
  }
}
