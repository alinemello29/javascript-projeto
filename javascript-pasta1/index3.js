//Característica: Multiparadigma
var primeiroNumero = 9;
var segundoNumero = 4;
console.log(primeiroNumero + segundoNumero);

//exemplo ulitizando funções
var primeiroNumero = 9;
var segundoNumero = 4;

var somarNumero = function(primeiroNumero, segundoNumero) {
    return primeiroNumero + segundoNumero;
}
console.log(somarNumero(primeiroNumero, segundoNumero));

//exemplo utilizando classes com o framework react native
class Calculadora extends Component {
    constructor(props){
        super(props);
        this.somar = this.somar.bind(this);

    }
    somar(n1, n2){
        return n1 +n2;
    }
}