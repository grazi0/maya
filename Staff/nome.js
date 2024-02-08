document.addEventListener('DOMContentLoaded', (event) => {
    setCurrentDate();
    addEmojiButtonListener();
    addEmojiSelectorListener();
    loadResolvedByID();
    addResolvedByIDListener();
    // ... Outras funções de inicialização
});

function addResolvedByIDListener() {
    const resolvedByIDInput = document.getElementById('resolvedByID');
    if (resolvedByIDInput) {
        resolvedByIDInput.addEventListener('blur', function() {
            localStorage.setItem('resolvedByID', resolvedByIDInput.value);
        });
    }
}

function loadResolvedByID() {
    const savedID = localStorage.getItem('resolvedByID');
    if (savedID) {
        const resolvedByIDInput = document.getElementById('resolvedByID');
        if (resolvedByIDInput) {
            resolvedByIDInput.value = savedID;
        }
    }
}



// Objeto JavaScript para mapear os IDs do Discord aos IDs da cidade
const discordToCityIDMap = {
    'DiscordID1': 'CityID1',
    'DiscordID2': 'CityID2',
    // Adicione mais mapeamentos conforme necessário
};

document.addEventListener('DOMContentLoaded', (event) => {
    const discordIDInputs = document.querySelectorAll('.discord-id-input'); // Selecione todos os inputs que terão um ID do Discord inserido

    discordIDInputs.forEach(input => {
        input.addEventListener('blur', function() {
            const discordID = this.value;
            const cityID = discordToCityIDMap[discordID];

            if (cityID) {
                // Suponha que o ID da cidade deve ser mostrado em um span próximo ao input
                const cityIDDisplay = this.nextElementSibling; // Ajuste conforme necessário
                cityIDDisplay.textContent = cityID;
            }
        });
    });
});



