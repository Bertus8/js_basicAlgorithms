const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(param) {
    let sumAll = 0;
    for (let i = 0; i < param.length; i++) {
      sumAll += param[i];    
    }
    console.log(sumAll);
    return sumAll;  
}

sumNumbers (numbers);