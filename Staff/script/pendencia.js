// Este evento garante que o código JavaScript só será executado após o carregamento do HTML.
document.addEventListener('DOMContentLoaded', function() {
    // Botão para alternar a visibilidade do campo Pendência
    var toggleButton = document.getElementById('togglePendencyButton');
    var pendencyField = document.getElementById('pendencyField');

    // Inicializa o campo de pendência como oculto
    if (pendencyField) {
        pendencyField.style.display = 'none';
    } else {
        console.error('Campo de pendência não encontrado!');
    }

    // Adiciona o evento de clique ao botão de alternância de pendência
    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            // Alterna entre display none e flex para manter o layout flexbox.
            pendencyField.style.display = pendencyField.style.display === 'none' ? 'flex' : 'none';
        });
    } else {
        console.error('Botão de alternância de pendência não encontrado!');
    }

    // Botão para copiar as informações de pendência
    var copyButton = document.getElementById('copyDetailsButton');
    if (copyButton) {
        copyButton.addEventListener('click', copyPendencyDetails);
    } else {
        console.error('Botão de cópia de pendência não encontrado!');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Código existente para a alternância de visibilidade do campo Pendência
    // ...

    // Botão para copiar as informações de pendência
    var copyButton = document.getElementById('copyDetailsButton');
    if (copyButton) {
        copyButton.addEventListener('click', copyPendencyDetails);
    } else {
        console.error('Botão de cópia de pendência não encontrado!');
    }
});

function copyPendencyDetails() {
    var resolvedByID = document.getElementById('resolvedByID') ? document.getElementById('resolvedByID').value : 'Não especificado';
    var resolvedDate = document.getElementById('resolvedDate') ? document.getElementById('resolvedDate').value : 'Não especificado';
    var complainantDiscordID = document.getElementById('complainantDiscordID') ? document.getElementById('complainantDiscordID').value : 'Não especificado';
    var complainantGameID = document.getElementById('complainantGameID') ? document.getElementById('complainantGameID').value : 'Não especificado';
    var accusedDiscordID = document.getElementById('accusedDiscordID') ? document.getElementById('accusedDiscordID').value : 'Não especificado';
    var accusedGameID = document.getElementById('accusedGameID') ? document.getElementById('accusedGameID').value : 'Não especificado';
    var judgment = document.getElementById('judgment') ? document.getElementById('judgment').value : 'Não especificado';
    var reason = document.getElementById('reason') ? document.getElementById('reason').value : 'Não especificado';
    var itens = document.getElementById('pendency') ? document.getElementById('pendency').value : 'Não especificado';
    var provas = document.getElementById('evidence') ? document.getElementById('evidence').value : 'Não especificado';


    var formattedInfo =
        `>>> 📦 **DENUNCIANTE**: <@${complainantDiscordID}> // ${complainantGameID}\n` +
        `📦 **DENUNCIADO**: <@${accusedDiscordID}> // ${accusedGameID}\n` +
        `📦 **MOTIVO**: ${reason}\n` +
        `📦 **PROVAS**: ${provas}\n` +
        `📦 **ITENS**:\n\`\`\`${itens}\`\`\``;
        
    var outputArea = document.getElementById('output');
    if (outputArea) {
        outputArea.value = formattedInfo;
        navigator.clipboard.writeText(formattedInfo)
            .then(() => console.log('Informações copiadas para a área de transferência.'))
            .catch(err => console.error('Erro ao copiar as informações: ', err));
    } else {
        console.error('Elemento de área de texto para pendência não encontrado!');
    }
}


















const itemSpawnMapping = {
    "bandagemQty": "bandagem",
    "dorflexQty": "dorflex",
    "item2Qty1": "pistol_mk2",
    "item2Qty2": "ammo_pistol_mk2",
    "item2Qty3": "combatpistol",
    "item2Qty4": "ammo_combatpistol",
    "item2Qty5": "assaultrifle_mk2",
    "item2Qty6": "ammo_assaultrifle_mk2",
    "item2Qty7": "assaultsmg",
    "item2Qty8": "ammo_assaultsmg",
    "item2Qty9": "gusenberg",
    "item2Qty10": "advancedrifle",
    "item2Qty11": "ammo_advancedrifle",
    "item2Qty12": "specialcarbine_mk2",
    "item2Qty13": "ammo_specialcarbine_mk2",
    "item2Qty14": "machinepistol",
    "item2Qty15": "ammo_machinepistol",
    "item2Qty16": "carbinerifle_mk2",
    "item2Qty17": "ammo_carbinerifle_mk2",
    "item2Qty18": "assaultrifle",
    "item2Qty19": "ammo_assaultrifle",
    "item2Qty20": "arma branca",
    "item2Qty21": "switchblade",
    "item2Qty22": "pé de cabra",
    "item2Qty23": "alicate",
    "item2Qty24": "ticket corrida",
    "item2Qty25": "colete",
    "item2Qty26": "algema",
    "item2Qty27": "capuz",
    "item2Qty28": "lockpick",
    "item2Qty29": "farme",
    "item2Qty30": "drogas",




    "item1Qty": "garrafa vazia",
    "item2Qty": "energetico",
    "item3Qty": "roupa",
    "item4Qty": "radio",
    "item5Qty": "binoculos",
    "item6Qty": "repairkit",
    "item7Qty": "pneu",
    "item8Qty": "celular",
    "item9Qty": "militec",
    "item10Qty": "oxigenio",
    "item11Qty": "racao",
    "item12Qty": "alianca",
    "item13Qty": "cordas",
    "item14Qty": "paraquedas",
    "item15Qty": "mochila",
    "item16Qty": "bronze",
    "item17Qty": "diamante",
    "item18Qty": "esmeralda",
    "item19Qty": "topazio",
    "item20Qty": "rubi",
    "item21Qty": "safira",
    "item22Qty": "ametista",
    "item23Qty": "ferro",
    "item24Qty": "ouro",
    "item25Qty": "tucunare",
    "item26Qty": "salmao",
    "item27Qty": "dourado",
    "item28Qty": "tilapia",
    "item29Qty": "pirarucu",
    "item30Qty": "corvina",
    "item31Qty": "lambari",
    "item32Qty": "pintado",
    "item33Qty": "pacu",





};

// Função para atualizar a lista de itens no campo "Itens:"
function updateItemList() {
    const itemListElement = document.getElementById('pendency'); // O elemento de input onde você quer mostrar os itens
    const itemQuantities = document.querySelectorAll('.item-qty');
    let itemListText = '';

    itemQuantities.forEach(input => {
        const itemName = itemSpawnMapping[input.id]; // Obtem o nome do item do mapeamento
        const quantity = input.value; // Obtem a quantidade

        if (quantity > 0) {
            itemListText += `${itemName} ${quantity}; `; // Adiciona o item e a quantidade na string
        }
    });

    itemListElement.value = itemListText.trim(); // Atualiza o campo de texto removendo espaços extras
}

// Adiciona ouvintes de evento a cada campo de quantidade da calculadora
document.querySelectorAll('.item-qty').forEach(function(input) {
    input.addEventListener('input', updateItemList);
});
