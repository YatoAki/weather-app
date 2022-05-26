import API from "./api.js"
import Convert from "./convert.js"

export default class UI{

  static loadPage(){
    UI.setBtn();
    API.start("Mandalay");
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

  static updateTime(timezone){
    const datetime_str = new Date().toLocaleString("en-US", { timeZone: timezone });
    const date = new Date(datetime_str);
    const formattedDay = Convert.getFormattedDay(date);
    const formattedTime = Convert.getFormattedTime(date);

    const datePara = document.getElementById("date");
    datePara.textContent = formattedDay;

    let splitTime = formattedTime.split(" ");
    const timePara = document.getElementById("time");
    timePara.innerHTML = `${splitTime[0]}<span>${splitTime[1]}<span>`;
  }

}
