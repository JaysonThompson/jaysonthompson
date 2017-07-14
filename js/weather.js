var returnWeatherObjectsArray = function () {
	var list = data.list;
	return list;
};

var returnCityName = function() {
	var cityArray = [];

	for(var i = 0; i < data.list.length; i++ ){
		var cityName = data.list[i].name;
		cityArray.push(cityName);
	}

	//cityArray2 = [];
	//data.list.forEach(function(item) {
	//	cityArray2.push(item.name);
	//});
	
	return cityArray;
}

var getCityByID = function (reqCityId) {

	for(let i = 0; i < data.list.length; i++){
		var curCityId = data.list[i].id;

		if(curCityId === reqCityId) {
			return data.list[i].name;
		}
	}

	for(let i = 0; i < data.list.length; i++){
		var curCity = data.list[i];

		if(curCity.id === reqCityId) {
			return curCity.name;
		}
	}

	for(let i = 0; i < data.list.length; i++){
		if(data.list[i].id === reqCityId)
			return data.list[i].name;
	}
}

var getCityWeather = function (reqCityID) {

	for(let i = 0; i < data.weather.length; i++){
		var curCityId = data.list[i].id;
		var curCityWeather = data.weather[i];

		if(curCityId === cityId){
			return data.weather.main;
		}
	}
}

var returnCitiesWithZ = function () {

	var citiesWithZ = [];

	for(let i = 0; i < data.list.length; i++){
		var cityName = data.list[i].name;

		if(cityName.includes('Z') || (cityName.includes('z'))){
			citiesWithZ.push(cityName);
		}
	}
	return citiesWithZ;
};

var makeUlFromArray = function (array) {

	var list = document.createElement('ul');

	for(let i = 0; i < array.length; i++) {
		var item = document.createElement('li');

		item.appendChild(document.createTextNode(array[i]));
		list.appendChild(item);	
	}

	return list;	
};
window.onload = function () {
	document.querySelector('#js-injection').appendChild(makeUlFromArray(returnCitiesWithZ()));
};
