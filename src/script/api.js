import UI from "./ui.js"

export default class API{
  static async start(cityName){
    const initialData = await API.requestInitialData(cityName);
    console.log(initialData);
    if (!initialData) return;
    UI.updateLocation(initialData.name,initialData.sys.country);
    const lon = initialData.coord.lon;
    const lat = initialData.coord.lat;
    const detailData = await API.requestDetailData(lon,lat);
    const datetime_str = new Date().toLocaleString("en-US", { timeZone: detailData.timezone });
    const date = new Date(datetime_str);

    UI.updateTime(date);
    UI.updateHourlyPredict(detailData.hourly);
    UI.updateTodayPredict(initialData,date);
    UI.updateWeeklyPredict(detailData.daily,date);
  }

  static makeDetailRequestUrl(lon,lat){
    return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts,minutely&appid=1bd3a1f212c7d6849195a18bd92cac18`
  }

  static async requestDetailData(lon,lat){
    const url = API.makeDetailRequestUrl(lon,lat);
    try {
      const response = await fetch(url,{mode:'cors'});
      const weatherData = await response.json();
      return weatherData;
    } catch (error){
      UI.handleError("Sorry, our API is having technical problems.");
    }
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
        UI.handleError("Sorry, the name of the city is not found.");
        return null;
      }else{
        UI.cleanUpInput();
        return weatherData;
      }
    } catch (error){
      UI.handleError("Sorry, our API is having technical problems.");
    }
  }


}
