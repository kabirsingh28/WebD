// const sum = function(a,b){
//     return a+b;
// }

// document.getElementById("beta").innerHTML = sum(4,3);

// const sum1 = (a,b) => {
//     return a+b;
// }

// document.getElementById("beta").innerHTML = sum1(5,5);

// const sum2 = (a,b) => a+b;

// document.getElementById("beta").innerHTML = sum2(6,6);

// const fruits = new Map([
//     ['apple', 'red'],
//     ['orange', 'orange'],
//     ['grapes', 'purple']
// ]);

// const fruits2 = new Map([
//     fruits.set('apple', '10'),
//     fruits.set('orange', '20'),
//     fruits.set('grapes', '30')
// ]);
// document.getElementById("beta").innerHTML = fruits.has('apple');

function printThis(some){
    document.getElementById("beta").innerHTML = some;
}

function add(n1,n2, callback){
    let sum = n1 + n2;
    callback(sum);
}

add(24,46,printThis);

//Normal function
function greet(name,callback){
    console.log("hello " + name);
    callback(name);
}

//callback function
function bday(name){
   console.log("Today is ur bday MR. "+ name);
}

greet('Kabir',bday);