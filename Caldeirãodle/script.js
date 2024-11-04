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

let amigue = amigues[Math.floor(Math.random() * amigues.length)];

function checkChute() {
    const chuteInput = document.getElementById("chuteInput").value;
    const feedbackTable = document.getElementById("feedbackTable").getElementsByTagName("tbody")[0];
    const messageDiv = document.getElementById("message");
    const resetButton = document.getElementById("resetButton");

    const guessedCharacter = amigues.find(char => char.nome.toLowerCase() === chuteInput.toLowerCase());

    if (guessedCharacter) {
        const newRow = feedbackTable.insertRow();

        let cellNome = newRow.insertCell();
        cellNome.textContent = guessedCharacter.nome;

        let cellDataNasc = newRow.insertCell();
        if (guessedCharacter.dataNasc === amigue.dataNasc) {
            cellDataNasc.textContent = guessedCharacter.dataNasc;
            cellDataNasc.className = "acerto";
        } else if (Math.abs(guessedCharacter.dataNasc - amigue.dataNasc) <= 1) {
            cellDataNasc.textContent = guessedCharacter.dataNasc;
            cellDataNasc.className = "perto";
        } else {
            cellDataNasc.textContent = guessedCharacter.dataNasc;
            cellDataNasc.className = "errado"; 
        }

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

        if (guessedCharacter.nome === amigue.nome) {
            messageDiv.textContent = "BOA DOG, TA SABENDO LEGAL"; 
            resetButton.style.display = ""; 
        }
    } else {
        alert("Esse nome não pertence ao Caldeirão");
    }
    document.getElementById("chuteInput").value = "";
}

function showSuggestions() {
    const chuteInput = document.getElementById("chuteInput").value.toLowerCase();
    const suggestionsList = document.getElementById("suggestions");

    suggestionsList.innerHTML = "";

    if (chuteInput) {
        const suggestions = amigues.filter(char => char.nome.toLowerCase().startsWith(chuteInput));
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

function resetGame() {
    amigue = amigues[Math.floor(Math.random() * amigues.length)];
    document.getElementById("chuteInput").value = "";
    document.getElementById("suggestions").innerHTML = "";
    document.getElementById("feedbackTable").getElementsByTagName("tbody")[0].innerHTML = "";
    document.getElementById("message").textContent = "";
    document.getElementById("resetButton").style.display = "none"; 
}
