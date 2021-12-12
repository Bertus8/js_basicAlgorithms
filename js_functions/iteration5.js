const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
    let sumAll = 0;
    for (let i = 0; i < param.length; i++) {
        if (typeof param[i] === Number){
            sumAll += param[i];
        }
        else if(typeof param[i] === "string"){
            sumAll += param[i].length;
        } 
    }
        console.log(sumAll/param.length);
        return (sumAll/param.length);
  }

averageWord(mixedElements);