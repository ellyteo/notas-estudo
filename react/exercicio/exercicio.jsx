import { useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function Exercicios() {

    const [num1, setNum1] = useState()
    const [num2, setNum2] = useState()
    const [resultado, setResultado] = useState()

    function handleSubmit(e) {
        e.preventDefault();
        setResultado(Number(num1) + Number(num2))
    }

    return (
        <>

<Link to="/">
<button>Voltar para home</button>
</Link>

            <form onSubmit={handleSubmit}>

                <br />
                <label>digite um número</label>
                <input
                    type="number"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                />

                <br />
                <label>Digite outro número</label>
                <input
                    type="number"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                />

                <br />
                <p>{resultado}</p>

                <button type="submit">Somar</button>

            </form>

        </>
    )
}
export default Exercicios