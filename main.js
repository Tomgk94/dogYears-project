var myAge = 27;
//this line is declaring the value of the variable myAge

var earlyYears = 2;
//Declared the value of the variable earlyYears

earlyYears *= 10.5;
//console.log(earlyYears);
//console.log returned the value 21 for the multiplication of earlyYears

var earlyYears = 21;
//reassigned value of earlyYears

//myAge -= 2;
//console.log(myAge);
//Value returned 25 for subtraction of myAge

var laterYears = 25;
//assigned value of laterYears

laterYears *= 4;
//console.log(laterYears);
//value returned back as 100

var myAgeInDogYears = laterYears + earlyYears;
//this variable is the addition of the variables laterYears and earlyYears

var myName = 'TOM'.toLowerCase();
//Created a variable that returns the value of the name input to the string .toLowerCase

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
// used string interpolation to tie in the variables of myName, MyAge, and MyAgeInDogYears into the console.log string.
