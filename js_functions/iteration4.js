const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  let sumAll = 0;
  for (let i = 0; i < param.length; i++) {
      sumAll += param[i];
      }
      console.log(sumAll/param.length);
      return (sumAll/param.length);
}

average(numbers);