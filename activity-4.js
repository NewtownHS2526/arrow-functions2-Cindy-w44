// Activity 4: Functions with Complex Logic to Arrow Functions
// Convert each function below to an arrow function

// Problem 1
function isAdult(age) {
    if (age >= 18) {
        return true;
    }
    return false;
}
// Convert to arrow function:
const isAdult2 = (age) => { 
    if (age >= 18) { 
        return true; 
    } return false; 
}
console.log(isAdult2);

// Problem 2
function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else {
        return "F";
    }
}
// Convert to arrow function:
const getGrade2 = (score) => {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else {
        return "F";
    }
}
console.log(getGrade2);

// Problem 3
function calculateTotal(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total += items[i];
    }
    return total;
}
// Convert to arrow function:
const calculateTotal2 = (items) => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total += items[i];
    }
    return total;
}
console.log(calculateTotal2);

// Problem 4
function filterEvenNumbers(numbers) {
    return numbers.filter(function(num) {
        return num % 2 === 0;
    });
}
// Convert to arrow function (convert both outer and inner functions):
const filterEvenNumbers2 = (numbers) => {
    return numbers.filter(function(num) {
        return num % 2 === 0;
    });
}
console.log(filterEvenNumbers2);

// Problem 5
function mapToSquares(arr) {
    return arr.map(function(x) {
        return x * x;
    });
}
// Convert to arrow function (convert both outer and inner functions):
const mapToSquares2 = (arr) => {
    return arr.map(function(x) {
        return x * x;
    });
}
console.log(mapToSquares2);

// Problem 6
function findLongestWord(words) {
    let longest = "";
    words.forEach(function(word) {
        if (word.length > longest.length) {
            longest = word;
        }
    });
    return longest;
}
// Convert to arrow function (convert both outer and inner functions):
const findLongestWord2 = (words) => {
    let longest = "";
    words.forEach(function(word) {
        if (word.length > longest.length) {
            longest = word;
        }
    });
    return longest;
}
console.log(findLongestWord2);

// Problem 7
function sumArray(numbers) {
    return numbers.reduce(function(acc, num) {
        return acc + num;
    }, 0);
}
// Convert to arrow function (convert both outer and inner functions):
const sumArray2 = (numbers) => {
    return numbers.reduce(function(acc, num) {
        return acc + num;
    }, 0);
}
console.log(sumArray2);

// Problem 8
function getInitials(firstName, lastName) {
    return firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
}
// Convert to arrow function:
const getInitials2 = (firstName, lastName) => {
    return firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
}
console.log(getInitials2);

// Problem 9
function checkPassword(password) {
    if (password.length >= 8) {
        return true;
    }
    return false;
}
// Convert to arrow function:
const checkPassword2 = (password) => {
    if (password.length >= 8) {
        return true;
    }
    return false;
}
console.log(checkPassword2);

// Problem 10
function formatName(first, middle, last) {
    if (middle) {
        return first + " " + middle + " " + last;
    }
    return first + " " + last;
}
// Convert to arrow function:
const formatName = (first, middle, last) => {
    if (middle) {
        return first + " " + middle + " " + last;
    }
    return first + " " + last;
}
console.log(formatName);

