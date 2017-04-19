
function makeArrayFromObject(obj){
    var newArr = [];
    for(var key in obj){
        newObj.push(obj[key]);
    }
console.log(newArr);
}



makeArrayFromObject({name: "Jessica", age: 32, hobbies: ["dance", "MMA"], homeTown: "Beaver"} );