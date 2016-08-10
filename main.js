/*
=======================================================

** Week 3 - Project 2 **
*** More Functioning ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.

In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.

For any methods that we didn't cover, please refer to the Functions Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

BASIC TRACK: 1-9
ADVANCED TRACK: 10-13
=======================================================
*/

// 1. Without using Math.min(), write a function called minimum() that takes two numbers
//    and outputs the smaller number.

console.log("\nQuestion 1 \n");

// 1. Without using Math.min(), write a function called minimum() that takes two numbers
//    and outputs the smaller number.

function minimum(numOne,numTwo) {
	if(numOne<numTwo) {
		return numOne;
	} else {
		return numTwo;
	}
}

console.log(minimum(5,2));

// 2. Create a new function called minimum3() to find the smallest of three numbers.

console.log("\nQuestion 2 \n");

// 2. Create a new function called minimum3() to find the smallest of three numbers.

function minimum3(a,b,c) {
	if (a < b && a < c) {
		return a;
	} else if (b < a && b < c) {
		return b;
	} else if (c < a && c < b) {
		return c;
	}
}

console.log(minimum3(4,5,3));



// 3. Declare a function called sum() that takes an array of numbers as an argument adds them together.
//    i.e. sum([1, 2, 3, 4]) should return 10.

console.log("\nQuestion 3 \n");

// 3. Declare a function called sum() that takes an array of numbers as an argument adds them together.
//    i.e. sum([1, 2, 3, 4]) should return 10.

function sum(arrayOfNums) {
	for (i=0; i<arrayOfNums.length; i++) {
		var total = 0;
		total = arrayOfNums[i] + total;
	}
	
	return total;
}
var arrayOne = [1,2,3,4];

console.log(sum(arrayOne));

// 4. Declare a function called multiply() that takes an array of numbers and multiplies them together.
//    i.e. multiply([1, 2, 3, 4]) should return 24.

console.log("\nQuestion 4 \n");

// 4. Declare a function called multiply() that takes an array of numbers and multiplies them together.
//    i.e. multiply([1, 2, 3, 4]) should return 24.

var muliplicationTotal = 1;

function multiplyArray (array) {
	for(i=0; i<array.length; i++) {
		muliplicationTotal = array[i] * muliplicationTotal;
	}
	
	console.log(muliplicationTotal);
}

multiplyArray([1,2,3,4]);

// 5. Write a function called filterSixPlus() that takes the following array and removes words
//    that are less than six characters.
var words = ["window", "table", "cup", "knife", "barstool", "glass", "charger", "outlet"];

console.log("\nQuestion 5 \n");

// 5. Write a function called filterSixPlus() that takes the following array and removes words
//    that are less than six characters.
var words = ["window", "table", "cup", "knife", "barstool", "glass", "charger", "outlet"];

function filterSixPlus(array) {
	for(var i=array.length-1; i>=0; i--) {
		if(array[i].length < 6) {
			array.splice(i,1);
		}
	}
	console.log(array);
}

filterSixPlus(words);



// 6. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.
//    HINT: You may need to use parseFloat to convert the user's string input to a float.

console.log("\nQuestion 6 \n");

// 6. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.
//    HINT: You may need to use parseFloat to convert the user's string input to a float.

function CelsiusToFahrenheit () {
	var celsius = prompt("Enter the temperature in celcius");
	var fahrenheit = (celsius * 9/5) + 32;
	console.log(fahrenheit);
}

CelsiusToFahrenheit();

// 7. Adding to the code in #6, prompt the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Alert them with an error if they do not follow the rules.

console.log("\nQuestion 7 \n");

// 7. Adding to the code in #6, prompt the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Alert them with an error if they do not follow the rules.

function convertTemp () {
	var tempEntry = prompt("Enter the temperature");
	var whatDoYouWant = prompt("Would you like to convert F to C or C to F?")
	if (whatDoYouWant === "C to F") {
	var fahrenheit = (tempEntry * 9/5) + 32;
	console.log(fahrenheit);
	} else if (whatDoYouWant === "F to C") {
		var celsius = (tempEntry - 32) * 5/9;
		console.log(celsius);
	} else {
		alert("Please enter only \"F to C\" or \"C to F\"");
		convertTemp();
	}
}

convertTemp();

// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()

console.log("\nQuestion 8 \n");

// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()

function countBs(string) {
	var counter = 0;
	for(i=0;i<string.length;i++) {
		if(string.charAt(i) === "B") {
			counter++;
		}
	}
	return counter;
}

countBs("BBBduhedoibeioB");

// 9. http://games.usvsth3m.com/javascript-under-pressure/
//     Have fun with these! Get as far as you can and record your progress and time. We'll try this again in a few weeks!

console.log("\nQuestion 9 \n");
// 9. http://games.usvsth3m.com/javascript-under-pressure/
//     Have fun with these! Get as far as you can and record your progress and time. We'll try this again in a few weeks!

function getFileExtension(i) {
    
    // i will be a string, but it may not have a file extension.
    // return the file extension (with no period) if it has one, otherwise false
    
    if (isThereAPeriod(i)) {
    	return grabCharactersAfterPeriod(i);
    } else {
    	return false;
    }

}

getFileExtension("hello.png");


function findPeriodPosition (string) {
	
	var position;
    for(var k=0; k<string.length; k++) {
        if(string.charAt(k) === ".") {
        	return k;
        }
    
	
	}
}

function isThereAPeriod (string) {
	
	var trueFalse = false;
	
    for(var k=0; k<string.length; k++) {
        if(string.charAt(k) === ".") {
       	trueFalse = true;
       	break;
        } 
	
	}
	
	return trueFalse;
}

function grabCharactersAfterPeriod (string) {
	if (isThereAPeriod(string)) {
		var returnString = "";
		var periodPosition = findPeriodPosition(string);
		var stringLength = string.length;
	
		for (i=periodPosition+1; i<stringLength; i++) {
			returnString = returnString.concat(string.charAt(i));
		}
		return returnString;
		
	} else {
		return "There is no period in this string.";
	}
}

// ADVANCED TRACK
// 10. Write a function called countChars() that behaves like countBs(), except it takes a
//    second argument that indicates what character is to be counted.

console.log("\nQuestion 10 \n");
// 10. Write a function called countChars() that behaves like countBs(), except it takes a
//    second argument that indicates what character is to be counted.

function countChars(string,countChar) {
	
	var counter = 0;
	for(i=0;i<string.length;i++) {
		if(string.charAt(i) === countChar) {
			counter++;
		}
	}
	return counter;
}

console.log(countChars("hello","l"));

// 11. Declare a function called ohZero that replaces all of the o's in a string with 0's.

console.log("\nQuestion 11\n");

// 11. Declare a function called ohZero that replaces all of the o's in a string with 0's.

function ohZero(string) {
	
	var arrayOfString = [];
	
	for(var i=0; i<string.length; i++) {
		arrayOfString.push(string[i]);
	}

	for (var j=0; j<arrayOfString.length; j++) {
		if(arrayOfString[j] === "o") {
			arrayOfString[j] = 0;
		}
	}
	
	var stringAgain = "";
	for (var k=0; k<arrayOfString.length; k++) {
		stringAgain = stringAgain.concat(arrayOfString[k]);
	}
	console.log(stringAgain);
}

ohZero("hello");

// 12. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.

console.log("\nQuestion 12\n");

// 12. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.

function printLyrics99Bottle() {
	
	for (var i=99; i>0; i--) {
		
		if(i > 1) {
		console.log(i.toString() + " bottles of beer on the wall, " + i.toString() + " bottles of beer.Take one down and pass it around, " + (i-1).toString() + " bottles of beer on the wall.");
		} else if (i === 1) {
			console.log("1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall. \nNo more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
		}
	}
	
}

printLyrics99Bottle();

// 13. Create a 'Guessing Game'. The game starts by picking a random number.
//    It then prompts the user to guess the number. If the user's number is lower/higher,
//    it will prompt the user to enter another guess and tell the user if the guess was
//    too high or too low. This continues until the correct guess is entered.
//    When the correct guess is entered the user is given a success message with the correct number.

console.log("\nQuestion 13\n");

// 13. Create a 'Guessing Game'. The game starts by picking a random number.
//    It then prompts the user to guess the number. If the user's number is lower/higher,
//    it will prompt the user to enter another guess and tell the user if the guess was
//    too high or too low. This continues until the correct guess is entered.
//    When the correct guess is entered the user is given a success message with the correct number.

var randomNumber = getRandomInt(1,100);

function numPick() {
var userPick = prompt("Please pick a number between 0 and 100");
if(userPick === randomNumber) {
	return userPick;
} else {
numComparison(userPick);
}
}

function numComparison(num) {
if (num > randomNumber) {
	alert("You picked too high");
	numPick();	
} else if (num < randomNumber) {
	alert("You picked too low");
	numPick();
}
}

console.log("The number is " + numPick());

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

