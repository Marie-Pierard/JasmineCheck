let selectElementsStartingWithA = (array) => {
    //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter
    //https://www.freecodecamp.org/news/how-to-capitalize-the-first-letter-of-a-string-in-javascript/#:~:text=You%20should%20use%20the%20charAt,first%20character%20of%20the%20string.&text=NOTE%3A%20charAt%20is%20preferable%20than,in%20case%20of%20''%5B0%5D%20.
    let startsA = array.filter(word => word.charAt(0) === "a");
    return startsA;
}

let selectElementsStartingWithVowel = (array) => {//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/match
    let startsVowel = array.filter(word => word.match("^[aieou].*"))//https://stackoverflow.com/questions/35814097/regex-to-match-beginning-and-end-of-a-word-with-a-vowel/35821204
    return startsVowel;
}

let removeNullElements = (array) => {
    let newArr = array.filter(element=> element != null)
    return newArr;
}

let removeNullAndFalseElements = (array) => {
    let NullAndFalse = array.filter(element => element !== null && element !== false);
    return NullAndFalse;
}

let reverseWordsInArray = (array) => {
    const reverseWords = [];
    for (element of array) {
        reverseWords.push(element.split('').reverse().join(''));
    }
    return reverseWords;
}

let everyPossiblePair = (array) => {//https://stackoverflow.com/questions/43241174/javascript-generating-all-combinations-of-elements-in-a-single-array-in-pairs/43241295
    array.sort();
    let pairs = [];
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            pairs.push([array[i], array[j]]);
        }
        }
        return pairs;
}

let allElementsExceptFirstThree = (array) => {
    return array.slice(3);
}

let addElementToBeginning = (array, element) => {//https://developer.mozilla.org/fr/search?q=unshift
    array.unshift(element)
    return array;
}

let sortByLastLetter = (array) => {//https://stackoverflow.com/questions/32491788/sort-strings-by-last-letter-alphabetically-in-javascript
    array.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
    return array;
}

let getFirstHalf = (string) => {//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/slice
    return string.slice(0, Math.round(string.length/2));
}

let makeNegative = (number) => {//https://stackoverflow.com/questions/5574144/positive-number-to-negative-number-in-javascript
    return -Math.abs(number);
}

let numberOfPalindromes = (array) => {
    let count = 0;
    for (element of array) {
        if (element.split('').reverse().join('') === element) {
            count++;
        }
    }
    return count;
}


let shortestWord = (array) => {
    let x = array[0];
    for (element of array) {
        if (element.length < x.length) {
            x = element;
        }
    }
    return x;
}

let longestWord = (array) => {
    let x = array[0];
    for (element of array) {
        if (element.length > x.length) {
            x = element;
        }
    }
    return x;
}

let sumNumbers = (array) => {//https://www.tutorialrepublic.com/faq/how-to-find-the-sum-of-an-array-of-numbers-in-javascript.php
    var sum = array.reduce((a, b) => (a + b));

return sum;
}

let repeatElements = (array) => {
    array.push(...array);
    return array;
}

let stringToNumber = (string) => {//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/parseInt
    return parseInt(string, 10);
}

let calculateAverage = (array) => {
    return array.reduce((a, b) => (a + b)) / array.length;
}

let getElementsUntilGreaterThanFive = (array) => {
    return array.slice(0, 6);
}

let convertArrayToObject = (array) => {
    
    const obj = {};
    for (let i = 0; i < array.length; i = i + 2) {
        obj[array[i]] = array[i+1];
    }
    return obj;
}

let getAllLetters = (array) => {
    let allLetters = [];
    array.forEach((element) => {
        for (let i = 0; i < element.length; i++) {
            !allLetters.includes(element[i]) && allLetters.push(element[i]);
        }
    })
    allLetters.sort();
    return allLetters;
}

let swapKeysAndValues = (object) => {//http://nelsonwells.net/2011/10/swap-object-key-and-values-in-javascript/
    
        let new_obj = {};
      
        for (let prop in object) {
          if(object.hasOwnProperty(prop)) {
            new_obj[object[prop]] = prop;
          }
        }
      
        return new_obj;
      };


let sumKeysAndValues = (object) => {
    const arr1 = Object.keys(object).reduce((a, b) => Number(a) + Number(b));
    const arr2 = Object.values(object).reduce((a, b) => a + b);
    return arr1 + arr2;
}

let removeCapitals = (string) => {//https://stackoverflow.com/questions/15578884/remove-all-non-lower-case-characters-from-string
    return string.replace(/[A-Z]/g, '');
}

let roundUp = (number) => {//https://www.w3schools.com/jsref/jsref_ceil.asp
    return Math.ceil(number);
}

let formatDateNicely = (date) => {//https://www.w3schools.com/js/js_date_formats.asp
    let day = () => {
        if (date.getDate() < 10) {
            return '0' + date.getDate();
        } else {
            return date.getDate();
        }
    }
    let month = () => {
        if (date.getMonth() + 1 < 10) {
            return '0' + (date.getMonth() + 1);
        } else {
            return (date.getMonth() + 1);
        }
    }
    return day() + '/' + month() + '/' + date.getFullYear();

}

let getDomainName = (string) => {
    const firstStep = string.split('@').pop();//garde ce qui suit le @ https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/pop
    const secondStep = firstStep.split('.com').shift();//garde ce qui précède.com https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/shift
    return secondStep;
}

let titleize = (string) => {//https://stackoverflow.com/questions/32589197/how-can-i-capitalize-the-first-letter-of-each-word-in-a-string-using-javascript
    let splitStr = string.split(' ');
   for (let i = 0; i < splitStr.length; i++) {
        if (splitStr[i].length > 3 || i === 0 || splitStr[i - 1].indexOf('.') > 0) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
}
   return splitStr.join(' '); 

}


let checkForSpecialCharacters = (string) => {
    return string.replace(/[a-zA-Z0-9]/g, '').length > 0;
}

let squareRoot = (number) => {//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/sqrt
    return Math.sqrt(number);
}

let factorial = (number) => {//https://www.educative.io/edpresso/how-to-find-the-factorial-of-a-number-in-javascript
    if(number == 0 || number == 1){
        return 1;
    }else{
        return number * factorial(number-1);
    }
}

let findAnagrams = (string) => {//https://codereview.stackexchange.com/questions/57161/generate-all-possible-combinations-of-letters-in-a-word
        if (string.length < 2) {
          return [string];
        } else {
            let allAnswers = [];
            for (let i = 0; i < string.length; i++) {
              var letter = string[i];
              var shorterWord = string.substr(0, i) + string.substr(i + 1, string.length - 1);
              var shortwordArray = findAnagrams(shorterWord);
              for (var j = 0; j < shortwordArray.length; j++) {
                allAnswers.push(letter + shortwordArray[j]);
              }
            }
            return allAnswers;
        
      }
      
}

let convertToCelsius = (number) => {//https://www.tutorialsmade.com/javascript-to-convert-fahrenheit-to-celsius/
    return Math.round((number - 32) * 5 / 9);
}

let letterPosition = (array) => {//https://dev.to/bladesensei/get-alphabet-position-value-of-a-letter-javascript-70p
    return array.map(x => (x.toLowerCase().charCodeAt() - 96));
}
