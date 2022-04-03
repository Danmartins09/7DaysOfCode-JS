// Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

// 1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

// 2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

// 3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

// 4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

const area = prompt("Desejas ser Dev Front(1) ou Back-end(2) ?");
if (area == 1) {
  const frontChoice1 = prompt("Quer aprender React(1) ou Vue(2) ?");
} else if (area == 2) {
  const backChoice1 = prompt("Quer aprender C#(1) ou Java(2) ?");
} else {
  alert("Opção inválida!");
}

const especializar = prompt(
  "Escolha entre seguir se especializando na área escolhida(1) ou seguir se desenvolvendo para se tornar Fullstack(2) ?"
);
if (especializar == 1) {
  alert("Que bom que queira continuar se especializando");
} else if (especializar == 2) {
  alert("Então seu desejo é ser um Dev Fullstack, bons estudos!");
} else {
  alert("Opção inválida!");
}

let techChoice = prompt(
  "Tem mais alguma tecnologia que você gostaria de aprender? SIM(1) NÃO(2)"
);
while (techChoice == 1) {
  const tech = prompt(
    "Quais são as tecnologias que gostaria desejas se especializar ou de conhecer?"
  );
  alert(`Que bom que escolheu ${tech}.`);
  techChoice = prompt(
    "Tem mais alguma tecnologia que você gostaria de aprender? SIM(1) NÃO(2)"
  );
}
