
var user = {
	"name": "Jayson",
	"id": 9221975,
	"weapons": {
		"handgun": "9mm",
		"rifle": "5.56"
	},
	"age": 41,
	"state": "Washington",
	"city": "Puyallup"
}

var testAlert = function () {
	alert('got to test alert');
};

var returnId = function () {
	var getId = document.getElementById('fakeHover').getAttribute('id');
	alert('The id of the parent div is ' + '\'' + getId + '\'');
};

var returnClass = function () {
	var getClass = document.getElementsByClassName('content');
	console.log(getClass.length);
};

var returnQuerySelector = function () {
	var getQuerySelector = document.querySelectorAll('.content');
	console.log(getQuerySelector.length);
};

var handleClick = function () {
	alert('You clicked on the big button, (no, not that kind of button)!');
};

var loadEventListeners = function () {
	var bigButton = document.querySelector('#big-button');
	var fakeLink = document.querySelector('#fakeHover');

	bigButton.addEventListener('click', handleClick);
	fakeLink.addEventListener('mouseenter', returnId);	
};


window.addEventListener('DOMContentLoaded', loadEventListeners);


var getUserName = function () {
	return user.name;
};

var getUserWeaponsCaliber = function () {
	return user.name + '\'s ' + 'handgun is a ' + user.weapons.handgun + 
	' and his rifle is a ' + user.weapons.rifle + '.';
};

var getUserId = function() {
	return user.id;
};

var getUserAge = function () {
	return user.age;
};

var getUserState = function () {
	return user.state;
};

var getUserInfo = function () {
	var userInfo = [];
	var name = user.name;
	var id = user.id;
	var age = user.age;
	var state = user.state;
	var city = user.city;
	var handgunCaliber = user.weapons.handgun;
	var rifleCaliber = user.weapons.rifle;

	userInfo.push(name, id, age, city, state, handgunCaliber, rifleCaliber);

	return userInfo;
};

var dataRequest = function () {

	var req = new XMLHttpRequest();

	req.open("GET", 'http://samples.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=b1b15e88fa797225412429c1c50c122a1', true);
	req.send();	

};

var getCharacterCount = function (){	
	var TargetParagraph = document.querySelector('#countChar').innerHTML;
	var countCharacters = TargetParagraph.length;

	//return countCharacters;

	var returnSpecificLetterCount = TargetParagraph.indexOf('i');

	return TargetParagraph;
};


var words = "The sky above the port was the color of television, tuned to a dead channel. All this happened more or less. I had the story, bit by bit, from various peoople, and as generally happens in such cases, each time it was a different story. It was a pleasure to burn.";

function generateIpsum () {
	//for (let i = 0; i < words.length; i++){
	//	var char = words.charAt(i);
	//	console.log(char);
	//}
	return words;
};
document.querySelector('#fill').innerHTML = generateIpsum();

function CharSearch () {
	var find = words.search(/[i]/g);
	return find;
}
