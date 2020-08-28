function getTemp(city){
	var key = '195bb093d34e584a7b5f090d1e107a88';
	let res="";
	if(city!="")
	{
		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
	.then(res=>res.json())
	.then(data=> data.main)
	.then(temp=>{
		console.log(temp);
		let x=JSON.stringify(temp);
		console.log(x);
		document.getElementById('res').innerHTML=x;
	})
	.catch(error=>console.log(error));
	}
}

function getData(){
	let city = document.getElementById('city').value;
	res = getTemp(city);
}