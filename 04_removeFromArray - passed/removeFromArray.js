const removeFromArray = function(arr, ...args) {
    return arr.filter(item => !args.includes(item));
};

//npm test removeFromArray.spec.js

// Do not edit below this line
module.exports = removeFromArray;





