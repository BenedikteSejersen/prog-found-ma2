// question 1
var petArray = ["cat", "cow", "dog"];


// question 2
var petArray = ["cat", "cow", "dog"];
    console.log(petArray[1]);
    // cow



// question 3
var petArray = ["cat", "cow", "dog"];
    petArray.push("sheep");
    console.log(petArray);
    // Array(4) ["cat", "cow", "dog", "sheep"]


// question 4
console.log(petArray.length);
// 4

 
// question 5
var catObject = {
    name: "Pusur",
    colour: "orange and brown",
    age: 6
};
    console.log(catObject);
    //object {name: "Pusur", colour: "orange and brown", age: 6} 


// question 6
console.log(catObject.age);
// 6


// question 7
var catArray = [
    {
        name: "Pusur",
        colour: "orange and brown",
        age: 6
    }
];
console.log(catArray);
// Array [{...}]


// question 8
for (var i = 0; i < catArray.length; i++) {
    console.log(catArray[i]);
}
// Object {name: "Pusur", colour: "orange and brown", age: 6} 

            //or

for (var i=0; i<catArray.length; i++) {
    console.log(catArray[i].name);
    console.log(catArray[i].colour);
    console.log(catArray[i].age);
  }
  // Pusur
  // orange and brown
  // 6



// question 9
function logToConsole(theConsoleLog) {
    console.log(theConsoleLog);
}


// question 10
function logToConsole(theConsoleLog) {
    console.log(theConsoleLog);
  }
  logToConsole("donkey");
// donkey
