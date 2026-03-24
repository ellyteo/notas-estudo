function exercicio16() {
  const cpf = Number(prompt("Digite seu CPF:"));
  const dependentes = Number(
    prompt("Digite o número de dependentes: (incluindo você)"),
  );

  if (dependentes === 1) {
    const dp1 = Number(prompt("Digite a sua renda mensal:"));
    const imposto = (dp1 * 5) / 100;
    alert("O imposto de renda é igual a " + imposto);
  }
}
const buttonexercicio16 = document.getElementById("exercicio16");
buttonexercicio16.addEventListener("click", () => {
  exercicio16();
});

function desafio4() {
  const ano = Number(prompt("Digite um ano:"));

  if (ano % 4 === 0 && ano % 100 !== 0) {
    alert("Este ano é bissexto.");
  } else {
    alert("Este ano não é bissexto.");
  }
}
const buttondesafio4 = document.getElementById("desafio4");
buttondesafio4.addEventListener("click", () => {
  desafio4();
});
