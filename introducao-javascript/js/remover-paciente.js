var pacientes = document.querySelector("#tabela-pacientes");

pacientes.addEventListener("dblclick", function(){

    event.target.parentNode.remove();
    
});