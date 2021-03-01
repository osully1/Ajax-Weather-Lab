// API KEY: 75dcf49aa00cf6f2688201a9d671775b
// API LINK: api.openweathermap.org/data/2.5/weather?q={city name}&appid=75dcf49aa00cf6f2688201a9d671775b

//THIS CODE IS AN INCOMPLETE VERSION of bonus Ajax weather lab

//cached element references
const $city = $('#city');
    const $temp = $('#temp');
    const $temp2 = $('#temp2');
    const $temp3 = $('#temp3');
    const $temp4 = $('#temp4');
    const $temp5 = $('#temp5');
    const $temp6 = $('#temp6');
    const $temp7 = $('#temp7');
const $weather = $('#weather');
const $weather2 = $('#weather2');
const $weather3 = $('#weather3');
const $weather4 = $('#weather4');
const $weather5 = $('#weather5');
const $weather6 = $('#weather6');
const $weather7 = $('#weather7');
    const $icon1 = $('#icon1');
    const $icon2 = $('#icon2');
    const $icon3 = $('#icon3');
    const $icon4 = $('#icon4');
    const $icon5 = $('#icon5');
    const $icon6 = $('#icon6');
    const $icon7 = $('#icon7');
const $input = $('#searchBox');
const $error = $('#error-text');

// handler function
$('form').on('submit', handleWeatherInfo);

// function handleWeatherInfo(e) {
//     e.preventDefault();
//     const term = $input.val();
//     $.ajax('http://api.openweathermap.org/data/2.5/weather?q=' + term + '&appid=75dcf49aa00cf6f2688201a9d671775b').then (function(data) {
//         $city.text(data.name);
//         $temp.text(Math.round(data.main.temp - 273) + ' C');
//         $feels.text(Math.round(data.main.feels_like - 273) + ' C');
//         $weather.text(data.weather[0].description);
//     }, function() {
//         $error.text('Error');
//     })
//     document.getElementById('searchBox').value = ''
// }


function handleWeatherInfo(e) {
    e.preventDefault();
    const term = $input.val();
    $.ajax('http://api.openweathermap.org/data/2.5/weather?q=' + term + '&appid=75dcf49aa00cf6f2688201a9d671775b').then (function(data) {
        let lon = data.coord.lon
        let lat = data.coord.lat
        console.log(data.coord.lon)
        $.ajax('http://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=minutely,hourly,alerts&appid=75dcf49aa00cf6f2688201a9d671775b').then (function(data2) {
            $city.text(data.name);
            $temp.text((Math.round(data2.daily[0].temp.day) - 273) + '°C ' + '(feels ' + (Math.round(data2.daily[0].feels_like.day) - 273) + '°C)');
            $temp2.text((Math.round(data2.daily[1].temp.day) - 273) + '°C ' + '(feels ' + (Math.round(data2.daily[1].feels_like.day) - 273) + '°C)');
            $temp3.text((Math.round(data2.daily[2].temp.day) - 273) + '°C ' + '(feels ' + (Math.round(data2.daily[2].feels_like.day) - 273) + '°C)');
            $temp4.text((Math.round(data2.daily[3].temp.day) - 273) + '°C ' + '(feels ' + (Math.round(data2.daily[3].feels_like.day) - 273) + '°C)');
            $temp5.text((Math.round(data2.daily[4].temp.day) - 273) + '°C ' + '(feels ' + (Math.round(data2.daily[4].feels_like.day) - 273) + '°C)');
            $temp6.text((Math.round(data2.daily[5].temp.day) - 273) + '°C ' + '(feels ' + (Math.round(data2.daily[5].feels_like.day) - 273) + '°C)');
            $temp7.text((Math.round(data2.daily[6].temp.day) - 273) + '°C ' + '(feels ' + (Math.round(data2.daily[6].feels_like.day) - 273) + '°C)');
            
            $icon1.attr('src', 'http://openweathermap.org/img/wn/' + 
            data2.daily[0].weather[0].icon + '@4x.png')
            $icon2.attr('src', 'http://openweathermap.org/img/wn/' + 
            data2.daily[1].weather[0].icon + '@4x.png')
            $icon3.attr('src', 'http://openweathermap.org/img/wn/' + 
            data2.daily[2].weather[0].icon + '@4x.png')
            $icon4.attr('src', 'http://openweathermap.org/img/wn/' + 
            data2.daily[3].weather[0].icon + '@4x.png')
            $icon5.attr('src', 'http://openweathermap.org/img/wn/' + 
            data2.daily[4].weather[0].icon + '@4x.png')
            $icon6.attr('src', 'http://openweathermap.org/img/wn/' + 
            data2.daily[5].weather[0].icon + '@4x.png')
            $icon7.attr('src', 'http://openweathermap.org/img/wn/' + 
            data2.daily[6].weather[0].icon + '@4x.png')
            
            $weather.text(data2.daily[0].weather[0].description);
            $weather2.text(data2.daily[1].weather[0].description)
            $weather3.text(data2.daily[2].weather[0].description)
            $weather4.text(data2.daily[3].weather[0].description)
            $weather5.text(data2.daily[4].weather[0].description)
            $weather6.text(data2.daily[5].weather[0].description)
            $weather7.text(data2.daily[6].weather[0].description)
        }, function() {
            $error.text('Error');
        })})
    document.getElementById('searchBox').value = ''
}




//Working but rough 7 days temp below
// $temp.text(
//     ' Today: ' + (Math.round(data2.daily[0].temp.day) - 273) + '°C' + 
//     ' Tomorrow: ' + (Math.round(data2.daily[1].temp.day) - 273) + '°C' +
//     ' 3 days: ' + (Math.round(data2.daily[2].temp.day) - 273) + '°C' + 
//     ' 4 days: ' + (Math.round(data2.daily[3].temp.day) - 273) + '°C' +
//     ' 5 days: ' + (Math.round(data2.daily[4].temp.day) - 273) + '°C' + 
//     ' 6 days: ' + (Math.round(data2.daily[5].temp.day) - 273) + '°C' + 
//     ' 7 days: ' + (Math.round(data2.daily[6].temp.day) - 273) + '°C'
// )