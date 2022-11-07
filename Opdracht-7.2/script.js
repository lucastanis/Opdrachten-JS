var budget = prompt("Geef je budget in getallen: ");
var product = 60;
function balance() {    
    if(budget > product) {
        document.getElementById("id1").innerHTML = "U heeft genoeg geld!";
    }
    else {
        document.getElementById("id1").innerHTML = "Helaas, te weinig geldt";
    }
}