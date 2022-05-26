import UI from "./ui.js"

export default class API{
  static async start(cityName){
    const initialData = await API.requestInitialData(cityName);
    console.log(initialData);
    // const detailData = await API.requestDetailData(url);
  }

  static makeInitialRequestUrl(cityName){
    return `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=1bd3a1f212c7d6849195a18bd92cac18`;
  }

  static async requestInitialData(cityName){
    const url = API.makeInitialRequestUrl(cityName);
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
