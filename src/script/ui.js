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
    searchBtn.addEventListener("click", UI.getInput);
  }
}
