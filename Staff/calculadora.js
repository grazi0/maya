document.addEventListener('DOMContentLoaded', function() {
    const toggleFineButton = document.getElementById('toggleFineButton');
    const calculator = document.getElementById('calculator');
    const fineAmountInput = document.getElementById('fineAmount'); // Obter o input da multa

    // Função de cálculo
    function calculateTotal() {
        let total = 0;
        document.querySelectorAll('.item-qty').forEach(function(input) {
            let price = parseFloat(input.dataset.price);
            let qty = parseFloat(input.value) || 0;
            total += price * qty;
        });
        // Atualiza o display do total e o valor do input da multa
        const formattedTotal = 'R$' + total.toFixed(2);
        document.querySelector('.total-display').textContent = 'Total: ' + formattedTotal;
        fineAmountInput.value = formattedTotal; // Atualiza o input da multa
    }

    // Anexa evento de input a todos os campos de quantidade da calculadora
    document.querySelectorAll('.item-qty').forEach(function(input) {
        input.addEventListener('input', calculateTotal);
    });

    // Alternar visibilidade da calculadora, animação e rolar para ela
    toggleFineButton.addEventListener('click', function() {
        // Verifica se a calculadora está oculta
        const isCalculatorHidden = calculator.classList.contains('hidden');

        if (isCalculatorHidden) {
            calculator.classList.remove('hidden'); // Mostra a calculadora
            calculator.classList.add('calculator-visible'); // Inicia a animação de fade-in
            // Rola até a calculadora após a animação iniciar
            setTimeout(() => {
                calculator.scrollIntoView({ behavior: 'smooth' });
            }, 10); 
        } else {
            calculator.classList.add('hidden'); // Esconde a calculadora
            calculator.classList.remove('calculator-visible'); // Remove a animação
        }
    });
});



