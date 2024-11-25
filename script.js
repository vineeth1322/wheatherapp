const apiKey = "1704bd675377c94cec42d593cb3459a9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const wheatherIcon = document.querySelector(".wheather-icon")
async function checkWheather(city){
    const response = await fetch(apiUrl + city  + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".wheather").style.display = "none"
    }
    else{
    var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
    if(data.weather[0].main == "Clouds"){
        wheatherIcon.src = "images/Clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        wheatherIcon.src = "images/Clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        wheatherIcon.src = "images/Rain.png"
    }
    else if(data.weather[0].main == "Dizzle")
    {
        wheatherIcon.src = "images/dizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        wheatherIcon.src = "images/mist.png"
    }
    else {
        wheatherIcon.src = "images/snow.png"
    }

    document.querySelector(".wheather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    }
    
}
searchbtn.addEventListener("click" , ()=>{
checkWheather(searchBox.value);
})