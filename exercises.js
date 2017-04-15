/** Function: firstReverse
 * The function will take the str parameter being passed in and
 * return the string in reversed order
 * @param {string} str
 * @return {string} reversed
 * ie: "cat" => "tac"
 */

function firstReverse(str){
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
    return joinArray;
}
console.log(firstReverse("cat"));

/*
-------- another way ------------

function firstReverse(str){
    return str.split("").reverse().join("");
}
console.log(firstReverse("cat"));

*/

 /** Function: alphaOrder
 * The function will take the str parameter being passed in and
 * return the string in alphabetical order
 * @param {string} str
 * @return {string} in alphabetical order
 * ie: "cake" => "acek"
 */

function alphaOrder(str){
  var splitString = str.split("");
  var sortArray = splitString.sort();
  var joinArray = sortArray.join("");
  return joinArray;
}
console.log(alphaOrder("javascript"));

/*
-------- another way ------------

function alphaOrder(str){
    return str.split("").sort().join("");
}
console.log(alphaOrder("cats"));

*/

 /** Function: vowelCount
 * The function will take the str parameter being passed in and
 * return the number of vowels in the string
 * @param {string} str
 * @return {number} count of vowels
 * ie: "oreo" => 3
 */

function vowelCount(str) 
{
  var vowels = "aeiou";
  var count = 0;


  for(var i = 0; i<str.length; i++)
  {
  
    if (vowels.indexOf(str[i]) !== -1)
    {
      count += 1;
    }
    
  }
  return count;

}
console.log(vowelCount("i love ice cream"));



 /** Function: timeConvert
 * The function will take the str parameter representing the amount of minutes being passed in and
 * return the number of hours and minutes. Seperate the number of hours
 * and minutes with a colon
 * @param {number} str
 * @return {string} as hours:minutes
 * ie: 68 => 1:8
 */

 function timeConvert(n) {
var num = n;
var hours = (num / 60);
var rhours = Math.floor(hours);
var minutes = (hours - rhours) * 60;
var rminutes = Math.round(minutes);
return rhours + ":" + rminutes;
}

console.log(timeConvert(200));

 /** Function: repeatString
 * The function will take in two parameters and repeat a given string (first argument)
 * num times (second argument). Return an empty string if num is a negative number
 * @param {string} str
 * @param {num} times
 * @return {string} repeated num times
 * i.e repeatString("money", 3) => "moneymoneymoney".
 */

function repeatString(str, num){
  return (new Array(num + 1)).join(str);

}console.log(repeatString("work", 5));


/**
 * Below here we see a module.exports which is set to an object with a bunch of keys.
 * The module.exports syntax is a built-in javascript keyword that
 * allows functionality from this file to be used in other files.  
 * Here we are exporting an object with a bunch of keys that will reference 
 * the functions you have made. After you are done implementing a function,
 * change the 'null' to reference the corresponding function you have just created.
 * Then go into your terminal and run 'npm test' to see if the tests pass for your function.
 *
 * The reason why we export our functions out of this file is because behind the scenes,
 * the test-runner is importing this file so that it can gain access to the functions
 * and run tests on it.
 */

module.exports = {
    firstReverse: null,
    alphaOrder: null,
    vowelCount: null,
    timeConvert: null,
    repeatString: null
}
