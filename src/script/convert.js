export default class Convert{
  static toCountryName(countryCode){
    const regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
    return regionNames.of(countryCode);
  }

  static getWeekDay(num){
    const weekdayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return weekdayNames[num];
  }

  static getFormattedDay(date){
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let year = date.getFullYear();
    let month = monthNames[date.getMonth()];
    let day = date.getDate();
    let weekday = weekdayNames[date.getDay()];
    return `${weekday}, ${day} ${month} ${year}`;
  }

  static getFormattedTime(date){
    const time = date.toLocaleTimeString('en-US', { hour: '2-digit',minute: '2-digit'});
    return time;
  }

  static weatherToPic(icon){
    return "https://openweathermap.org/img/wn/"+ icon;
  }

  static KToC(k){
    const c = k - 273.15;
    return Math.round(c);
  }
}
