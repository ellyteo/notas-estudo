# Funções JS
---

(02/03/26)
---

- Interatividade e dinamismo
- Manipulação do **DOM** (Document Object Model)→ representação estrutural do documento HTML, facilita navegação)
- Validação de formulários
- Comunicação assíncrona (espera por uma resposta)

---
```jsx
getElementByld
```

função: Retorna uma referência ao elemento pelo seu ID

uso principal: selecionar elementos unicos em uma página para manipulação 

---

```jsx
.addEventListener('',() => {})
```

um conteudo→ main

dois ou mais→ section

href += src

// function // getElementById // addEventListener

EXEMPLO DE QUESTÃO

```js
function questao1() {

    // ESCREVE O ENUNCIADO AQUI
    // SOME 2 NÚMEROS
    
    const numero = Number(prompt("Digite um número:"))
    const Outronumero = Number(prompt("Digite outro número:"))
    alert(numero+Outronumero)
}
const buttonquestao1 = document.getElementById("questao1")
buttonquestao1.addEventListener('click', () => { questao1() })
```