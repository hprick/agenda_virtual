const form = document.getElementById("form-contatos");
const nomes = [];
const numeros = [];

let linhas = "";

form.addEventListener("submit", function(e){
    e.preventDefault();

    adcionaLinha();
    atualizaTabela();
})



    function adcionaLinha(){
    const inputNomeContato = document.getElementById("nome-contato");
    const inputNumeroContato = document.getElementById("numero-contato");

    if (nomes.includes (inputNomeContato.value)){
        alert (`O nome ${inputNomeContato.value} já está cadastrado`)
    } else {

    nomes.push(inputNomeContato.value)
    numeros.push(parseInt(inputNumeroContato.value))

    let linha = "<tr>";
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += "</tr>";

    linhas += linha
    }

    inputNomeContato.value = ""
    inputNumeroContato.value = ""


}

function atualizaTabela(){
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas
}

