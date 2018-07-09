
/*
Crea una array amb el teu nom on cada posició correspongui a una lletra.
Fes un bucle que recorri l’array i mostri per consola cadascuna de les lletres

Al bucle, si la lletra és una vocal imprimeix a la consola: ‘VOCAL’. Sinó, imprimeix: ‘CONSONTANT’.
Pensa una forma per emmagatzemar tant les lletres del array com el nombre de vegades que apareixen i implementa’l.

FASE 4: Crea una array amb el teu cognom on cada posició correspongui a una lletra.
Passa de les dues arrays a una sola. A més, afegeix una posició amb un espai buit entre la primera i la segona. És a dir, abans tenies les arrays name i surname i ara només tens una que es dirà fullName.

FullName: [‘N’, ‘A’, ‘M’, ‘E’, ‘ ‘, ‘S’, ‘U’, ‘R‘, ‘N’, ‘A’, ‘M’, ‘E’]
Pista: Feu servir aquesta funció (enteneu què esteu fent)
	var myFullName = [];
myFullName.push(...myName); */


var myName;
myName = ["C", "R", "I", 4, "T", "I", "N", "A"];
var mySurname;
mySurname = ["F","E","R","N","A","N","D","E","Z"];

var vowel;
vowel = ["A", "E", "I", "O", "U"];
var myMap = new Map();


for (var i = 0; i < myName.length; i++) {
    console.log(myName[i]);

    if (vowel.indexOf(myName[i]) != -1) {
        console.log("vocal");
    } else if (typeof myName[i] === 'number') {
        console.log("esto es un número");
    } else {
        console.log("consonante");
    }

    /* con el has vemos cada elemento de la array gracias al [i]
     y comprobamos si tiene un valor o no. Si es cierto que la tiene, además, le añadimos uno.
     Para eso creamos la variable valor para que las vaya guardando. Map crea un mapa de la array, guarda el valor en cada iteración, 
     no la sustituye. get devuelve un objeto específico del objeto y le sumamos uno. */

    if (myMap.has(myName[i]) == true) {
        var valor = myMap.get(myName[i]);

        myMap.set(myName[i], valor + 1);
    } else {


        myMap.set(myName[i], 1);
    }

} 


console.log(myName);
console.log(myMap);


//FASE 4
var myFullName = [];
//myFullName.push (myName, " ", mySurname);
myFullName.push (...myName, ..." ", ...mySurname);
console.log(myFullName);