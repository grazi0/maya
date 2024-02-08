document.addEventListener('DOMContentLoaded', (event) => {
    var selectedEmoji = document.getElementById('selectedEmoji');
    var emojiList = document.getElementById('emojiList');
    var searchBar = document.getElementById('emojiSearch');
    var emojiSelector = document.getElementById('emojiSelector');

    // Função para selecionar um emoji
    window.selectEmoji = function(emoji) {
        if (selectedEmoji) {
            selectedEmoji.textContent = emoji; // Atualiza o texto do elemento selecionado com o emoji escolhido
        }

        // Fecha a lista suspensa
        emojiList.style.display = 'none';
    };

    // Função para filtrar emojis pelo emoji exato inserido na barra de pesquisa
    function searchEmoji() {
        var filter = searchBar.value.trim().toLowerCase();
        var emojis = emojiList.getElementsByClassName('emoji-option');
        
        for (var i = 0; i < emojis.length; i++) {
            var emoji = emojis[i];
            var emojiText = emoji.textContent || emoji.innerText;
            emojiText = emojiText.trim().toLowerCase();
            emoji.style.display = (emojiText === filter) ? 'inline-block' : 'none';
        }
    }


});





