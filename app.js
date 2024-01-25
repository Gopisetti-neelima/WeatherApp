function getTemp(city){
	var key = '195bb093d34e584a7b5f090d1e107a88';
	let res="";
	if(city!="")
	{
		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
	.then(res=>res.json())
	.then(d=>{
		console.log(d);
		temperature = FarenheitToCelcius(d.main["temp"]);
		document.getElementById('t').innerHTML = temperature + "°C";
		document.getElementById('fl').innerHTML = FarenheitToCelcius(d.main["feels_like"]) + "°C";
		document.getElementById('lt').innerHTML = FarenheitToCelcius(d.main["temp_min"]) + "°C";
		document.getElementById('ht').innerHTML = FarenheitToCelcius(d.main["temp_max"]) + "°C";
		document.getElementById('hum').innerHTML = d.main["humidity"] + "%";
		console.log(d);

		wallpaper = "assets/day.jpg";
		if(temperature < 20){
			wallpaper = "assets/day-winter.jpg";
		}

		wtype = d.weather[0]["main"];
		if(wtype == "Rain"){
			wallpaper = "assets/rain.jpg";
		}
		else if(wtype == "Snow")
			wallpaper = "assets/day-winter.jpg";
		else if(wtype == "Spring")
			wallpaper = "assets/day-spring.jpg";
			
		document.body.style.backgroundImage = 'url("' + wallpaper + '")';
		document.body.style.backgroundSize = "cover";
		document.body.style.backgroundPosition = "center";

	})
	.catch(error=>
		{
			console.log(error);
			alert(error);
		});
	}
}

function FarenheitToCelcius(data){
	data = parseInt(data);
	// res = (data-32)*5.0/9.0;
	return parseInt(data - 273.15) ;
}

function getData(){
	let city = document.getElementById('city').value;
	res = getTemp(city);
}