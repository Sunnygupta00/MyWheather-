const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9d6acc1221msh5f4a999aeb8299cp1d1c38jsn82eec08c9eb0',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityKaName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            // console.log(response.feels_like)
            temp2.innerHTML = response.temp
            wind_speed2.innerHTML = response.wind_speed
            feels_like.innerHTML = response.feels_like
            humidity2.innerHTML = response.humidity
            humidity.innerHTML = response.humidity
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            sunrise.innerHTML = timeConverter(response.sunrise)
            sunset.innerHTML = timeConverter(response.sunset)
            temp.innerHTML = response.temp
            wind_degrees.innerHTML = response.wind_degrees
            wind_speed.innerHTML = response.wind_speed
            // other things
            // Feels_like.innerHTML = response.feels_like
            Humidity.value = response.humidity
            Max_temp.innerHTML = response.max_temp
            Min_temp.innerHTML = response.min_temp
            Sunrise.innerHTML = response.sunrise
            Sunset.innerHTML = response.sunset
            Temp.innerHTML = response.temp
            Wind_degrees.innerHTML = response.wind_degrees
            Wind_speed.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));
}
submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})
getWeather('Delhi')
function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    return time;
}

