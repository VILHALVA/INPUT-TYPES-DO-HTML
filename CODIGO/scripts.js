document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('input');
    const feedbacks = {
        textInput: document.getElementById('feedbackText'),
        emailInput: document.getElementById('feedbackEmail'),
        passwordInput: document.getElementById('feedbackPassword'),
        numberInput: document.getElementById('feedbackNumber'),
        urlInput: document.getElementById('feedbackURL'),
        telInput: document.getElementById('feedbackTel'),
        dateInput: document.getElementById('feedbackDate'),
        colorInput: document.getElementById('feedbackColor'),
        rangeInput: document.getElementById('feedbackRange'),
        fileInput: document.getElementById('feedbackFile'),
        checkboxGroup: document.getElementById('feedbackCheckbox'),
        radioGroup: document.getElementById('feedbackRadio'),
        colorInputElement: document.getElementById('colorInput'),
        colorDisplay: document.getElementById('colorDisplay')
    };

    inputs.forEach(input => {
        input.addEventListener('input', (e) => {
            const id = e.target.id;
            const value = e.target.value;

            switch (id) {
                case 'textInput':
                    feedbacks.textInput.textContent = value.length === 0 ? 'Campo de texto vazio.' : '';
                    break;
                case 'emailInput':
                    feedbacks.emailInput.textContent = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'E-mail inválido.';
                    break;
                case 'passwordInput':
                    feedbacks.passwordInput.textContent = value.length < 6 ? 'A senha deve ter no mínimo 6 caracteres.' : '';
                    break;
                case 'numberInput':
                    feedbacks.numberInput.textContent = isNaN(value) ? 'Por favor, insira um número válido.' : '';
                    break;
                case 'urlInput':
                    feedbacks.urlInput.textContent = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(value) ? '' : 'URL inválida.';
                    break;
                case 'telInput':
                    feedbacks.telInput.textContent = /^\d{10,11}$/.test(value) ? '' : 'Número de telefone inválido.';
                    break;
                case 'dateInput':
                    feedbacks.dateInput.textContent = value === '' ? 'Selecione uma data.' : '';
                    break;
                case 'colorInput':
                    feedbacks.colorInput.textContent = value === '' ? 'Escolha uma cor.' : '';
                    break;
                case 'rangeInput':
                    feedbacks.rangeInput.textContent = `Valor: ${value}`;
                    break;
                case 'fileInput':
                    feedbacks.fileInput.textContent = value === '' ? 'Nenhum arquivo selecionado.' : 'Arquivo selecionado.';
                    break;
            }
        });
    });

    feedbacks.colorInputElement.addEventListener('input', function () {
        const selectedColor = feedbacks.colorInputElement.value;
        feedbacks.colorDisplay.style.backgroundColor = selectedColor;
    });

    feedbacks.colorDisplay.addEventListener('click', function () {
        feedbacks.colorInputElement.click(); 
    });

    const checkboxes = document.querySelectorAll('input[name="checkboxGroup"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const selectedCheckboxes = Array.from(checkboxes)
                .filter(checkbox => checkbox.checked)
                .map(checkbox => checkbox.value);
            feedbacks.checkboxGroup.textContent = selectedCheckboxes.length
                ? `Selecionado(s): ${selectedCheckboxes.join(', ')}`
                : 'Nenhuma opção selecionada.';
        });
    });

    const radios = document.querySelectorAll('input[name="radioGroup"]');
    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            const selectedRadio = Array.from(radios).find(radio => radio.checked);
            feedbacks.radioGroup.textContent = selectedRadio
                ? `Selecionado: ${selectedRadio.value}`
                : 'Nenhuma opção selecionada.';
        });
    });
});
