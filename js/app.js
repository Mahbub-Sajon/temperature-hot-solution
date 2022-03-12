const API_KEY = `6e51236ae33535215fc01c02876566b5`;
const searchTemperature = () =>{
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemerature(data))
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemerature = temperature => {
    setInnerText("city", temperature.name);
    console.log(temperature);
}