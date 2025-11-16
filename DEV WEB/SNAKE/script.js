var monTableau = [1, 2, 3, 1, 100];
var monChiffre = monTableau.length;

for (var i = 0; i < monTableau.length; i++) {
    console.log(monTableau[i]);
}

console.log("Mon chiffre est : " + monChiffre);

monTableau.push(200);
console.log("Après push, mon tableau est : " + monTableau);