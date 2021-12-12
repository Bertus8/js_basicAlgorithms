const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
    let longParam = param[0];
    for (let i = 0; i < param.length; i++) {
        if(param[i].length > longParam.length){
            longParam = param[i];
        }
    }
    console.log(longParam);
    return (longParam);
}

findLongestWord(avengers);