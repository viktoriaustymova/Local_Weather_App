const weatherBlock = document.getElementById('weather');
const urlGetLocation = "https://get.geojs.io/v1/ip/geo.json"; 
const urlCheckWeather = "https://api.open-meteo.com/v1/forecast?";
getLocalWeather();

async function getLocalWeather(){
    const response = await fetch(urlGetLocation);
    const data = await response.json();
    console.log(data);

    document.getElementById('city').innerHTML = data.city; 
    const latitude = data.latitude;
    const longitude = data.longitude;   

    const responseWeather = await fetch(urlCheckWeather + `latitude=${latitude}&longitude=${longitude}&current_weather=true`);
    const dataWeather = await responseWeather.json();
    console.log(dataWeather);

    document.getElementById('temperature').innerHTML = Math.floor(dataWeather.current_weather.temperature) + "°C"; 
    document.getElementById('windspeed').innerHTML = Math.floor(dataWeather.current_weather.windspeed)+ " km/h";
    const weathercode  = dataWeather.current_weather.weathercode;

    switch (weathercode){
        case 0 : document.getElementById('weathercode').innerHTML = "Clear Sky"
        break;
        case 1: document.getElementById('weathercode').innerHTML = "Mainly clear"
        break;
        case 2: document.getElementById('weathercode').innerHTML = "Partly cloudy"
        break;
        case 3 : document.getElementById('weathercode').innerHTML = "Overcast"
        break;
        case 45 : document.getElementById('weathercode').innerHTML = "Fog"
        break;
        case 48 : document.getElementById('weathercode').innerHTML = "Depositing rime fog"
        break;
        case 51 : document.getElementById('weathercode').innerHTML = "Light drizzle"
        break;
        case 53 : document.getElementById('weathercode').innerHTML = "Moderate drizzle"
        break;
        case 55 : document.getElementById('weathercode').innerHTML = "Dense intencity drizzle"
        break;
        case 56 : document.getElementById('weathercode').innerHTML = "Light freezing drizzle"
        break;
        case 57 : document.getElementById('weathercode').innerHTML = "Dense intencity freezing drizzle"
        break;
        case 61 : document.getElementById('weathercode').innerHTML = "Slight rain"
        break;
        case 63 : document.getElementById('weathercode').innerHTML = "Moderate rain"
        break;
        case 65 : document.getElementById('weathercode').innerHTML = "Heavy intensity rain" 
        break;
        case 66 : document.getElementById('weathercode').innerHTML = "Light freezing rain" 
        break;
        case 67 : document.getElementById('weathercode').innerHTML = "Heavy intensity freezing rain" 
        break;
        case 71 : document.getElementById('weathercode').innerHTML = "Slight snow fall" 
        break;
        case 73 : document.getElementById('weathercode').innerHTML = "Moderate snow fall" 
        break;
        case 75 : document.getElementById('weathercode').innerHTML = "Heavy intensity snow fall" 
        break;
        case 77 : document.getElementById('weathercode').innerHTML = "Snow grains" 
        break;
        case 80 : document.getElementById('weathercode').innerHTML = "Slight rain showers" 
        break;
        case 81 : document.getElementById('weathercode').innerHTML = "Moderate rain showers" 
        break;
        case 82 : document.getElementById('weathercode').innerHTML = "Violent rain showers" 
        break;
        case 85 : document.getElementById('weathercode').innerHTML = "Snow showers slight" 
        break;
        case 86 : document.getElementById('weathercode').innerHTML = "Heavy snow showers" 
        break;
        case 95 : document.getElementById('weathercode').innerHTML = "Thunderstorm: Slight or moderate" 
        break;
        case 96 : document.getElementById('weathercode').innerHTML = "Thunderstorm with slight hail" 
        break;
        case 99 : document.getElementById('weathercode').innerHTML = "Thunderstorm with heavy hail" 
        break;
    }
    
}








