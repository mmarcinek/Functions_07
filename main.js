// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(a,b){
    if(a > b) {
        return a;
    } else {
        return b;
    };
};

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a,b,c){
    if(a > b && a > c) {
        return a;}
    else if(b > a && b > c) {
        return b;}
    else {
        return c;};

    };

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    return "a,e,i,o,u".indexOf(char)>= 0;
};

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------
var translate = [];

function rovarspraket(phrase){
    var stringSet = phrase.split('');

        stringSet.forEach(function(char){
            if("aeiou".indexOf(char) < 0) {
                translate.push(char + "o" + char);
            } else if ("aeiou".indexOf(char) >= 0){
                translate.push(char);
            }
        })
        return translate.join('');
};

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------
// This does not work!!!!
function sum(numbers){
   var answer = numbers.reduce(function(a,b){
        return a + b;
    });

    return answer;
};


function multiply(multArray){
    var result = multArray.reduce(function(a,b){
        return a * b;
    });

    return result;
};

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(esrever){
    var response = esrever.split('').reverse().join('');
    return response;
};


// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    var longest = words.sort(function(a,b) {
        return b.length - a .length;})[0];
    return longest;
    };


// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------
function filterLongWords(words, i){
    return words.filter(function(word){
    return word.length > i;
    });
  });




// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    var chars = string.split(''); // splits the string that is entered
    var charList = {}; // defines the empty object

    chars.forEach(function(char){
        if (charList[char] === undefined){
            charList[char] = 1;
        } else {
            charList[char] = charList[char] + 1;
        }
    });


  return charList;
}

// this is what we worked through in class, I am now responsible for the implementation of this resolution.










