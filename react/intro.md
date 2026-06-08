# Introdução a React

(20/03/26)

***O QUE É?***
biblioteca JS para construir interfaces de usuário;
desenvolvido pelo facebook;
facilita a criação de componentes reutilizáveis;
usa uma abordagem declarativa para criar interfaces.

---

***PARA OQ SERVE?***

- COMPONENTIZAÇÃO→ facilita a manutenção e reutilização de código
- DESEMPENHO
- COMUNIDADE

---

```html
npm --version
```

***COMANDO PARA INICIAR UM PROJETO:***

```html
npm create vite@latest .
```

```html
1° abrir um terminal
2° mudar para o git bash
3° comando-
npm run dev
4° comando para recarregar em outro dispositivo-
npm i
5° clicar "Ctrl"+o link
```

### ***CRIANDO:***

publics→ imgs e funções para o projeto inteiro

src→ todo o resto (=

assets→ imgs e funções (mais otimizada que a publics)
app.css→ estilo do app.jsx
app.jsx→ componente principal
index.css→ estilo de todo o projeto
main.jsx→ renderizar o DOM

components→ pasta para qualquer elemento (todos files devem se iniciar com letra maiúscula | todo componente tem suas propriedades | Os **componentes** são a base do React, permitindo criar elementos de interface de usuário (UI) reutilizáveis e independentes. Eles podem ser definidos como **funções** ou **classes**.)

→ *Obrigado em todos “.jsx”*

```html
import './style.css'

function Header() {
    return (
        
    )
}
export default Header
```
---

