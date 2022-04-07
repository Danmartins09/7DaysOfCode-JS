let arrayFrutas = [];
let arrayLaticinios = [];
let arrayCongelados = [];
let arrayDoces = [];

let verificador = true;

while ((verificador = true)) {
  let adicionarItem = prompt(
    `Deseja adicionar uma comida na sua lista de compras? sim ou nao
  Ou deseja remover um item da lista? remover`
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
  } else if (adicionarItem == "nao") {
    alert(
      `Sua lista de compra ficou assim:

        Frutas: ${arrayFrutas} 
        Laticínios: ${arrayLaticinios} 
        Congelados: ${arrayCongelados}
        Doces: ${arrayDoces}`
    );
    verificador = false;
    break;
  } else if (adicionarItem == "remover") {
    let remover = prompt(
      `Sua lista de compra ficou assim:

    Frutas: ${arrayFrutas} 
    Laticínios: ${arrayLaticinios} 
    Congelados: ${arrayCongelados}
    Doces: ${arrayDoces}
    
    Qual item da lista deseja remover?`
    );
    for (i = 0; i < arrayFrutas.length; i++) {
      if (remover == arrayFrutas[i]) {
        arrayFrutas.splice(i, 1);
      } else if (remover == arrayLaticinios[i]) {
        arrayLaticinios.splice(i, 1);
      } else if (remover == arrayCongelados[i]) {
        arrayCongelados.splice(i, 1);
      } else if (remover == arrayDoces[i]) {
        arrayDoces.splice(i, 1);
      }
    }
  } else {
    alert("Opção inválida");
  }
}
