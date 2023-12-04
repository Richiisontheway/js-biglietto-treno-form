
const genera = document.getElementById('generatesButton');

genera.addEventListener('click',function() {

    const nameInput = document.getElementById('namesurname');
    console.log('nameInput.value',nameInput.value,typeof nameInput.value);

    const kmInput = parseInt(document.getElementById('distance').value);
    console.log('kmInput',kmInput,typeof kmInput)

    const bornInput = parseInt(document.getElementById('born').value)
    console.log('bornInput',bornInput,typeof bornInput)

    let priceKm = ('0.21')

    let price = (priceKm * kmInput)
    console.log('price',price,typeof price)

    let age
    let currentTime = ('2023')
    age = (currentTime - bornInput)
    console.log('age',age,typeof age)

    if (age < 18){
        price = (price * 0.8)
        console.log('Prezzo Minorenni',price,typeof price)
    }
    if (age > 65){
        price = (price * 0.6)
        console.log('Prezzo Over 65',price,typeof price)
    }

    let moneta = ('€');
    
    const nation = document.getElementById('nation').value;
    if(nation === 'asian'){

        moneta = ('yen')
        price = (price * 158.94)
        console.log('yen',price,typeof price)
    }
    else if(nation === 'americian'){

        moneta = ('$')
        price = (price * 1.08)
        console.log('$',price,typeof price)
    }

    const pricePrint = price.toFixed(2) + moneta;
    document.getElementById('final-Price').innerHTML = pricePrint;
    
});
