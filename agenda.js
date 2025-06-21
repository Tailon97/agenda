const form = document.getElementById("formulario")

const nome =[];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha(){
    const inputNome = document.getElementById('nome-1');
    const inputTelefone = document.getElementById('telefone-1');

    if(nome.includes(inputNome.value)){
        alert(`O ${inputNome.value} já foi inserido(a)`);
    
    } else if (telefone.includes(inputTelefone.value)){
        alert(`O ${inputTelefone.value} já foi inserido(a)`);
    
     } else {
        nome.push(inputNome.value);
        telefone.push(inputTelefone.value);
    
        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += `</tr>`

        linhas += linha;
    }

    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}