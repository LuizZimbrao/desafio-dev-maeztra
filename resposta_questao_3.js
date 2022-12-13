function verificaSequenciaValida (value) {
  const list = [];
  let lastChar = '';

  [...value].forEach(element => {
    lastChar = list[list.length - 1]
    switch (element) {

      case ')':
        if (lastChar === '(') {list.pop()}
        break;

      case '}':
        if (lastChar === '{') {list.pop()}
        break;

      case ']':
        if (lastChar === '[') {list.pop()}
        break;

      default:
        list.push(element);
        break;
    }
  });

  return !(list.length > 0);
}

console.log(verificaSequenciaValida('(){}'))