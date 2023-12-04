
const genera = document.getElementById('generatesButton');

genera.addEventListener('click',function() {

    const nameInput = document.getElementById('namesurname');
    console.log('nameInput.value',nameInput.value,typeof nameInput.value);

    const kmInput = document.getElementById('distance')
    console.log('kmInput',kmInput.value,typeof kmInput.value)

    const bornInput = document.getElementById('born')
    console.log('bornInput',bornInput.value,typeof bornInput.value)
});


// const km = prompt ('quanti km vuoi percorrere')

// console.log('km',KilometriDaPercorrere)

// if (isNaN(KilometriDaPercorrere)) {
//     alert('Scrivi un Numero')
// }

// //Moneta

// const Moneta = ('€')

// //Prezzo

// let Prezzo = (0.21 * KilometriDaPercorrere)

// console.log('prezzo',Prezzo + Moneta)

// //Età

// const Age = prompt ('quanti anni hai')
// console.log('età',Age)

// //Calcolo finale


// if (isNaN(Age)) {
//     alert('Scrivi un Numero')
// }
// if(Age > 65){
//     Prezzo = (Prezzo * 0.6)
//     console.log('Per Vecchi',Prezzo)
// }
// if(Age < 18){
//     Prezzo = (Prezzo * 0.8)
//     console.log('Per Giovini',Prezzo)
// }

// //stamp su html
// const pricePrint = Prezzo.toFixed(2) + Moneta;
// document.getElementById ("prezzo-biglietto").innerHTML = pricePrint
