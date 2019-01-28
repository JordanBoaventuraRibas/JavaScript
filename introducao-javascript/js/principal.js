console.log("Fui carregado de um arquivo externo");

var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(i = 0 ; i < pacientes.length ; i++){
    var tdpeso = pacientes[i].querySelector(".info-peso");
    var peso = tdpeso.textContent;

    var tdaltura = pacientes[i].querySelector(".info-altura");
    var altura = tdaltura.textContent;

    var tdimc = pacientes[i].querySelector(".info-imc");

    var veraltura = true;
    var verpeso = true;

    if(peso <= 0 || peso >= 500){
        tdimc.textContent = "Peso inválido!";
        verpeso = false;
    }
    if(altura <=0 || altura >= 3){
        tdimc.textContent = "Altura inválida!";
        veraltura = false;
    }

    if(veraltura && verpeso){
        var imc = peso / (altura * altura);
        tdimc.textContent = imc.toFixed(2);
    }
    
}
