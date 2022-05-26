export default class Convert{
  static toCountryName(countryCode){
    const regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
    return regionNames.of(countryCode);
  }
}
