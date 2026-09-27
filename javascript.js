const apikey = "6b36a39459687f7cc7569a789287c6f7";


const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector('.search input');

const searchbtn = document.querySelector('.search button');

const weathericon = document.querySelector(".weather-icon")

async function checkweather(city) {
  
  city= city.trim();
  if (city =="") return;
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);
  var data = await response.json();
/*  console.log(data);*/
  
  if (data.cod == "404") {
   
     document.querySelector(".error").style.display = "block";
       document.querySelector(". weather").style.display = "none";
    alert("City not found" +city+ "| check the right spelling");
    return;
  }
  console.log("Noida Temp:", data.main.temp + "°C");
  document.querySelector('.city'). innerHTML=data.name;

  document.querySelector('.temp'). innerHTML=Math.round(data.main.temp)+"°c";
  
 document.querySelector('.humidity'). innerHTML=data.main.humidity+"%";
  
   document.querySelector('.wind'). innerHTML=data.wind.speed+ " km/h";
   
   if (data.weather[0].main == "Clouds") {
     weathericon.src = "imge/clouds.png";
   } else if (data.weather[0].main == "Clear") {
     weathericon.src = "imge/clear.png";
   }else if (data.weather[0].main == "Rain") {
     weathericon.src = "imge/rain.png";
   }
  else if (data.weather[0].main == "Drizzel") {
     weathericon.src = "imge/drizzel.png";
   }
   
  else if (data.weather[0].main == "Mist") {
    weathericon.src = "imge/mist.png";
  }
   document.querySelector(".weather").style.display = "block";
}
searchbtn.addEventListener("click",()=>{
  checkweather(searchbox.value);
})

