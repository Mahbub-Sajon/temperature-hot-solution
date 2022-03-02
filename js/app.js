const API_KEY = `6e51236ae33535215fc01c02876566b5`;
const searchTemperature = () =>{
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon=${city}&appid=${API_KEY}`;
    console.log(url);
}