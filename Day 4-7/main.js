// Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

// Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

// No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

// Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.

let adivinhar = Math.floor(Math.random() * (10 - 0 + 1) + 0);

for (i = 3; i > 0; i--) {
var escolhido = prompt(`Tente acertar o número de 0 a 10, você tem ${i} tentativas: `);
  if (escolhido == adivinhar) {
      alert("Parabéns você acertou o número escolhido");
      break;
    }
    alert("Você errou");  
}

if (escolhido != adivinhar) {
  alert(`Infelizmente você não adivinhou. O número escolhido era ${adivinhar}`);
}


