const pessoas = 7;

const calcPossibilidades = (qtd) => {
  let combinacoes = 1;

  while(qtd > 0){
    combinacoes = combinacoes * qtd;
    qtd--;
  }

  console.log(`Os ${pessoas} amigos podem formar até ${combinacoes} combinações diferentes`);
}

calcPossibilidades(pessoas);
