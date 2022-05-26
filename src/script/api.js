export default class API{
  static start(cityName){
    const url = API.makeRequestUrl(cityName);
    console.log(url);
    const data = API.requestData(url);
    console.log(data);
  }

  static makeRequestUrl(cityName){
    return `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=1bd3a1f212c7d6849195a18bd92cac18`;
  }

  static async requestData(url){
    try {
      const response = await fetch(url,{mode:'cors'});
      const weatherData = await response.json();
      return weatherData;
    } catch {
      console.log("Failed")
    }

  }
}
