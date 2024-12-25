var overlay = document.querySelector('.overlay')
var cityName = document.querySelector('#cityName')
var button = document.querySelector('#search')
var Tempdesc = document.querySelector('#desc')
var temp = document.querySelector('#Temp')
var city = document.querySelector('#City')
var humidity = document.querySelector('#Humid')
var wind = document.querySelector('#Wind')

button.addEventListener('click',() => {
    if (cityName.value ==='') {
        alert('Enter city name')
        return
    }
    overlay.style.display ='flex'

    setTimeout(async () => {
        let apiURI = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=322a4a97f56773a816dd4572b9331336`

        const res = await fetch(apiURI)
        const data = await res.json()
        console.log(data)

        if(data) {
            overlay.style.display ='none'
            if (data.cod === '404') {
                alert(data.message)
            }
            else {
                Tempdesc.innerHTML = data.weather[0].description
                temp.innerHTML = (data.main.temp - 273.15).toFixed(2)+'°C'
                city.innerHTML = data.name
                humidity.innerHTML = data.main.humidity
                wind.innerHTML = data.wind.speed+'meter/sec'
            }
        }

    }, 1500);
})