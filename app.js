//Crie uma função para calcular i indice imc

let altura = parseFloat(prompt('digite a sua altura em mts usando "." para separar'));
let peso = parseFloat(prompt('Digite seu peso em kg'));
function calculaIMC(altura, peso){
let imc =  peso / (altura * altura);
console.log(`Seu IMC é : ${imc.toFixed(2)}`);
}
calculaIMC(altura, peso);

//obs foi usado parsefloat para tranformar o valor da string em números para que fosse ralizado o calculo e o prefixo toFixed com o paarametro 2 para limitar as casas decimais em dois

// Criar para calcular o valor do fatorial de um número .

let numero = 10;
let resposta = calcularFatorial(numero);

function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }

    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }

    return fatorial;
}

// Exibe o resultado
console.log(`O fatorial de ${numero} é ${resposta}`);

//Criar uma função que converte um valor para dólar,considerando a cotação do dólar igual a R$ 4,80

let cotacaoDoDolar=4.80;
let valorEmReais = parseFloat(prompt('Digite o valor R$ que deseja ser convertido em $USD:'));
function converteReaisemDolar (cotacaoDoDolar,valorEmReais){
    let valorEmDolar = (valorEmReais/cotacaoDoDolar);
    console.log(`O valor convertido em $USD é: ${valorEmDolar.toFixed(2)}`);
}
converteReaisemDolar(cotacaoDoDolar, valorEmReais);

// Criar uma função que mostre na tela a área e o perímetro de uma sala retangular
let alturaDaSala = parseFloat(prompt('Digite a altura da sala em mts usando "."para cm: '));
let largura = parseFloat(prompt('Digite a largura da sala em mts usando "." para separar os Cm: '));
function calculaPerimetro(altura,largura){
    let perimetro = 2*(alturaDaSala+largura);
    console.log(`O valor do perímetro da sala retangular é: ${perimetro} mts`);
}
function calculaArea(altura,largura){
    let area = alturaDaSala*largura;
    console.log(`O valor da área da sala retangular é: ${area}`);
}

calculaPerimetro(altura,largura);
calculaArea(altura,largura);

//Criar uma função para mostrar na tela a área e o perímetro de uma sala circular, usando pi = 3,14
let raio = parseFloat(prompt('Digite o raio da sala em metros (use "." para decimais): '));
const pi = 3.14;

function calcularPerimetroCircular(raio, pi) {
    let valorPerimetroCircular = 2 * pi * raio; 
    console.log(`O valor do perímetro da sala circular é: ${valorPerimetroCircular.toFixed(2)} metros.`);
}

function calcularAreaCircular(raio, pi) {
    let valorAreaCircular = pi * raio * raio; 
    console.log(`O valor da área da sala circular é: ${valorAreaCircular.toFixed(2)} metros quadrados.`);
}

calcularAreaCircular(raio, pi);
calcularPerimetroCircular(raio, pi);

//Para Criar uma função calcula a tabuada

let numeroTabuada = parseFloat(prompt('Digite o número para visualizar a tabuada:'));

function tabuada(numeroTabuada) {
    for (let i = 1; i <= 10; i++) {
        let resultado = numeroTabuada * i;
        console.log(`A Tabuada de ${numeroTabuada} é : ${numeroTabuada} * ${i} = ${resultado}`);
    }
}
tabuada(numeroTabuada);
//testando função
function sortearAmigo() {
    let codigoIndexacao =  Math.floor(Math.random() * 10) + 1;
    console.log(codigoIndexacao);
}

sortearAmigo();
