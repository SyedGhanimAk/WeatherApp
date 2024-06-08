// Selecting DOM elements
let searchInput = document.querySelector(".searchInput");
let tblur = document.querySelector(".tBlur");
let card = document.querySelector(".card");
let button = document.querySelector("button");
let WeatherDesc = document.querySelector(".WeatherDesc");

// Selecting elements for Delhi
let delhiTemp = document.querySelector(".dtemp");
let delhiHumidity = document.querySelector(".dhumidity");
let delhifeelslike = document.querySelector(".dfeelslike");

// Selecting elements for Mumbai
let mumbaiTemp = document.querySelector(".mtemp");
let mumbaiHumidity = document.querySelector(".mhumidity");
let mumbaifeelslike = document.querySelector(".mfeelslike");

// Selecting elements for Hyderabad
let hydTemp = document.querySelector(".htemp");
let hydHumidity = document.querySelector(".hhumidity");
let hydfeelslike = document.querySelector(".hfeelslike");

// Selecting elements for Kolkata
let kolTemp = document.querySelector(".ktemp");
let kolHumidity = document.querySelector(".khumidity");
let kolfeelslike = document.querySelector(".kfeelslike");

// Selecting elements for Bangalore
let bengTemp = document.querySelector(".btemp");
let bengHumidity = document.querySelector(".bhumidity");
let bengfeelslike = document.querySelector(".bfeelslike");

// Selecting more DOM elements
let tempVal = document.querySelector(".card-title");
let cardHeading = document.querySelector("h4");
let darkModeBtn = document.querySelector(".form-check-input");
let Ul = document.querySelector("ul");
let li1 = document.querySelector(".feels_like");
let li2 = document.querySelector(".humidity");
let li3 = document.querySelector(".max_temp");
let li4 = document.querySelector(".min_temp");
let li5 = document.querySelector(".visibility");
let li6 = document.querySelector(".windSpeed");

// API URL and key
let GeocodingURL = 'https://api.openweathermap.org/data/2.5/weather';
let API_KEY = 'a36ceeb9d874639cf77ecd8dd1af537b';

// Get current date
let currentDate = new Date();
let day = currentDate.getDate();
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = monthNames[currentDate.getMonth()];
let year = currentDate.getFullYear().toString().slice(-2); // Get the last two digits of the year
let formattedDate = `${day} ${month} ${year}`;

// Function to convert Kelvin to Celsius
function kelvinToCelsius(tempK) {
    return Math.round(tempK - 273.15);
}

// Function to fetch weather data
async function wtherData() {
    try {
        // Add blur effect and list-group class
        card.classList.add("Blur");
        Ul.classList.add("list-group");
        
        // Construct the API URL with search input value
        let URL = `${GeocodingURL}?q=${searchInput.value}&appid=${API_KEY}`;
        
        // Fetch weather data
        const response = await fetch(URL);
        const result = await response.json();
        
        // Update UI elements with weather data
        cardHeading.innerText = `${searchInput.value}, ${result.sys.country} \u2022 ${formattedDate}`;
        tempVal.innerHTML = `<b>${kelvinToCelsius(result.main.temp)} &deg;C</b>`;
        WeatherDesc.innerHTML = `${result.weather[0].description} <br><img class="weather-icon" src="http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png
">`
        li1.innerHTML = `Feels like: <b>${kelvinToCelsius(result.main.feels_like)} &deg;C</b>`;
        li2.innerHTML = `Humidity: <b>${result.main.humidity}%</b>`;
        li3.innerHTML = `Max temp: <b>${kelvinToCelsius(result.main.temp_max)} &deg;C</b>`;
        li4.innerHTML = `Min temp: <b>${kelvinToCelsius(result.main.temp_min)} &deg;C</b>`;
        li5.innerHTML = `Visibility: <b>${Math.round(result.visibility / 1000)} km</b> `;
        li6.innerHTML = `Wind Speed: <b>${Math.round(result.wind.speed)} km/h</b> `;
        
        // Clear search input and remove blur effect
        searchInput.value = "";
        card.classList.remove("Blur");
    } catch (error) {
        // Handle errors
        Ul.classList.remove("list-group");
        card.classList.remove("Blur");
        li3.classList.add("poppins-regular");
        tempVal.innerHTML = "";
        li1.innerHTML = "<span style='font-size: 3rem;'>😞</span>";
        li2.innerText = "Error: City Not Found!";
        li3.innerText = "Please try another city.";
        li4.innerHTML = "";
        li5.innerHTML = "";
        li6.innerHTML = "";
        WeatherDesc.innerHTML = "";
        cardHeading.innerText = "";
    }
}

// Function to handle weather search
async function wther(event) {
    event.preventDefault();
    wtherData();
}


// Function to fetch weather data for Delhi
async function pcDelhi() {
    try {
        let URL = `${GeocodingURL}?q=delhi&appid=${API_KEY}`;
        const response = await fetch(URL);
        const result = await response.json();
        // Update DOM elements with Delhi weather data
        delhiTemp.innerHTML = `${kelvinToCelsius(result.main.temp)} &deg;C`;
        delhiHumidity.innerHTML = `${result.main.humidity}% `;
        delhifeelslike.innerHTML = `${kelvinToCelsius(result.main.feels_like)} &deg;C`;
    } catch (error) {
        console.error(error);
    }
}

// Function to fetch weather data for Mumbai
async function pcMumbai() {
    try {
        let URL = `${GeocodingURL}?q=mumbai&appid=${API_KEY}`;
        const response = await fetch(URL);
        const result = await response.json();
        // Update DOM elements with Mumbai weather data
        mumbaiTemp.innerHTML = `${kelvinToCelsius(result.main.temp)} &deg;C`;
        mumbaiHumidity.innerHTML = `${result.main.humidity}% `;
        mumbaifeelslike.innerHTML = `${kelvinToCelsius(result.main.feels_like)} &deg;C`;
    } catch (error) {
        console.error(error);
    }
}

// Function to fetch weather data for Hyderabad
async function pcHyderabad() {
    try {
        let URL = `${GeocodingURL}?q=Hyderabad&appid=${API_KEY}`;
        const response = await fetch(URL);
        const result = await response.json();
        // Update DOM elements with Hyderabad weather data
        hydTemp.innerHTML = `${kelvinToCelsius(result.main.temp)} &deg;C`;
        hydHumidity.innerHTML = `${result.main.humidity}% `;
        hydfeelslike.innerHTML = `${kelvinToCelsius(result.main.feels_like)} &deg;C`;
    } catch (error) {
        console.error(error);
    }
}

// Function to fetch weather data for Kolkata
async function pcKolkata() {
    try {
        let URL = `${GeocodingURL}?q=kolkata&appid=${API_KEY}`;
        const response = await fetch(URL);
        const result = await response.json();
        // Update DOM elements with Kolkata weather data
        kolTemp.innerHTML = `${kelvinToCelsius(result.main.temp)} &deg;C`;
        kolHumidity.innerHTML = `${result.main.humidity}% `;
        kolfeelslike.innerHTML = `${kelvinToCelsius(result.main.feels_like)} &deg;C`;
    } catch (error) {
        console.error(error);
    }
}

// Function to fetch weather data for Bengaluru
async function pcBengaluru() {
    try {
        let URL = `${GeocodingURL}?q=bengaluru&appid=${API_KEY}`;
        const response = await fetch(URL);
        const result = await response.json();
        // Update DOM elements with Bengaluru weather data
        bengTemp.innerHTML = `${kelvinToCelsius(result.main.temp)} &deg;C`;
        bengHumidity.innerHTML = `${result.main.humidity}% `;
        bengfeelslike.innerHTML = `${kelvinToCelsius(result.main.feels_like)} &deg;C`;
    } catch (error) {
        console.error(error);
    }
}

// Function to fetch weather data for multiple cities and update UI
async function tData() {
    // Add blur effect to the background while fetching data
    tblur.classList.add("Blur");
    // Fetch weather data for each city
    pcDelhi();
    pcMumbai();
    pcHyderabad();
    pcKolkata();
    await pcBengaluru(); // Wait for Bengaluru data to be fetched before removing blur effect
    // Remove blur effect after fetching all data
    tblur.classList.remove("Blur");
}

// Initial function calls
wtherData(); // Fetch weather data for user-selected city
tData(); // Fetch weather data for preset cities

// Function to toggle dark mode
function darkMode() {
    if (this.checked) {
        document.body.setAttribute("data-bs-theme", "dark");
    } else {
        document.body.removeAttribute("data-bs-theme");
    }
}

// Event listeners
button.addEventListener("click", wther); // Listen for weather search button click
darkModeBtn.addEventListener("change", darkMode); // Listen for dark mode toggle
