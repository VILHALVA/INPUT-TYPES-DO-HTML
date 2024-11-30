# MINICURSO
## INTRODUÇÃO:
Os **inputs** HTML são elementos fundamentais em formulários, permitindo a coleta de dados dos usuários. Cada tipo de input tem uma função específica e oferece diferentes formas de interação. O HTML5 introduziu uma variedade de tipos de inputs, proporcionando uma melhor experiência para o usuário e uma validação mais eficiente no lado do cliente.

## EXEMPLOS DE INPUTS:
1. **Texto (`<input type="text">`)**
   - **Descrição**: Este é o tipo mais comum de input. Permite ao usuário digitar texto livre.
   - **Uso**: Para campos como nome, endereço ou qualquer outro dado textual.
   - **Exemplo**:
     ```html
     <label for="textInput">Nome:</label>
     <input type="text" id="textInput" name="textInput" placeholder="Digite seu nome" required>
     ```

2. **E-mail (`<input type="email">`)**
   - **Descrição**: Este input é projetado para aceitar endereços de e-mail. Quando o usuário tenta enviar um formulário com um valor inválido (por exemplo, sem o caractere "@" ou sem domínio), o navegador exibe um erro.
   - **Validação**: O navegador valida o e-mail para garantir que ele siga o formato padrão de e-mail (ex: user@example.com).
   - **Exemplo**:
     ```html
     <label for="emailInput">E-mail:</label>
     <input type="email" id="emailInput" name="emailInput" placeholder="Digite seu e-mail" required>
     ```

3. **Senha (`<input type="password">`)**
   - **Descrição**: Permite ao usuário digitar uma senha. O texto inserido é mascarado para proteção.
   - **Uso**: Ideal para campos onde é necessário esconder o conteúdo, como senhas ou códigos PIN.
   - **Exemplo**:
     ```html
     <label for="passwordInput">Senha:</label>
     <input type="password" id="passwordInput" name="passwordInput" placeholder="Digite sua senha" required>
     ```

4. **Número (`<input type="number">`)**
   - **Descrição**: Este tipo permite que o usuário insira apenas números, com validação para garantir que o valor inserido seja numérico.
   - **Uso**: Ideal para campos que requerem números inteiros ou decimais, como idades, quantidades, etc.
   - **Exemplo**:
     ```html
     <label for="numberInput">Idade:</label>
     <input type="number" id="numberInput" name="numberInput" placeholder="Digite sua idade" required>
     ```

5. **URL (`<input type="url">`)**
   - **Descrição**: Permite ao usuário inserir uma URL. O navegador valida se o valor inserido corresponde ao formato de URL válido.
   - **Validação**: O valor inserido deve começar com "http://" ou "https://".
   - **Exemplo**:
     ```html
     <label for="urlInput">URL:</label>
     <input type="url" id="urlInput" name="urlInput" placeholder="Digite uma URL" required>
     ```

6. **Telefone (`<input type="tel">`)**
   - **Descrição**: Este tipo é destinado a números de telefone. Embora o HTML não forneça uma validação estrita, ele ajuda os navegadores a apresentar um teclado otimizado para entrada de números de telefone em dispositivos móveis.
   - **Uso**: Usado para números de telefone ou outros dados que sigam um formato específico.
   - **Exemplo**:
     ```html
     <label for="telInput">Telefone:</label>
     <input type="tel" id="telInput" name="telInput" placeholder="Digite seu telefone" required>
     ```

7. **Data (`<input type="date">`)**
   - **Descrição**: Este campo permite que o usuário selecione uma data, com um seletor de data embutido (geralmente no formato AAAA-MM-DD).
   - **Uso**: Para selecionar datas em campos como "Data de Nascimento", "Data de Início", etc.
   - **Exemplo**:
     ```html
     <label for="dateInput">Data de Nascimento:</label>
     <input type="date" id="dateInput" name="dateInput" required>
     ```

8. **Hora (`<input type="time">`)**
   - **Descrição**: Permite que o usuário selecione uma hora, com o formato de 24 horas (HH:MM).
   - **Uso**: Ideal para campos que requerem um horário específico, como "Horário de início" ou "Hora de chegada".
   - **Exemplo**:
     ```html
     <label for="timeInput">Hora:</label>
     <input type="time" id="timeInput" name="timeInput" required>
     ```

9. **Checkboxes (`<input type="checkbox">`)**
   - **Descrição**: Permite ao usuário selecionar uma ou mais opções de uma lista. Cada checkbox pode ser marcado ou desmarcado.
   - **Uso**: Quando você precisa de uma escolha binária ou múltipla (sim/não, opções de seleção).
   - **Exemplo**:
     ```html
     <label>Escolha suas preferências:</label>
     <input type="checkbox" id="checkbox1" name="preferences" value="A">
     <label for="checkbox1">Opção A</label>
     <input type="checkbox" id="checkbox2" name="preferences" value="B">
     <label for="checkbox2">Opção B</label>
     ```

10. **Radio Buttons (`<input type="radio">`)**
   - **Descrição**: Semelhante aos checkboxes, mas permite ao usuário selecionar apenas uma opção de um grupo.
   - **Uso**: Quando você deseja que o usuário escolha apenas uma opção entre várias.
   - **Exemplo**:
     ```html
     <label>Escolha uma opção:</label>
     <input type="radio" id="radio1" name="options" value="A">
     <label for="radio1">Opção A</label>
     <input type="radio" id="radio2" name="options" value="B">
     <label for="radio2">Opção B</label>
     ```

11. **Busca (`<input type="search">`)**
   - **Descrição**: Este tipo é otimizado para campos de busca. Ele geralmente fornece um campo de pesquisa com um ícone de lupa embutido, dependendo do navegador.
   - **Uso**: Para campos onde o usuário deseja procurar algo, como uma pesquisa em um site.
   - **Exemplo**:
     ```html
     <label for="searchInput">Buscar:</label>
     <input type="search" id="searchInput" name="searchInput" placeholder="Digite sua pesquisa">
     ```

12. **Cor (`<input type="color">`)**
   - **Descrição**: Permite que o usuário selecione uma cor, exibindo uma paleta de cores ou um seletor de cores nativo do navegador.
   - **Uso**: Usado para permitir que o usuário escolha uma cor, como em um editor de imagem ou personalização de tema.
   - **Exemplo**:
     ```html
     <label for="colorInput">Escolha uma cor:</label>
     <input type="color" id="colorInput" name="colorInput">
     ```

13. **Faixa (`<input type="range">`)**
   - **Descrição**: Permite ao usuário selecionar um valor dentro de uma faixa definida por um intervalo (mínimo, máximo e passo).
   - **Uso**: Ideal para configurações de volume, brilho, ou qualquer valor contínuo que precise de um controle deslizante.
   - **Exemplo**:
     ```html
     <label for="rangeInput">Ajuste o volume:</label>
     <input type="range" id="rangeInput" name="rangeInput" min="0" max="100" step="1">
     ```

14. **Arquivo (`<input type="file">`)**
   - **Descrição**: Permite que o usuário envie arquivos de seu dispositivo. O campo pode ser configurado para aceitar tipos específicos de arquivo (imagem, vídeo, etc.).
   - **Uso**: Para permitir o upload de arquivos, como fotos ou documentos.
   - **Exemplo**:
     ```html
     <label for="fileInput">Escolha um arquivo:</label>
     <input type="file" id="fileInput" name="fileInput" accept="image/*">
     ```

## CONCLUSÃO:
Esses **inputs** HTML5 oferecem uma maneira fácil de criar formulários mais acessíveis, dinâmicos e intuitivos. Eles ajudam a validar os dados no lado do cliente, o que melhora a experiência do usuário e reduz o esforço do lado do servidor. Cada tipo de input é ideal para uma situação específica, e usá-los corretamente pode aumentar a eficácia dos seus formulários.