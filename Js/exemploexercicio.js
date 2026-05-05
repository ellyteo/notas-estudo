// Não uar ESPAÇO, ACENTO, Ç, @#$%¨&*!"
// const nomeCompleto
// const NomeCompleto
// const nome_completo

// Number - é uma função que tenta converter um valor passado para numero 
function exercicio1() {
    const numero = Number(prompt("digite um número:"))
    const outroNumero = Number(prompt("digite outro número:"))
    const resultado = (numero + outroNumero)
    alert(resultado)
}
const buttonExercicio1 = document.getElementById("exercicio1")
buttonExercicio1.addEventListener('click', () => { exercicio1() })
// colocar o + entre alguma coisa
// pedir os números

function exercicio2() {
    const valor = Number(prompt("Digite o valor que você ganha por horas:"))
    const horas = Number(prompt("Digite suas horas trabalhadas:"))
    const resultado = (valor * horas)
    alert(resultado)
}
const buttonExercicio2 = document.getElementById("exercicio2")
buttonExercicio2.addEventListener('click', () => { exercicio2() })

function exercicio3() {
    const peso1 = Number(prompt("Digite o peso da primeira pessoa:"))
    const peso2 = Number(prompt("Digite o peso da segunda pessoa:"))
    const peso3 = Number(prompt("Digite o peso da terceira pessoa:"))
    const peso4 = Number(prompt("Digite o peso da quarta pessoa:"))
    const peso5 = Number(prompt("Digite o peso da quinta pessoa:"))
    const resultado = ((peso1 + peso2 + peso3 + peso4 + peso5) / 5)
    alert(resultado)
}
const buttonExercicio3 = document.getElementById("exercicio3")
buttonExercicio3.addEventListener('click', () => { exercicio3() })

function exercicio4() {
    const celcius = Number(prompt("Digite a temperatura em graus Celcius:"))
    const resultado = ((9 * (celcius) + 160) / 5)
    alert(resultado)
}
const buttonExercicio4 = document.getElementById("exercicio4")
buttonExercicio4.addEventListener('click', () => { exercicio4() })

function exercicio5() {
    const milhas = Number(prompt("Digite a distância em milhas:"))
    const resultado = ((milhas) * 1.60934)
    alert(resultado)
}
const buttonExercicio5 = document.getElementById("exercicio5")
buttonExercicio5.addEventListener('click', () => { exercicio5() })

function exercicio6() {
    const segundo = Number(prompt("Digite a duração do evento em segundos:"))
    const resultadoSeg = 1 / segundo
    alert(resultadoSeg)
    const resultadoMin = resultadoSeg / 60
    alert(resultadoMin)
    const resultadoHr = resultadoMin / 60
    alert(resultadoHr)
}
const buttonExercicio6 = document.getElementById("exercicio6")
buttonExercicio6.addEventListener('click', () => { exercicio6() })

function exercicio7() {
    const km = Number(prompt("Digite a distância em quilômetros:"))
    const resultado1 = (km * 1000)
    alert(resultado1)
    const resultado2 = (km * 100000)
    alert(resultado2)
}
const buttonExercicio7 = document.getElementById("exercicio7")
buttonExercicio7.addEventListener('click', () => { exercicio7() })

function exercicio8() {
    const numero = Number(prompt("Digite um número inteiro:"))
    alert(numero * 0)
    alert(numero * 1)
    alert(numero * 2)
    alert(numero * 3)
    alert(numero * 4)
    alert(numero * 5)
    alert(numero * 6)
    alert(numero * 7)
    alert(numero * 8)
    alert(numero * 9)
    alert(numero * 10)
}
const buttonExercicio8 = document.getElementById("exercicio8")
buttonExercicio8.addEventListener('click', () => { exercicio8() })

function desafio0() {
    const anos = Number(prompt("Digite sua idade:"))
    const meses = (anos * 12)
    alert(meses)
    const dias = (anos * 365)
    alert(dias)
}
const buttonDesafio0 = document.getElementById("desafio0")
buttonDesafio0.addEventListener('click', () => { desafio0() })

function exercicio9() {
    const nota1 = Number(prompt("Digite a primeira nota:"))
    const nota2 = Number(prompt("Digite a segunda nota:"))
    const nota3 = Number(prompt("Digite a terceira nota:"))

    const media = (nota1 + nota2 + nota3) / 3
    console.log(media) // aparecerá na aba f12 em "console"

    if (media < 5) {
        alert("Reprovado.")
    } else if (media >= 5 && media < 7) {
        alert("Recuperação!")
    } else if (media <= 10) {
        alert("Aprovado!")
    } else {
        alert("Essa nota não existe!")
    }
}
const buttonExercicio9 = document.getElementById("exercicio9")
buttonExercicio9.addEventListener('click', () => { exercicio9() })

function exercicio10() {
    const sexo = prompt("Digite de acordo com seu sexo. H- Homem ou M- Mulher:")
    const altura = Number(prompt("Digite sua altura. Exemplo: 1.70"))

    if (sexo == "H") {
        const resultadoH = (72.7 * altura) - 58
        alert("Seu peso ideal é: " + resultadoH)
    } else if (sexo == "M") {
        const resultadoM = (62.1 * altura) - 44.7
        alert("Seu peso ideal é: " + resultadoM)
    }
}
const buttonExercicio10 = document.getElementById("exercicio10")
buttonExercicio10.addEventListener('click', () => { exercicio10() })

function exercicio11() {
    const numero = Number(prompt("Digite um número:"))
    const outroNumero = Number(prompt("Digite outro número:"))
    const funcao = prompt("Digite a função que voê de seja executar:")

    if (funcao == "+") {
        const resultadoSoma = numero + outroNumero
        alert("O resultado da soma é: " + resultadoSoma)
    } else if (funcao == "-") {
        const resultadoSubtracao = (numero - outroNumero)
        alert("O resultado da subtração é: " + resultadoSubtracao)
    } else if (funcao == "*") {
        const resultadoMultiplicacao = (numero * outroNumero)
        alert("O resultado da multiplicação é: " + resultadoMultiplicacao)
    } else if (funcao == "/") {
        const resultadoDivisao = (numero / outroNumero)
        alert("O resultado da divisão é: " + resultadoDivisao)
    }
}
const buttonExercicio11 = document.getElementById("exercicio11")
buttonExercicio11.addEventListener('click', () => { exercicio11() })

function exercicio12() {
    const numero = Number(prompt("Digite um número:"))

    if (numero >= 0 ) {
        alert(numero + " é positivo.")
    } else if (numero < 0 ) {
        alert( numero + " é negativo.")
    }
}
const buttonExercicio12 = document.getElementById("exercicio12")
buttonExercicio12.addEventListener('click', () => { exercicio12()})

function exercicio13() {
    const numero = Number(prompt("Digite um número:"))

    if (numero % 2 === 0) {
        alert("Este número é par.")
    } else {
        alert("Este número é ímpar.")
    }

}
const buttonExercicio13 = document.getElementById("exercicio13")
buttonExercicio13.addEventListener('click', () => { exercicio13() })

function exercicio14() {
    const numero = Number(prompt("Digite um número:"))
    const outroNumero = Number(prompt("Digite outro número:"))

    if (numero == outroNumero) {
        alert("Esses números são iguais.")
    } else if (numero > outroNumero) {
        alert(numero + " é maior que " + outroNumero + ".")
    } else if (numero < outroNumero) {
        alert(numero + " é menor que " + outroNumero + ".")
    }

}
const buttonExercicio14 = document.getElementById("exercicio14")
buttonExercicio14.addEventListener('click', () => { exercicio14() })
// Esta é a número "15"

function exercicio15() {
    const numero = Number(prompt("Digite um número:"))
    const outroNumero = Number(prompt("Digite outro número:"))
    const maisumNúmero = Number(prompt("Digite mais um número:"))

    const area = (numero + outroNumero + maisumNúmero) / 2
    alert("a área do triângulo é " + area )

}
const buttonExercicio15 = document.getElementById("exercicio15")
buttonExercicio15.addEventListener('click', () => { exercicio15() })

