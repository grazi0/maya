document.addEventListener('DOMContentLoaded', (event) => {
    setCurrentDate();
    addEmojiButtonListener();
    addEmojiSelectorListener();
});

function setCurrentDate() {
    const resolvedDateElement = document.getElementById('resolvedDate');
    if (resolvedDateElement) {
        const date = new Date();
        const day = date.getDate().toString().padStart(2, '0');
        const monthIndex = date.getMonth();
        const monthNumber = (monthIndex + 1).toString().padStart(2, '0');
        const monthNames = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];
        const formattedDate = `${day}/${monthNumber} ${monthNames[monthIndex]}`;
        resolvedDateElement.value = formattedDate;
    } else {
        console.error('Elemento resolvedDate não encontrado!');
    }
}

function addEmojiButtonListener() {
    const emojiButton = document.getElementById('emojiButton');
    if (emojiButton) {
        emojiButton.addEventListener('click', toggleEmojiMenu);
    } else {
        console.error('Elemento emojiButton não encontrado!');
    }
}

function addEmojiSelectorListener() {
    const emojiSelector = document.getElementById('emojiSelector');
    if (emojiSelector) {
        emojiSelector.addEventListener('change', handleEmojiSelection);
    } else {
        console.error('Elemento emojiSelector não encontrado!');
    }
}

function toggleEmojiMenu() {
    const emojiList = document.getElementById('emojiList');
    if (emojiList) {
        emojiList.style.display = emojiList.style.display === 'block' ? 'none' : 'block';
    } else {
        console.error('Elemento emojiList não encontrado!');
    }
}

function handleEmojiSelection() {
    const emojiSelector = document.getElementById('emojiSelector');
    const selectedEmoji = document.getElementById('selectedEmoji');
    if (emojiSelector && selectedEmoji) {
        const [name, id] = emojiSelector.value.split(':');
        selectedEmoji.textContent =`:${name}:${id}`;
    } else {
        console.error('Elemento emojiSelector ou selectedEmoji não encontrado!');
    }
}


function copySelectedTopics() {
    const form = document.getElementById('caseForm');
    const output = document.getElementById('output');
    if (form && output) {
        const accusedDiscordID = form.accusedDiscordID.value;
        const accusedGameID = form.accusedGameID.value;
        const reason = form.reason.value;
        let tagID = form.tagID.value;
        
        if (tagID !== 'N/A') {
            tagID = `<@&${tagID}>`;
        }
        
        const selectedEmoji = document.getElementById('selectedEmoji').textContent;

        const text = `>>> ${selectedEmoji} **DENUNCIADO**:<@${accusedDiscordID}> // ${accusedGameID}\n` +
            `${selectedEmoji} **MOTIVO**: ${reason}\n` +
            `${selectedEmoji} **PUNIÇÃO**: ${tagID}`;

        output.value = text;
        navigator.clipboard.writeText(text)
            .then(() => console.log('Informações selecionadas copiadas para a área de transferência!'))
            .catch(err => console.error('Erro ao copiar texto: ', err));
    } else {
        console.error('Elementos do formulário ou de saída não encontrados!');
    }
}

// Atualiza o texto no campo de saída com o emoji de julgamento
function updateJudgmentEmoji() {
    var judgmentSelect = document.getElementById('judgment');
    var outputArea = document.getElementById('output');
    
    if (!outputArea) {
        console.error('Área de saída não encontrada!');
        return;
    }

    var judgmentText = '';
    if (judgmentSelect.value === "Aprovado") {
        judgmentText = 'APROVADO <a:check_bl:1061841616987504731>';
    } else if (judgmentSelect.value === "Negado") {
        judgmentText = 'NEGADO <a:negativebh:1156996864781074463>';
    }

    var form = document.getElementById('caseForm');
    if (form) {
        var resolvedByID = form.resolvedByID.value;
        var dateElement = document.getElementById('resolvedDate');
        var selectedEmoji = document.getElementById('selectedEmoji').textContent;
        var maskEmoji = '<a:e_stitchviolao:1099763152939393194> '; // Emoji para "RESOLVIDO POR"
        
        var reasonText = form.reason.value.toUpperCase(); // Texto do motivo em maiúsculas

        var tagID = form.tagID.value ? `<@&${form.tagID.value}>` : ''; // Adicione a tag de volta

        var newText = `>>> ${maskEmoji}**RESOLVIDO POR**:<@${resolvedByID}> | ${dateElement.value}\n\n` +
            `${selectedEmoji} **DENUNCIANTE**: <@${form.complainantDiscordID.value}> // ${form.complainantGameID.value}\n` +
            `${selectedEmoji} **DENUNCIADO**: <@${form.accusedDiscordID.value}> // ${form.accusedGameID.value}\n` +
            `${selectedEmoji} **JULGAMENTO**: ${judgmentText}\n` +
            `${selectedEmoji} **MOTIVO**: **${reasonText}**\n` + // Motivo em negrito e maiúsculo
            `${tagID ? `${selectedEmoji} **PUNIÇÃO**: ${tagID}\n` : ''}` +
            `${selectedEmoji} **PROVAS**: ${form.evidence.value}`;

        console.log(newText); // Depuração para verificar o que está sendo gerado
        outputArea.value = newText;
    }
}



// Certifique-se de que as outras funções de cópia usem o valor atualizado do outputArea
function copyText() {
    // Chamada para atualizar o julgamento imediatamente antes de copiar
    updateJudgmentEmoji();
    
    var outputArea = document.getElementById('output');
    if (outputArea) {
        navigator.clipboard.writeText(outputArea.value)
            .then(() => console.log('Informações copiadas para a área de transferência!'))
            .catch(err => console.error('Erro ao copiar texto: ', err));
    } else {
        console.error('Área de saída não encontrada!');
    }
}

// Chamada da função copySelectedTopics permanece a mesma



