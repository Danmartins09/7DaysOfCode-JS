let arrayFrutas = [];
let arrayLaticinios = [];
let arrayCongelados = [];
let arrayDoces = [];

let verificador = true;

while ((verificador = true)) {
  let adicionarItem = prompt(
    "Deseja adicionar uma comida na sua lista de compras? sim ou nao"
  );
  if (adicionarItem == "sim") {
    let produto = prompt("Qual comida você deseja inserir?");
    let categoria = prompt(
      "Em qual categoria essa comida se encaixa? (1)Frutas, (2)Laticínios, (3)Congelados, (4)Doces"
    );
    if (categoria == 1) {
      arrayFrutas.push(produto);
    } else if (categoria == 2) {
      arrayLaticinios.push(produto);
    } else if (categoria == 3) {
      arrayCongelados.push(produto);
    } else if (categoria == 4) {
      arrayDoces.push(produto);
    } else {
      alert("Categoria não cadastrada");
    }
  } else if((adicionarItem == "nao")) {
    alert(
        `Sua lista de compra ficou assim:

        Frutas: ${arrayFrutas} 
        Laticínios: ${arrayLaticinios} 
        Congelados: ${arrayCongelados}
        Doces: ${arrayDoces}`);
    verificador = false;
    break;
  } else{
      alert("Opção inválida")
  }
}
