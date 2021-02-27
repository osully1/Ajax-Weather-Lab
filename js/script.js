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
const $feels = $('#feels');
const $weather = $('#weather');
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
        $.ajax('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=minutely,hourly,alerts&appid=75dcf49aa00cf6f2688201a9d671775b').then (function(data2) {
            $city.text(data.name);
            $temp.text('Today: ' + (Math.round(data2.daily[0].temp.day) - 273) + '°C');
            $temp2.text('Tomorrow: ' + (Math.round(data2.daily[1].temp.day) - 273) + '°C');
            $temp3.text('3 days: ' + (Math.round(data2.daily[2].temp.day) - 273) + '°C');
            $temp4.text('4 days: ' + (Math.round(data2.daily[3].temp.day) - 273) + '°C');
            $temp5.text('5 days: ' + (Math.round(data2.daily[4].temp.day) - 273) + '°C');
            $temp6.text('6 days: ' + (Math.round(data2.daily[5].temp.day) - 273) + '°C');
            $temp7.text('7 days: ' + (Math.round(data2.daily[6].temp.day) - 273) + '°C');
            
            $feels.text(Math.round(data.main.feels_like - 273) + ' C');
            $weather.text(data.weather[0].description);
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