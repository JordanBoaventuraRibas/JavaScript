console.log("Fui carregado de um arquivo externo");

var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(i = 0 ; i < pacientes.length ; i++){
    var paciente = pacientes[i];
    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;

    var tdaltura = paciente.querySelector(".info-altura");
    var altura = tdaltura.textContent;

    var tdimc = paciente.querySelector(".info-imc");

    var veraltura = true;
    var verpeso = true;

    if(peso <= 0 || peso >= 500){
        tdimc.textContent = "Peso inválido!";
        verpeso = false;
        paciente.classList.add("paciente-invalido");
    }
    if(altura <=0 || altura >= 3){
        tdimc.textContent = "Altura inválida!";
        veraltura = false;
        paciente.classList.add("paciente-invalido");
    }

    if(veraltura && verpeso){
        var imc = peso / (altura * altura);
        tdimc.textContent = imc.toFixed(2);
    }
    
}

var botaoClicado = document.querySelector("adicionar-paciente");
botaoClicado.addEventListener("click",);
