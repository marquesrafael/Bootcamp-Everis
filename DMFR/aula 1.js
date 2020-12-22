const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 10,
        weight: 3
    },
    {
        name: 'miau',
        type: 'cat',
        age: 2,
        weight: 2
    },
    {
        name: 'gulp',
        type: 'fish',
        age: 1,
        weight: 1
    }
];

// const eMenorQueCinco = (numero) => {
//     return numero < 5;
// }

//const newPets = pets.filter((pet) => {
//    return eMenorQueCinco(pet.age);
//});

// Abreviado 
//const newPets = pets.filter((pet) => eMenorQueCinco(pet.age));

// Abreviado mais ainda 
// const newPets = pets.filter(({age}) => eMenorQueCinco(age));

// console.log(pets);
// console.log(newPets);

// MAP retorna um novo array com a mesma quantidade de elementos que o array inicial
// const petNames = pets.map((pet) => {
//     return pet.name
// });

// console.log(petNames);

// Reduce - somar
// const totalWeitght = pets.reduce((total, pet) => {
//     return {
//         totalAge: total.totalAge + pet.age,
//         totalWeight: total.totalWeight + pet.weight
//     };
// }, { totalAge: 0, totalWeight: 0})
// console.log(totalWeitght);

 // Desencadear
const totalWeitghtDogs = pets
    .filter((pet) => {
        return pet.type === 'dog';
    })

    .reduce((total, pet) => {
        return total + pet.weight;
    }, 0);

console.log(totalWeitghtDogs);
