// JavaScript source code


//Aula 1 
//sobre o console, pequena tela que aparece ao iniciar o site, ou seja o alerta
var nome = "Gabriel Roberto";
var idade = 22;
frase = "Cor�ia � o pa�s com mais animes no mundo";

alert("Bem Vindo ao Meu primeiro site com Javascript\nFeito por: " + nome);
alert(nome + " tem " + idade + " anos");

console.log(nome);
console.log(frase.replace("Cor�ia", "Jap�o").toUpperCase());

//Aula 2 
//sobre Array
var lista = ["Adriele", "Andreza", "Ant�nio", "Gabriel", "Pedro"];
lista.push("Silvia"); //push adiciona um item a lista e o comando pop() tira um item
console.log(lista);

//lista.length() mostra o tamanho da minha lista, como o comando len() em python
//lista.reverse() muda o lugar das posi��es de dentro da lista, do maior para o menor
//lista.toString() converte a lista para uma string

console.log(lista[2]);
console.log(lista[2].toString()[2]);
//Convertendo a lista para string, pegando o terceiro item nela, pegando a terceira letra do item
console.log(lista.join(" - "));
//join tamb�m converte a lista para uma string, mas deixa eu escolher o separador dos itens 

//sobre dicion�rio
var dic = [{ nome: "Ingrid", idade: 20, corpo: "esbelto" },{ nome: "Rafaela", idade: 21, corpo: "slim" }];
console.log(dic);

//Aula 3
//sobre la�os de repeti��o, condicionais e date
var id = prompt("Qual � a sua idade?");
    if (id >= 18) {
        alert("Maior de idade!");
    }
    else {
        alert("Voc� � menor de idade!")

        /* var a = id;
        while (a < 19) {
            a++;
            console.log("Falta voc� completar: " + a + " anos");
        }*/

        for (var a = id; a < 19; a++)
        {
            console.log("Falta voc� completar: " + a + " anos");
        };
    };

var data = new Date(); //Pega a data atual do momento e salva na vari�vel data
console.log(data.getMonth() + 1); //Pega o m�s em data e o corrige somando mais um
//getMinutes() pega os minutos
//getSeconds() pega os segundos
//getHours() pega a hora
//getDay() pega o dia

//Aula 4
//Sobre fun��es

function soma(a, b) {
    return a + b;
}

//alert(soma(15,2)); Realiza a soma e mostra no alerta na p�gina

    /*
    function setReplace(palavras, nome, novo_nome) {
        return palavras.replace(nome, novo_nome);
        //Utiliza a fun��o replace para pegar uma frase e substituir uma palavra nela
    }

    alert(setReplace("Ganha Brasil", "Brasil", "Jap�o"));
    //                Frase        ,  nome   , novo_nome

    */

function validaIdade(idade) {
    var valida; 
    if (idade >= 18){
        valida = true;
    }
    else {
        valida = false;
    }
    return valida;
}

//Aula 5
//Sobre o uso de bot�es
function Onbotao() {
    document.getElementById("agradecimento").innerHTML = "Obrigado por pressionar o bot�o!"

    //Mostra a mensagem ap�s o bot�o ser pressionado
    //console.log(ocument.getElementById("agradecimento"))
    //alert("Obrigado por apertar");
}

function Recarregar() {
    document.location.reload(true); //Recarrega a p�gina sem usar o cache
}

function redirecionar() {
    window.open("https://www.facebook.com/");
    window.location.href = "E:/Gabriel/Documentos/Estudos/Especializa��es/Digital Innovation/HTML5 e CSS3/Aula-BootStrap/index.html";
}

function Passou() {
    document.getElementById("deslize").innerHTML = "Nunca mais fa�a isso Jorge!";
}
function Tirou() {
    document.getElementById("deslize").innerHTML = "Passe o Mouse Aqui!";
}

function Passou2(element) {
    element.innerHTML = "Nunca te deram ela!";
}
function Tirou2(element) {
    element.innerHTML = "Segunda Chance!";
}

function Abriu() {
    //alert("P�gina Carregada!")
}

function Mudando(variavel) {
    console.log(variavel.value);
}