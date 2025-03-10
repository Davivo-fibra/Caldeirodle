const amigues = [
    {
        nome: "Davivo",
        dataNasc: 2004,
        signo: "Leão",
        região: "São Paulo",
        mainLol: "Mid",
        estadoCivil: "Solteiro",
        fazOq: "Estuda",
    },
    {
        nome: "Rafael",
        dataNasc: 2005,
        signo: "Aquário",
        região: "São Paulo",
        mainLol: "Top",
        estadoCivil: "Solteiro",
        fazOq: "Estuda",
    },
    {
        nome: "Guigo",
        dataNasc: 2003,
        signo: "Áries",
        região: "São Paulo",
        mainLol: "Aposentado",
        estadoCivil: "Solteiro",
        fazOq: "Estuda",
    },
    {
        nome: "Thiago",
        dataNasc: 2007,
        signo: "Câncer",
        região: "São Paulo",
        mainLol: "Adc",
        estadoCivil: "Solteiro",
        fazOq: "Estuda",
    },
    {
        nome: "Donavas",
        dataNasc: 1994,
        signo: "Sagitário",
        região: "Porto Alegre",
        mainLol: "Sup",
        estadoCivil: "Casado",
        fazOq: "Trabalha",
    },
    {
        nome: "Thales",
        dataNasc: 1995,
        região: "Porto Alegre",
        signo: "Virgem",
        mainLol: "Aposentado",
        estadoCivil: "Solteiro",
        fazOq: "Trabalha",
    },
    {
        nome: "Ikro",
        dataNasc: 1992,
        signo: "Escorpião",
        região: "Porto Alegre",
        mainLol: "Sup",
        estadoCivil: "Casado",
        fazOq: "Trabalha",
    },
    {
        nome: "Pepê",
        dataNasc: 1996,
        signo: "Aquário",
        região: "Porto Alegre",
        mainLol: "Aposentado",
        estadoCivil: "Casado",
        fazOq: "Estuda e Trabalha",
    },
    {
        nome: "Nico",
        dataNasc: 1995,
        região: "Porto Alegre",
        signo: "Escorpião",
        mainLol: "Sup",
        estadoCivil: "solteiro",
        fazOq: "Estuda e Trabalha",
    },
    {
        nome: "Thutz",
        dataNasc: 1993,
        região: "Porto Alegre",
        signo: "Capricórnio",
        mainLol: "Aposentado",
        estadoCivil: "Solteiro",
        fazOq: "Estuda e Trabalha",
    },
    {
        nome: "Jãozin",
        dataNasc: 2008,
        signo: "Escorpião",
        região: "Brasília",
        mainLol: "Jg",
        estadoCivil: "Solteiro",
        fazOq: "Estuda",
    },
    {
        nome: "Luquinhas",
        dataNasc: 1992,
        região: "Porto Alegre",
        signo: "Virgem",
        mainLol: "Top",
        estadoCivil: "Solteiro",
        fazOq: "Trabalha",
    },
    {
        nome: "Rafinha",
        dataNasc: 2009,
        região: "São Paulo",
        mainLol: "Top",
        estadoCivil: "Solteiro",
        fazOq: "Estuda",
    }
];

// Seleciona aleatoriamente um dos amigos para ser o "amigue" do jogo
let amigue = amigues[Math.floor(Math.random() * amigues.length)];

// Função para verificar o chute do usuário
function checkChute() {
    // Obtém o valor do chute e a tabela de feedback
    const chuteInput = document.getElementById("chuteInput").value;
    const feedbackTable = document.getElementById("feedbackTable").getElementsByTagName("tbody")[0];
    const messageDiv = document.getElementById("message");
    const resetButton = document.getElementById("resetButton");

    // Busca o personagem correspondente ao nome chutado
    const guessedCharacter = amigues.find(char => char.nome.toLowerCase() === chuteInput.toLowerCase());

    // Se o personagem for encontrado, exibe as informações comparadas
    if (guessedCharacter) {
        const newRow = feedbackTable.insertRow();

        // Cria uma célula para o nome
        let cellNome = newRow.insertCell();
        cellNome.textContent = guessedCharacter.nome;

        // Cria uma célula para a data de nascimento
        let cellDataNasc = newRow.insertCell();
        if (guessedCharacter.dataNasc === amigue.dataNasc) {
            cellDataNasc.textContent = guessedCharacter.dataNasc;
            cellDataNasc.className = "acerto"; // Acertou a data
        } else if (Math.abs(guessedCharacter.dataNasc - amigue.dataNasc) <= 1) {
            cellDataNasc.textContent = guessedCharacter.dataNasc;
            cellDataNasc.className = "perto"; // Erro pequeno
        } else {
            cellDataNasc.textContent = guessedCharacter.dataNasc;
            cellDataNasc.className = "errado"; // Erro grande
        }

        // Cria células para as outras propriedades
        let cellRegião = newRow.insertCell();
        cellRegião.textContent = guessedCharacter.região;
        cellRegião.className = guessedCharacter.região === amigue.região ? "acerto" : "errado";

        let cellMainLol = newRow.insertCell();
        cellMainLol.textContent = guessedCharacter.mainLol;
        cellMainLol.className = guessedCharacter.mainLol === amigue.mainLol ? "acerto" : "errado";

        let cellEstadoCivil = newRow.insertCell();
        cellEstadoCivil.textContent = guessedCharacter.estadoCivil;
        cellEstadoCivil.className = guessedCharacter.estadoCivil === amigue.estadoCivil ? "acerto" : "errado";

        let cellfazOq = newRow.insertCell();
        cellfazOq.textContent = guessedCharacter.fazOq;
        cellfazOq.className = guessedCharacter.fazOq === amigue.fazOq ? "acerto" : "errado";

        let cellsigno = newRow.insertCell();
        cellsigno.textContent = guessedCharacter.signo;
        cellsigno.className = guessedCharacter.signo === amigue.signo ? "acerto" : "errado";

        // Se o nome do personagem adivinhado for igual ao do "amigue", exibe mensagem de vitória
        if (guessedCharacter.nome === amigue.nome) {
            messageDiv.textContent = "BOA DOG, TA SABENDO LEGAL"; 
            resetButton.style.display = ""; // Exibe o botão de reset
        }
    } else {
        // Caso o nome não exista, exibe alerta
        alert("Esse nome não pertence ao Caldeirão");
    }

    // Limpa o campo de input após o chute
    document.getElementById("chuteInput").value = "";
}

// Função para mostrar sugestões de nomes enquanto o usuário digita
function showSuggestions() {
    const chuteInput = document.getElementById("chuteInput").value.toLowerCase();
    const suggestionsList = document.getElementById("suggestions");

    // Limpa a lista de sugestões anteriores
    suggestionsList.innerHTML = "";

    // Se houver algo digitado, filtra os nomes dos amigos que começam com a palavra digitada
    if (chuteInput) {
        const suggestions = amigues.filter(char => char.nome.toLowerCase().startsWith(chuteInput));

        // Para cada sugestão, cria um botão para o nome
        suggestions.forEach(char => {
            const button = document.createElement("button");
            button.textContent = char.nome;
            button.onclick = function() {
                document.getElementById("chuteInput").value = char.nome;
            };
            suggestionsList.appendChild(button);
        });
    }
}

// Função para resetar o jogo e escolher um novo "amigue"
function resetGame() {
    // Escolhe um novo "amigue" aleatoriamente
    amigue = amigues[Math.floor(Math.random() * amigues.length)];

    // Limpa o campo de input e a lista de sugestões
    document.getElementById("chuteInput").value = "";
    document.getElementById("suggestions").innerHTML = "";

    // Limpa a tabela de feedback
    document.getElementById("feedbackTable").getElementsByTagName("tbody")[0].innerHTML = "";

    // Limpa a mensagem e esconde o botão de reset
    document.getElementById("message").textContent = "";
    document.getElementById("resetButton").style.display = "none"; 
}
