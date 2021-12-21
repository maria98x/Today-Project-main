
const searchInput = document.querySelector("#search-input");
const searchBut = document.querySelector("#search-addon");

const searchInput2 = document.querySelector("#searchInput2");
const searchBut2 = document.querySelector("#searchBut2");

let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let current = document.querySelector("#current");


let currentPage =1;
let prevPage = 0;
let nextPag=2;
let totalPages =17;

let url = 'https://api.weatherbit.io/v2.0/current?city=Jeddah&key=d212eb8e85624b3085b4f6c368bc209c&include=minutely';
let url2 = 'https://newsapi.org/v2/top-headlines?category=General&sortBy=popularity&pageSize=6&page=1&language=en&apiKey=5ba5a686789b445bbe3ebae32358f4bb';


next.addEventListener("click", ()=>{

  if (nextPag<=totalPages){
    nextPag++;
    prevPage++;
    currentPage++
    url2 ="https://newsapi.org/v2/top-headlines?category=General&pageSize=6&page="+currentPage+"&sortBy=popularity&language=en&apiKey=5ba5a686789b445bbe3ebae32358f4bb";
    setNews();
    current.innerHTML=currentPage;
  }
})




prev.addEventListener("click", ()=>{

  if (prevPage>0){
    nextPag--;
    prevPage--;
    currentPage--;
    url2 ="https://newsapi.org/v2/top-headlines?category=General&pageSize=6&page="+currentPage+"&sortBy=popularity&language=en&apiKey=5ba5a686789b445bbe3ebae32358f4bb";
    setNews();
    current.innerHTML=currentPage;
    
  }
})


setNews();
$('ul.nav-tabs > li').click(function (e) {

currentPage =1;
prevPage = 0;
 nextPag=2;
  e.preventDefault();
  var getItem = $(this).text();
  var id = this.id;
  url2 = 'https://newsapi.org/v2/top-headlines?category='+ id +'&pageSize=6&page=1&sortBy=popularity&language=en&apiKey=5ba5a686789b445bbe3ebae32358f4bb';
  setNews();
  current.innerHTML=currentPage;

});

searchBut2.addEventListener("click",function(){

  currentPage =1;
  prevPage = 0;
   nextPag=2;
  url2 = 'https://newsapi.org/v2/everything?q='+searchInput2.value+'&sortBy=popularity&pageSize=6&page=1&language=en&apiKey=5ba5a686789b445bbe3ebae32358f4bb';
  setNews();
  current.innerHTML=currentPage;
})


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

function setNews(){

  fetch(url2).then((res) => {
    res.json().then((res)=>{

      var myOb= res.articles;
     console.log(myOb)
    document.getElementById("newsData").innerHTML = res.articles.map(ar =>
        
         `  <div class="col-md-6 col-lg-4 mx-auto my-2" >
    
         <div class="card shadow cardSize">
         <img
           src="${ar.urlToImage}"
           class="card-img-top t"
           alt="Hollywood Sign on The Hill"
         />
         <div class="card-body ">
         <p class="card-text ">${ar.publishedAt.split("T")[0]} </p>
           <h5 class="card-title ">${ar.title}</h5>
           <p class="card-text">
            ${ar.description}
           </p>
           <p class="card-text">${ar.author} </p>
         </div>
         <div class="card-footer">  <a href="${ar.url}" class="btn myColor text-white ">Read more </a></div>
    
       </div>
         </div>
    `
    
        )  .join("");
    });
    });
    
    
}



