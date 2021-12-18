

const searchInput = document.querySelector("#search-input");
const searchBut = document.querySelector("#search-addon");

let    url = 'https://api.weatherbit.io/v2.0/current?city=Jeddah&key=d212eb8e85624b3085b4f6c368bc209c&include=minutely';
setWeather ()
searchBut.addEventListener("click",function(){
    url = 'https://api.weatherbit.io/v2.0/current?city='+searchInput.value+'&key=d212eb8e85624b3085b4f6c368bc209c&include=minutely';
    setWeather ()
})

function setWeather (){
    fetch(url).then((res)=> {
        res.json().then((res)=>{          
            let time = res.data[0].ob_time;
            let subtime = time.substr(time.length - 5);
            let d = `
            <div class="d-flex">
            <h3 class="flex-grow-1 text-black" id ="cityName">${res.data[0].city_name}</h3>
            <h6 class="text-black"id="time">${subtime}</h6>
          </div>
        
          <div class="d-flex flex-column text-center mt-5 mb-4">
            <h6 class="display-4 mb-0 text-black"  id="deg"> <strong> ${res.data[0].temp}°C </strong></h6> 
            <span class="small text-black" style="color: #868B94" id="stat">${res.data[0].weather.description}</span>
          </div>
        
          <div class="d-flex align-items-center text-black">
            <div class="flex-grow-1 text-black" style="font-size: 1rem;">
              <div><i class="fas fa-wind fa-fw text-black" style="color: #868B94;"></i> <span class="ms-1"> ${res.data[0].wind_spd} km/h </span></div> 
              <div><i class="fas fa-tint fa-fw text-black" style="color: #868B94;"></i> <span class="ms-1"> ${res.data[0].rh}% </span></div> 
              <div><i class="fas fa-sun fa-fw text-black" style="color: #868B94;"></i> <span class="ms-1 "> 0.2h </span></div>
            </div>
            <div>
             <!-- pic-->
            </div>
          </div>
            
            `;
    
            document.getElementById("weatherData").innerHTML = d;
    
        });
    
      
    
    });
}

