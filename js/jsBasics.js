var name = "Tom";
var age = 43;

var jedi = {
	name: 'Yoda',
	age: 899,
	talk: function () {
		alert('another... sky... walk...');
	}
};

var dog = {};

dog.bark = function(){
	alert('Woof!');
};

var emptyArray = [];

var shoppingList = [
	'Milk', 
	'Bread', 
	'Beans'
];

var helloFrom = function (person) {
	return "Hello from " + person;

}

var people = [
	'Tom',
	'Henry',
	'Yoda',
	'Ron'
];

var runGreeting = function () {
for (var i = 0; i < people.length; i++){
	var greeeting = helloFrom(people[i]);
	alert(greeeting);
	}
};

//while (i < 10) {
//	alert(i);
//	i = i + 1;
//}

var person = {
	age: 122
};

person.name = {
	first: 'Jayson',
	last: 'Thompson',
};

var add = function(a, b) {
	return a + b;
};

for (var i = 1; i < 10; i++) {
	console.log(i);
};


function buttonClick ()
{
	alert('Hello ' + name + ', ' + 'your age is ' + age);

};