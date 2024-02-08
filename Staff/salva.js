document.addEventListener('DOMContentLoaded', function() {
    setCurrentDate();

    const saveReportButton = document.getElementById('saveReportButton');
    const clearReportsButton = document.getElementById('clearReportsButton');
    const reportList = document.getElementById('reportList');
    const calculatorItems = document.querySelectorAll('.item-qty');

    saveReportButton.addEventListener('click', function() {
        const reportData = gatherFormData();
        saveReport(reportData);
        setCurrentDate(); 
        updateReportList();
    });

    clearReportsButton.addEventListener('click', function() {
        if (confirm('Tem certeza que deseja limpar todos os relatórios salvos?')) {
            clearAllReports();
            updateReportList();
        }
    });



    function gatherFormData() {
        const itemQuantities = {};
        calculatorItems.forEach(item => {
            if (item.value) { 
                itemQuantities[item.id] = item.value;
            }
        });

        return {
            resolvedByID: document.getElementById('resolvedByID').value,
            resolvedDate: document.getElementById('resolvedDate').value,
            complainantDiscordID: document.getElementById('complainantDiscordID').value,
            complainantGameID: document.getElementById('complainantGameID').value,
            accusedDiscordID: document.getElementById('accusedDiscordID').value,
            accusedGameID: document.getElementById('accusedGameID').value,
            judgment: document.getElementById('judgment').value,
            reason: document.getElementById('reason').value,
            tagID: document.getElementById('tagID').value,
            evidence: document.getElementById('evidence').value,
            pendency: document.getElementById('pendency').value,
            fineAmount: document.getElementById('fineAmount').value,
            
            // Itens da calculadora
            itemQuantities: itemQuantities,
            total: document.getElementById('total').textContent 
        };
    }

    function saveReport(reportData) {
        const reportKey = 'report_' + new Date().getTime();
        localStorage.setItem(reportKey, JSON.stringify(reportData));
        clearForm();
    }

    function clearForm() {
        document.getElementById('caseForm').reset();
        calculatorItems.forEach(item => item.value = ''); 
        document.getElementById('total').textContent = 'Total: R$'; 
    }
    function loadReport(key) {
        const reportData = JSON.parse(localStorage.getItem(key));
        if (reportData) {
            document.getElementById('resolvedByID').value = reportData.resolvedByID;
            document.getElementById('resolvedDate').value = reportData.resolvedDate;
            document.getElementById('complainantDiscordID').value = reportData.complainantDiscordID;
            document.getElementById('complainantGameID').value = reportData.complainantGameID;
            document.getElementById('accusedDiscordID').value = reportData.accusedDiscordID;
            document.getElementById('accusedGameID').value = reportData.accusedGameID;
            document.getElementById('judgment').value = reportData.judgment;
            document.getElementById('reason').value = reportData.reason;
            document.getElementById('tagID').value = reportData.tagID;
            document.getElementById('evidence').value = reportData.evidence;
            document.getElementById('pendency').value = reportData.pendency;
            document.getElementById('fineAmount').value = reportData.fineAmount;
           

            
            for (const [itemId, value] of Object.entries(reportData.itemQuantities)) {
                const item = document.getElementById(itemId);
                if (item) {
                    item.value = value;
                }
            }
            
            const fineAmount = document.getElementById('fineAmount');
            const fineField = document.getElementById('fineField');
            if (reportData.fineAmount && reportData.fineAmount.trim() !== '') {
                fineAmount.value = reportData.fineAmount;
                fineField.style.display = 'flex'; 
            } else {
                fineField.style.display = 'none';
            }
    
            const pendency = document.getElementById('pendency');
            const pendencyField = document.getElementById('pendencyField');
            if (reportData.pendency && reportData.pendency.trim() !== '') {
                pendency.value = reportData.pendency;
                pendencyField.style.display = 'Flex'; 
            } else {
                pendencyField.style.display = 'none';
            }
    
            const calculator = document.getElementById('calculator');
            if (reportData.itemQuantities && Object.keys(reportData.itemQuantities).length > 0) {
                calculator.style.display = 'Flex'; 
            } else {
                calculator.style.display = 'none';
            }

        
        }
    }



    function updateReportList() {
        reportList.innerHTML = '';
        let ticketCount = 1; 
        const brazilTimeOptions = {
            timeZone: 'America/Sao_Paulo',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        };
        
        Object.keys(localStorage).sort().forEach(function(key) {
            if (key.startsWith('report_')) {
                const reportData = JSON.parse(localStorage.getItem(key));
                const dateTime = new Date(parseInt(key.split('_')[1])).toLocaleString('pt-BR', brazilTimeOptions);
                const listItem = document.createElement('li');
    
                const editableSpan = document.createElement('span'); 
                editableSpan.textContent = 'Ticket ' + ticketCount;
                editableSpan.style.cursor = 'pointer'; 
                editableSpan.onclick = function(event) {
                    event.stopPropagation(); 
                    editTicketName(editableSpan);
                };
    
                const dateTimeSpan = document.createElement('span'); 
                dateTimeSpan.textContent = ' Data: ' + dateTime;
                
                listItem.appendChild(editableSpan);
                listItem.appendChild(dateTimeSpan);
    
                listItem.setAttribute('data-key', key);
                listItem.onclick = function() {
                    loadReport(key);
                };
    
                reportList.appendChild(listItem);
                ticketCount++;
            }
        });
    }
    
    function editTicketName(editableElement) {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = editableElement.textContent;
        editableElement.parentNode.replaceChild(input, editableElement);
    
        input.focus();
    
        input.addEventListener('blur', function() {
            editableElement.textContent = input.value;
            input.parentNode.replaceChild(editableElement, input);
           
        });
    
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                input.blur();
            }
        });
    }


    
   
    function clearAllReports() {
        Object.keys(localStorage).forEach(function(key) {
            if (key.startsWith('report_')) {
                localStorage.removeItem(key);
            }
        });
        window.location.reload();
    }

    updateReportList(); 
    
});


closeSections();

const saveReportButton = document.getElementById('saveReportButton');
const clearReportsButton = document.getElementById('clearReportsButton');
const reportList = document.getElementById('reportList');
const calculatorItems = document.querySelectorAll('.item-qty');

saveReportButton.addEventListener('click', function() {
   
   
    closeSections(); 
});

clearReportsButton.addEventListener('click', function() {
   
});

function closeSections() {
    // Esconde as seções 'Multa', 'Itens' e a calculadora
    document.getElementById('fineField').style.display = 'none';
    document.getElementById('pendencyField').style.display = 'none';
    document.getElementById('calculator').style.display = 'none';
}



