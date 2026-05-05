### ***React-router-dom:***

biblioteca popular em aplicações React que facilita a navegação entre diferentes páginas ou componentes sem recarregar a página inteira.

---
comando de criação:
```
npm i react-router-dom:
```

main.jsx↴

```visual-basic
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
```

app.jsx

```
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
```