var paciente  = document.querySelectorAll(".paciente");
var tabela  = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){

    debugger;

    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);

    event.target.parentNode.classList.add("fadeOut");

    // var alvo = event.target;
    // var paiAlvo = alvo.parentNode;

    // console.log(event.target);
    // Event pra responder o evento, e o target é por que ele diz quem foi clicado

});


