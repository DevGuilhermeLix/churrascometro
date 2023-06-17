// Carne - 400 gr por + de 6 horas - 650
// Cerveja - 1200ml por Pessoa + 6 horas -2000ml
// Refrigerante/agua - 1000 ml por pessoa = 6 horas 1500ml
// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;


    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);


    resultado.innerHTML = `<p id="final">${qdtTotalCarne / 1000} Kg's de Carne</p>`
    resultado.innerHTML += `<p id="final">${Math.ceil(qdtTotalCerveja / 350)} Lata's de Cerveja</p>`
    resultado.innerHTML += `<p id="final">${Math.ceil(qdtTotalBebidas / 2000)} Pet's 2L de Bebida</p>`
}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    }
    else {
        return 500;
    }

}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    }
    else {
        return 1200;
    }

}

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    }
    else {
        return 600;
    }

}