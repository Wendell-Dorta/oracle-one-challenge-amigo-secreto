//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Arrey para armazenar o nome dos amigos
let amigos = [];

function adicionarAmigo() {
    // Captura o valor inserido no campo de entrada
    const nome = document.getElementById("amigo").value.trim();

    // Validação para garantir que o campo não esteja vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return; // Se o campo estiver vazio, sai da função
    }

    // Validação para garantir que o nome não tenha números ou caracteres especiais
    const nomeValido = /^[a-zA-Z\s]+$/.test(nome); // Permite apenas letras e espaços

    if (!nomeValido) {
        // Verificação de se o nome contém números ou caracteres especiais
        if (/\d/.test(nome)) {
            alert("O nome não pode conter números.");
        } else if (/[^a-zA-Z\s]/.test(nome)) {
            alert("O nome não pode conter caracteres especiais.");
        }
        return; // Se o nome não for válido, sai da função
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nome);
    
    // Atualiza a lista de amigos na tela
    atualizarListaAmigos();
    
    // Limpa o campo de entrada
    document.getElementById("amigo").value = "";
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    // Obtém a referência da lista de amigos
    const lista = document.getElementById("listaAmigos");
    
    // Limpa a lista existente
    lista.innerHTML = "";

    // Cria um item da lista para cada amigo
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    // Verifica se o array de amigos não está vazio
    if (amigos.length === 0) {
        // Exibe mensagem de que todos os amigos já foram sorteados
        alert("Todos os amigos já foram sorteados.");
        return; // Se não houver amigos, a função retorna sem fazer o sorteio
    }

    // Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome do amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Atualiza o conteúdo do elemento de resultado com o nome sorteado
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`;

    // Remove o amigo sorteado do array
    amigos.splice(indiceAleatorio, 1);

    // Oculta a lista de amigos após o sorteio
    const listaAmigosElemento = document.getElementById("listaAmigos");
    listaAmigosElemento.style.display = "none"; // Torna a lista invisível

    // Após 5 segundos, remove a mensagem do sorteio e exibe a lista de amigos novamente
    setTimeout(function() {
        // Esconde a mensagem de resultado
        resultadoElemento.innerHTML = "";
        
        // Exibe a lista de amigos novamente
        listaAmigosElemento.style.display = "block";
    }, 5000); // 5000 milissegundos = 5 segundos
}
