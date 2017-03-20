var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();

fruit.shift();

var indexOfOrange = fruit.indexOf("orange");

fruit.push(indexOfOrange);

vegetables.push(vegetables.length);

var newArray = fruit.concat(vegetables);

newArray.splice(4,2);

newArray.reverse();

console.log("New Array:", newArray.toString());  
