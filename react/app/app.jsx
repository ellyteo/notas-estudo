import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Exercicios from './pages/Exercicios'

function App() {

return (
<>

<Header />

<Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/exercicios" element={<Exercicios/>}/>
</Routes>


</>
)

}

export default App
