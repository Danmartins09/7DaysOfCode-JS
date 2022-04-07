function soma(numero1, numero2) {
  return Number(numero1) + Number(numero2);
}

function subtracao(numero1, numero2) {
    return Number(numero1) - Number(numero2);
}

function multiplicacao(numero1, numero2) {
    return Number(numero1) * Number(numero2);
}

function divisao(numero1, numero2) {
    return Number(numero1) / Number(numero2);
}

const operador = prompt(`Escolha uma opção de operação:
(1) Soma
(2) Subtração
(3) Multiplicação
(4) Divisão
(5) Sair`);
if(operador<5){
    const numero1 = prompt("Escolha o primeiro número:");
    const numero2 = prompt("Escolha o segundo número:");
    
    if(operador==1){
        alert(soma(numero1,numero2));
    }else if(operador==2){
        alert(subtracao(numero1,numero2)); 
    }else if(operador==3){
        alert(multiplicacao(numero1,numero2)); 
    }else{
        alert(divisao(numero1,numero2)); 
    } 

}else if(operador==5){
    alert("Até a próxima");
}else {
    alert("Opção inválida");
}
