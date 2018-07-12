//crear una moneda (sempre la mateixa, per aixó la farem global)
var coin = new Coin();

//farem un métode dit flipcoin

flipCoin = function(){
    debugger;
    var text ="";
    //agafarem una moneda i li diu que farà amb ella
    coin.flipCoin(); 
// Vvamos a decirle que de la vuelta
    if (coin.value===0) text="HEAD";
else text ="TAIL";

    document.getElementById("coinInfo").innerHTML=text;
}
