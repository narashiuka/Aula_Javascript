// JavaScript source code


//Aula 1 
//sobre o console, pequena tela que aparece ao iniciar o site, ou seja o alerta
var nome = "Gabriel Roberto";
var idade = 22;
frase = "Coréia é o país com mais animes no mundo";

alert("Bem Vindo ao Meu primeiro site com Javascript\nFeito por: " + nome);
alert(nome + " tem " + idade + " anos");

console.log(nome);
console.log(frase.replace("Coréia", "Japão").toUpperCase());

//Aula 2 
//sobre Array
var lista = ["Adriele", "Andreza", "Antônio", "Gabriel", "Pedro"];
lista.push("Silvia"); //push adiciona um item a lista e o comando pop() tira um item
console.log(lista);

//lista.length() mostra o tamanho da minha lista, como o comando len() em python
//lista.reverse() muda o lugar das posições de dentro da lista, do maior para o menor
//lista.toString() converte a lista para uma string

console.log(lista[2]);
console.log(lista[2].toString()[2]);
//Convertendo a lista para string, pegando o terceiro item nela, pegando a terceira letra do item
console.log(lista.join(" - "));
//join também converte a lista para uma string, mas deixa eu escolher o separador dos itens 

//sobre dicionário
var dic = [{ nome: "Ingrid", idade: 20, corpo: "esbelto" },{ nome: "Rafaela", idade: 21, corpo: "slim" }];
console.log(dic);

//Aula 3
//sobre laços de repetição, condicionais e date
var id = prompt("Qual é a sua idade?");
    if (id >= 18) {
        alert("Maior de idade!");
    }
    else {
        alert("Você é menor de idade!")

        /* var a = id;
        while (a < 19) {
            a++;
            console.log("Falta você completar: " + a + " anos");
        }*/

        for (var a = id; a < 19; a++)
        {
            console.log("Falta você completar: " + a + " anos");
        };
    };

var data = new Date(); //Pega a data atual do momento e salva na variável data
console.log(data.getMonth() + 1); //Pega o mês em data e o corrige somando mais um
//getMinutes() pega os minutos
//getSeconds() pega os segundos
//getHours() pega a hora
//getDay() pega o dia

//Aula 4
//Sobre funções

function soma(a, b) {
    return a + b;
}

//alert(soma(15,2)); Realiza a soma e mostra no alerta na página

    /*
    function setReplace(palavras, nome, novo_nome) {
        return palavras.replace(nome, novo_nome);
        //Utiliza a função replace para pegar uma frase e substituir uma palavra nela
    }

    alert(setReplace("Ganha Brasil", "Brasil", "Japão"));
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
//Sobre o uso de botões
function Onbotao() {
    document.getElementById("agradecimento").innerHTML = "Obrigado por pressionar o botão!"

    //Mostra a mensagem após o botão ser pressionado
    //console.log(ocument.getElementById("agradecimento"))
    //alert("Obrigado por apertar");
}

function Recarregar() {
    document.location.reload(true); //Recarrega a página sem usar o cache
}

function redirecionar() {
    window.open("https://www.facebook.com/");
    window.location.href = "E:/Gabriel/Documentos/Estudos/Especializações/Digital Innovation/HTML5 e CSS3/Aula-BootStrap/index.html";
}

function Passou() {
    document.getElementById("deslize").innerHTML = "Nunca mais faça isso Jorge!";
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
    //alert("Página Carregada!")
}

function Mudando(variavel) {
    console.log(variavel.value);
}