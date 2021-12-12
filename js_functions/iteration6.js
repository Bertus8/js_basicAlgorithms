const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(param) {
    let elements =[];
    for (let i = 0; i < param.length; i++) {
        if (!elements.includes(param[i])){
            elements.push(param[i]);
        }
    }
    console.log(elements);
    return elements;

  }
  removeDuplicates (duplicates);