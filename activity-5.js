// Activity 5: Advanced Arrow Function Conversions
// Convert each function below to an arrow function (including nested functions)

// Problem 1
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}
// Convert to arrow function (convert both outer and inner functions):
const createMultiplier2 = (factor) => {
    return function(number) {
        return number * factor;
    };
}
console.log(createMultiplier2);

// Problem 2
function processArray(arr, callback) {
    return arr.map(function(item) {
        return callback(item);
    });
}
// Convert to arrow function (convert both outer and inner functions):
const processArray2 = (arr, callback) => {
    return arr.map(function(item) {
        return callback(item);
    });
}
console.log(processArray2);

// Problem 3
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
// Convert to arrow function (convert both outer and inner functions):
const createCounter2 = () => {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
console.log(createCounter2);

// Problem 4
function sortByProperty(objects, property) {
    return objects.sort(function(a, b) {
        return a[property] - b[property];
    });
}
// Convert to arrow function (convert both outer and inner functions):
const sortByProperty2 = (objects, property) => {
    return objects.sort(function(a, b) {
        return a[property] - b[property];
    });
}
console.log(sortByProperty2);

// Problem 5
function filterAndMap(numbers) {
    return numbers
        .filter(function(num) {
            return num > 0;
        })
        .map(function(num) {
            return num * 2;
        });
}
// Convert to arrow function (convert all functions):
const filterAndMap2 = (numbers) => {
    return numbers
        .filter(function(num) {
            return num > 0;
        })
        .map(function(num) {
            return num * 2;
        });
}
console.log(filterAndMap2);

// Problem 6
function createValidator(min, max) {
    return function(value) {
        return value >= min && value <= max;
    };
}
// Convert to arrow function (convert both outer and inner functions):
const createValidator2 = (min, max) => {
    return function(value) {
        return value >= min && value <= max;
    };
}
console.log(createValidator2);

// Problem 7
function processData(data, transform) {
    return data.reduce(function(acc, item) {
        acc.push(transform(item));
        return acc;
    }, []);
}
// Convert to arrow function (convert both outer and inner functions):
const processData2 = (data, transform) => {
    return data.reduce(function(acc, item) {
        acc.push(transform(item));
        return acc;
    }, []);
}
console.log(processData2);

// Problem 8
function createAdder(x) {
    return function(y) {
        return function(z) {
            return x + y + z;
        };
    };
}
// Convert to arrow function (convert all nested functions):
const createAdder2 = (x) => {
    return function(y) {
        return function(z) {
            return x + y + z;
        };
    };
}
console.log(createAdder2);

// Problem 9
function groupBy(array, keyFn) {
    return array.reduce(function(groups, item) {
        const key = keyFn(item);
        if (!groups[key]) {
            groups[key] = [];
        }
        groups[key].push(item);
        return groups;
    }, {});
}
// Convert to arrow function (convert both outer and inner functions):
const groupBy2 = (array, keyFn) => {
    return array.reduce(function(groups, item) {
        const key = keyFn(item);
        if (!groups[key]) {
            groups[key] = [];
        }
        groups[key].push(item);
        return groups;
    }, {});
}
console.log(groupBy2);

// Problem 10
function compose(f, g) {
    return function(x) {
        return f(g(x));
    };
}
// Convert to arrow function (convert both outer and inner functions):
const compose2 = (f, g) => {
    return function(x) {
        return f(g(x));
    };
}
console.log(compose2);
