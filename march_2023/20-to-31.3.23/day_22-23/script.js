function example(n1, n2) {
  var a = n1 + " Kabir " + n2;
  return a;
}

var x = example("This side", "singh");
document.getElementById("beta").innerHTML = x;

const names = ["kabir", "singh", "hanspal"];

var data = {
  name: "Kabir",
  age: 12,
  isadult: true,
};
document.write(names);
document.write(`\t${data.name} is ${data.age} years old`);

var siblings = ["Kabir", "Geetu", "Vani", "sunit", "amayra"];

siblings[2] = "Amayra";

document.getElementById("beta_2").innerHTML = siblings[siblings.length - 1];

function nam(x,y) {
    return "my name is " + x + " " + y;
}
var x = prompt("first name?");
var y = prompt("last name?");
document.write(nam(x,y));

function user(first, last){
    this.first = first;
    this.last = last;
}

var user1 = new user("kabir","singh");
var user2 = new user("geetu","bhullar");

document.write(user2.last);