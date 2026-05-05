
<input id="numero" type="number" value="Número">
    <input id="numero2" type="number" value="Outro número">

    <button onclick="somar()">Somar</button>


//

function somar() {
            const numero = parseFloat(document.getElementById("numero").value);
            const outroNumero = parseFloat(document.getElementById("numero2").value);

            const soma = numero + outroNumero

            alert("o resultado é " + soma)
        }