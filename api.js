const url = "http://api.weatherbit.io/v2.0/current?city=Riyadh&lat=35.7796&lon=-78.6382&key=d212eb8e85624b3085b4f6c368bc209c&include=minutely";


fetch(url).then((res)=> {
    res.json().then((res)=>{
        console.log(res.data[0]);
        let time = res.data[0].ob_time;
        let subtime = time.substr(time.length - 5);
        let d = `
        <div class="d-flex">
        <h3 class="flex-grow-1 " id ="cityName">${res.data[0].city_name}</h3>
        <h6 id="time">${subtime}</h6>
      </div>
    
      <div class="d-flex flex-column text-center mt-5 mb-4">
        <h6 class="display-4 mb-0 font-weight-bold" style="color: #1C2331;" id="deg"> ${res.data[0].temp}°C </h6> 
        <span class="small" style="color: #868B94" id="stat">${res.data[0].weather.description}</span>
      </div>
    
      <div class="d-flex align-items-center">
        <div class="flex-grow-1" style="font-size: 1rem;">
          <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span class="ms-1"> ${res.data[0].wind_spd} km/h </span></div> 
          <div><i class="fas fa-tint fa-fw" style="color: #868B94;"></i> <span class="ms-1"> ${res.data[0].rh}% </span></div> 
          <div><i class="fas fa-sun fa-fw" style="color: #868B94;"></i> <span class="ms-1"> 0.2h </span></div>
        </div>
        <div>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.png" width="100px">
        </div>
      </div>
    
        
        `;

        document.getElementById("weatherData").innerHTML = d;

    });

  

});


