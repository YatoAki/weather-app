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

  static updateTime(date){

    const formattedDay = Convert.getFormattedDay(date);
    const formattedTime = Convert.getFormattedTime(date);

    const datePara = document.getElementById("date");
    datePara.textContent = formattedDay;

    let splitTime = formattedTime.split(" ");
    const timePara = document.getElementById("time");
    timePara.innerHTML = `${splitTime[0]}<span>${splitTime[1]}<span>`;
  }

  static updateHourlyPredict(hourlyData){
    const seven = document.getElementById("7");
    const oneFive = document.getElementById("15");
    const twoThree = document.getElementById("23");

    const sevenData = hourlyData[14]['weather'][0]["description"];
    const oneFiveData = hourlyData[30]["weather"][0]["description"];
    const twoThreeData = hourlyData[46]["weather"][0]["description"];

    seven.textContent = `${sevenData} expected.`;
    oneFive.textContent = `${oneFiveData} can appear.`;
    twoThree.textContent = `we may see ${twoThreeData}.`;
  }

  static updateTodayPredict(todayData,date){
    const todayTemperature = Convert.KToC(todayData.main.temp);
    const todayWeather = todayData.weather[0]["description"];
    const todayIcon = Convert.weatherToPic(todayData.weather[0]["icon"]) + ".png";
    const weekday = Convert.getWeekDay(date.getDay());

    const today = document.querySelector(".today");
    today.textContent = "";
    const img = document.createElement("img");
    const div = document.createElement("div");
    const todayPara = document.createElement("p");
    const para = document.createElement("p");

    console.log(img,div,todayPara,para);

    img.src = todayIcon;
    img.classList.add("large-icon");
    todayPara.textContent = "Today";
    div.appendChild(todayPara);
    para.classList.add("temp");
    para.textContent = todayTemperature + "°";
    div.appendChild(para);
    today.appendChild(img);
    today.appendChild(div);
  }

  static updateWeeklyPredict(weeklyData,date){
    const daily = document.querySelector(".daily");
    daily.textContent = "";
    for (let i = 1; i < 7 ; i+=1){
      let weekDay = Convert.getWeekDay((date.getDay() + i)%7);
      let weather = weeklyData[i].weather[0]["description"];
      let icon = Convert.weatherToPic(weeklyData[i].weather[0]["icon"]) + ".png";
      let temp = Convert.KToC((weeklyData[i].temp.max + weeklyData[1].temp.min)/2);

      daily.append(UI.createDailyCard(weekDay,weather,icon,temp));
    }
  }

  static createDailyCard(weekDay,weather,icon,temp){
    const div = document.createElement("div");
    div.classList.add("daily-data");
    const dayPara = document.createElement("p");
    dayPara.textContent = weekDay;
    const img = document.createElement("img");
    img.src = icon;
    img.classList.add("small-icon");
    const tempPara = document.createElement("p");
    tempPara.textContent = temp + "°";
    div.appendChild(dayPara);
    div.appendChild(img);
    div.appendChild(tempPara);
    return div;
  }

}
