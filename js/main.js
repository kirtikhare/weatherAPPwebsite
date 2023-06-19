const APIKey = "c3ae23a15b014858ae0130940230506"
const APIURL = `https://api.weatherapi.com/v1/current.json?key=${APIKey}&q=`




const searchBox = document.getElementById('searchBox')
const searchButton = document.getElementById('searchButton')
const errorMessage = document.getElementById('errorMessage')
const weatherTitle = document.getElementById('weatherTitle')
const weatherImage = document.getElementById('weatherImage')
const weatherText = document.getElementById('weatherText')
const weatherCard = document.getElementById('weatherCard')
const temp = document.getElementById('Temp')
init();



searchButton.addEventListener('click', loadData)


function init(){
	errorMessage.style.display = "none"
    weatherCard.style.display = 'none'
	loadImage('weather')
}

async function loadImage(query){
    document.body.style.backgroundImage = "url('http://source.unsplash.com/1600x900/?" + query + "')"
}
async function loadData(){
 
	const query = searchBox.value;
	document.body.style.backgroundImage = "url('http://source.unsplash.com/1600x900/?" + query + "')"
    const response = await fetch(APIURL + `${query}`)
    // const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=c3ae23a15b014858ae0130940230506&q=query`);
    
    const data = await response.json()
    displayData(data)
    console.log(data)

    

    function displayData(data) {
        if (data.Error) {
            errorMessage.style.display = "block"
            errorMessage.innerHTML = data.Error
            console.log(data.Error)
        } else {
         weatherCard.style.display = 'block'
            errorMessage.style.display = "none"
            weatherTitle.innerHTML = data.location.country;
            if (data.Poster == "N/A") {
             weatherImage.src = './img/Screenshot 2023-05-31 at 8.20.55 pm.png'
            } else {
             weatherImage.src = data.current.condition.icon;
            }
            weatherText.innerHTML = data.location.name;
            temp.innerHTML = data.current.temp_c+ "° C";
        }
    }
   
    }



        
     