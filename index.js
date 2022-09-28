let apiKey = "05db18bd300a26bfc14e19e29dcdb03a";

async function searchWeather (){
  const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${userLocation.value}&appid=${apiKey}&units=metric`
  let response = await fetch(endpoint)
  let jsonResponse = await response.json()
  console.log(jsonResponse)
  // let icon = `http://openweathermap.org/img/wn/${jsonResponse.weather[0].icon}@2x.png`
  cityName.innerHTML = jsonResponse.name;
  degree.innerHTML = `${Math.round(jsonResponse.main.temp)}${"<sup>°</sup>C"}`
  condition.innerHTML = jsonResponse.weather[0].description;
  country.innerHTML = jsonResponse.sys.country
  longitude.innerHTML = jsonResponse.coord.lon
  latitude.innerHTML = jsonResponse.coord.lat
  cloud.innerHTML = `${jsonResponse.clouds.all}${"%"}`
  pressure.innerHTML = jsonResponse.main.pressure
  humidity.innerHTML = `${jsonResponse.main.humidity}${"%"}`
  wind.innerHTML = `${jsonResponse.wind.speed}${"Km/hr"}`
  gust.innerHTML = `${jsonResponse.wind.gust}${"Km/hr"}`

  if (jsonResponse.weather[0].main === "Rain"){
    my_bodi.style.backgroundImage = `url(Img/Rainy.jpg)`;
    my_bodi.style.backgroundRepeat = 'no-repeat';
    my_bodi.style.backgroundPosition = 'center';
    my_bodi.style.backgroundSize = 'cover';
    my_bodi.style.height = '100vh';
  }
  else if(jsonResponse.weather[0].main === "Clouds"){
    my_bodi.style.backgroundImage = `url(Img/sunny-background.jpg)`;
    my_bodi.style.backgroundRepeat = 'no-repeat';
    my_bodi.style.backgroundPosition = 'Center';
    my_bodi.style.backgroundSize = 'Cover';
    my_bodi.style.height = '100vh';
  }
  else{my_bodi.style.backgroundImage = `url(Img/sunny-background.jpg)`}

}
async function currentLocation(){
  navigator.geolocation.getCurrentPosition((position)=>{
     let longiTude = position.coords.longitude
     let latiTude = position.coords.latitude
     let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latiTude}&lon=${longiTude}&appid=${apiKey}&units=metric`
     fetch(url).then((response)=>response.json()).then((currentLocation)=>{
         cityName.innerHTML = currentLocation.name;
         degree.innerHTML = `${Math.round(currentLocation.main.temp)}${"<sup>°</sup>C"}`
         condition.innerHTML = currentLocation.weather[0].description;
         country.innerHTML = currentLocation.sys.country
         longitude.innerHTML = longiTude
         latitude.innerHTML = latiTude
         cloud.innerHTML = `${currentLocation.clouds.all}${"%"}`
         pressure.innerHTML = currentLocation.main.pressure
         humidity.innerHTML = `${currentLocation.main.humidity}${"%"}`
         wind.innerHTML = `${currentLocation.wind.speed}${"Km/hr"}`
         gust.innerHTML = `${currentLocation.wind.gust}${"Km/hr"}`

         if (currentLocation.weather[0].main === "Rain"){
          my_bodi.style.backgroundImage = `url(Img/Rainy.jpg)`;
          my_bodi.style.backgroundRepeat = 'no-repeat';
          my_bodi.style.backgroundPosition = 'center';
          my_bodi.style.backgroundSize = 'cover';
          my_bodi.style.height = '100vh';
        }
        else if(currentLocation.weather[0].main === "Clouds"){
          my_bodi.style.backgroundImage = `url(Img/sunny-background.jpg)`;
          my_bodi.style.backgroundRepeat = 'no-repeat';
          my_bodi.style.backgroundPosition = 'Center';
          my_bodi.style.backgroundSize = 'Cover';
          my_bodi.style.height = '100vh';
        }
        else{my_bodi.style.backgroundImage = `url(Img/sunny-background.jpg)`};
   })
  })
}