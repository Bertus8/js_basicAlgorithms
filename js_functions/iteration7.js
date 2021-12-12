const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(param, value) {
    for (let i = 0; i < param.length; i++) {
       if (param[i] === value){
           console.log(i,true);
           return (i,true);
       }
    }
        console.log(false);
        return (false);
  }
  finderName (nameFinder, "Bruce");
  finderName (nameFinder, "Alberto");