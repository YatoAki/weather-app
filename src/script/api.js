import UI from "./ui.js"

export default class API{
  static start(cityName){
    const url = API.makeRequestUrl(cityName);
    const initialData = API.requestData(url);
    console.log(initialData);
  }

  static makeRequestUrl(cityName){
    return `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=1bd3a1f212c7d6849195a18bd92cac18`;
  }

  static async requestData(url){
    try {
      const response = await fetch(url,{mode:'cors'});
      const weatherData = await response.json();
      if (weatherData.cod !== 200){
        UI.handleError();
        return null;
      }else{
        UI.cleanUpInput();
        return weatherData;
      }
    } catch (error){
      console.log("Error occured");
    }
  }


}
