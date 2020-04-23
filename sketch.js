
window.addEventListener('load',() => {
	var temp = 0;
	var description = 0;

	fetch(`https://api.openweathermap.org/data/2.5/weather?q=boston&appid=2669340c1ffaa498ad124cd7d7bb6eba`)
		.then(res => res.json())
		.then(data => {
			temp = data.main.temp;
			description = data.weather[0].description;
			document.getElementById('temp').innerHTML = Math.round((temp-273.1)*10)/10+"°C";
			document.getElementById('description').innerHTML = description;
		})
		
});
