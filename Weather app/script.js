let input = document.querySelector("input");
let Btn = document.querySelector("button");
let city = document.querySelector("#city");
let Temp = document.querySelector("#temp");
let img = document.querySelector("#img");
let Type = document.querySelector("#type");
let Sunset = document.querySelector("#sunset");
let sunraise = document.querySelector("#sunrise");
let Wind = document.querySelector("#wind");
let humidity = document.querySelector("#humidity");
let countryName = document.querySelector("#country");
let ApiKeys = "6d83156e4e40ca97d0c6924b832fe00c";

const AllTimeOf = (getData) => {
    Wind.innerText = getData.wind.speed + "km/h";
    const sunsetTime = new Date(getData.sys.sunset * 1000).toLocaleTimeString([], {
       hour: "2-digit",
       minute: "2-digit",
       hour12: true
    });
    Sunset.innerText = `${sunsetTime}`;

    const sunriseTime = new Date(getData.sys.sunrise * 1000).toLocaleTimeString([], {
       hour: "2-digit",
       minute: "2-digit",
       hour12: true
    });
    sunraise.innerText = `${sunriseTime}`;

    humidity.innerText = getData.main.humidity;
    countryName.innerText = getData.sys.country;
}

const data = async  (search) => {

    const URL = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${ApiKeys}&units=metric`);
    let getData = await URL.json();
    console.log(getData);
    
    AllTimeOf(getData);

    if(getData.code == 400) {
        alert("please Enter Valid location");
        img.innerText = "plese Enter valid locatian";
    } else if(input.value === "") {
        alert("please Enter Location");
    }

    city.innerText = getData.name;
    Temp.innerText = Math.floor(getData.main.temp) + "°C";
    Type.innerText = getData.weather[0].main;

    if(Type.innerHTML === "Clear") {
        img.src="clear.png";
        search = "";
    } else if(Type.innerText === "Clouds") {
        img.src="clouds.png";
    } else if(Type.innerHTML === "Drizzle") {
        img.src="drizzle.png";
    } else if(Type.innerHTML === "Humidity") {
        img.src="humidity.png";
    } else if(Type.innerHTML === "Mist") {
        img.src="mist.png";
    } else if(Type.innerHTML === "Rain") {
        img.src="rain.png";
    } else if(Type.innerHTML === "Snow") {
        img.src="snow.png";
    } else if(Type.innerHTML === "Wind") {
        img.src="wind.png";
    }
    input.value = "";
}

const Finaldatas = (search) => {
    search = input.value;
    data(search);
}

Btn.addEventListener("click", Finaldatas); 