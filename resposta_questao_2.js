const input = [4,5,44,98,4,5,6,7]

const isDuplicated = (vetor) => {
  let duplicados = [];
  duplicados = vetor.filter((item, index) => {
    return vetor.indexOf(item) !== index
  })
  
  console.log(duplicados)
}

isDuplicated(input);