let cityname=document.querySelector(".weather_city");
let datetime=document.querySelector(".weather_date_time");
let weatherforecast=document.querySelector(".weather_forecast");
let weatherIcon=document.querySelector(".weather_icon");
let weathertemperature=document.querySelector(".weather_temperature")
let weathermin=document.querySelector(".weather_min");
let weathermax=document.querySelector(".weather_max");


let weatherfeelslike=document.querySelector(".weather_feelslike");
let weatherhumidity=document.querySelector(".weather_humidity");
let weatherwind=document.querySelector(".weather_wind");    
let weatherpressure=document.querySelector(".weather_pressure");

let citysearch=document.querySelector(".weather_search");





const getcountryname=(countrycode)=>{
    const regionNames=new Intl.DisplayNames([countrycode],{type:'region'});
    return regionNames.of(countrycode);
}



// city search

let city="Delhi";
//search funcitionality
citysearch.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    let cityname=document.querySelector(".city_name");
    console.log(cityname.value);
    city=cityname.value;
    getweatherData();
    cityname.value="";
});












const getweatherData=async()=>{
    const weatherurl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ab16816669b3441c83336d91c9f6a8dc&units=metric`;
   
   
   
   
    try{
const response=await fetch(weatherurl);
const data=await response.json();
console.log(data);











const getdateTime=(dt)=>{


const curdate=new Date(dt*1000); //convert seconds to milliseconds
console.log(curdate);
const options={weekday:'long',
    year:'numeric',
    month:'long',
    day:'numeric',
    hour:'numeric',
    minute:'numeric',
    second:'numeric'};
    
// const formatter=curdate.toLocaleDateString('en-US',options);
// console.log(formater);
const formatter=new Intl.DateTimeFormat('en-US',options);
return formatter.format(curdate);


    }



    const {main,name,weather ,wind ,sys,dt}=data;
cityname.innerHTML=`${name}, ${getcountryname(sys.country)}`;
    datetime.innerHTML=getdateTime(dt);
    weathertemperature.innerHTML=`${main.temp}&#176;C`;
weathermin.innerHTML=`Min: ${main.temp_min}&#176;C`;
    weathermax.innerHTML=`Max: ${main.temp_max}&#176;C`;
weatherfeelslike.innerHTML=`${main.feels_like}&#176;C`;
    weatherhumidity.innerHTML=`${main.humidity}%`;
    weatherwind.innerHTML=`${wind.speed}m/s`;
    weatherpressure.innerHTML=`${main.pressure}hPa`;
    weatherforecast.innerHTML=weather[0].main;   
  weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="Weather icon"/>`;






    }

    
    
    


    catch(error){
        console.error("Error fetching weather data:", error);
    }

    
};

document.body.addEventListener('load',getweatherData());