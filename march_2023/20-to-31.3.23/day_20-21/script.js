document.getElementById("beta").innerHTML = "kabir singh";
document.write(24+12);
window.alert("hanji ki haal?");
console.log("awwww... my baby"); 

function fibo(n){
    if(n==0 || n==1) return 1;
    return fibo(n-1) + fibo(n-2);
}

var n;
n = prompt("which fibonacci number you want?");
var t = fibo(n);
alert(t);