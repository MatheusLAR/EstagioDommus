var ajax = new XMLHttpRequest();
ajax.open("Get", "https://homologacao10.dommusbeta.com.br/api-teste/parcelas.json");
ajax.responseType = "json"
ajax.send();
ajax.addEventListener("readystatechange", function(){
    var resposta = ajax.response;
    var lista = document.querySelector(".list");
    for(var i = 0; i<resposta.length; i++){
        lista.innerHTML += "<li>+resposta[i]+</li> "
    }



});