export default class Convert{
  static toCountryName(countryCode){
    const regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
    return regionNames.of(countryCode);
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
}
