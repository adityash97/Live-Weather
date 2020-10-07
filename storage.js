// {
//     "request":{"type":"City","query":"Kolkata, India","language":"en","unit":"m"},
//     "location":{"name":"Kolkata","country":"India","region":"West Bengal","lat":"22.570","lon":"88.370",
//                 "timezone_id":"Asia\/Kolkata","localtime":"2020-06-02 07:38","localtime_epoch":1591083480,
//                     "utc_offset":"5.50"},
//     "current":{"observation_time":"02:08 AM","temperature":29,"weather_code":143,
//                 "weather_icons":["https:\/\/assets.weatherstack.com\/images\/wsymbols01_png_64\/wsymbol_0006_mist.png"],
//                 "weather_descriptions":["Haze"],"wind_speed":9,"wind_degree":210,"wind_dir":"SSW","pressure":1007,"precip":0,
//                     "humidity":84,"cloudcover":50,"feelslike":35,"uv_index":11,"visibility":4,"is_day":"yes"},
//     "forecast":{
//         "2020-06-01":{"date":"2020-06-01","date_epoch":1590969600,
//             "astro":{"sunrise":"04:52 AM","sunset":"06:17 PM","moonrise":"01:42 PM","moonset":"01:23 AM",
//                 "moon_phase":"Waxing Gibbous","moon_illumination":71},"mintemp":25,"maxtemp":37,"avgtemp":31,
//                     "totalsnow":0,"sunhour":13.3,"uv_index":8}}}

class Storage{
    insertData(datas){
        let arr = []
        datas.forEach(element => {
            arr.push(element)
        });
        localStorage.setItem('weatherReport',JSON.stringify(arr))
    }

}