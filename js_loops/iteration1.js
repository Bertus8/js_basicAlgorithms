const products = [
    'Camiseta de Pokemon',
     'Pantalón coquinero',
      'Gorra de gansta',
       'Camiseta de Basket',
        'Cinrurón de Orión',
         'AC/DC Camiseta']

function productsIncludeCamiseta(){
    for (let i = 0; i < products.length; i++) {
        if(products[i].includes('Camiseta')){
        console.log(products[i]);
        }
    }
}

productsIncludeCamiseta();