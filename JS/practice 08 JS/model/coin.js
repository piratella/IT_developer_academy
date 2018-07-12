//aquí definiremos la clase (objeto) esta es la moneda

function Coin() {
    this.value=0;

    // método de flip
    this.flipCoin=function() {
        this.value=Math.floor(Math.random()*2);
    }
}