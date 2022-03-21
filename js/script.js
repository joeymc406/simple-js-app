//creating pokemon array
let pokemonList = [
    {
        name: 'Bulbasaur',
        height: 0.7,
        type: ['grass', 'poison']
    },
    {
        name: 'Squirtle',
        height: 0.5,
        type: ['water'],
    },
    {
    name: 'Charmander',
    height: 0.6,
    type: ['fire', 'flying']
    }
];

//print size and name of pokemon to the page.

for( let i = 0; i < pokemonList.length; i++){
    output = `{$pokemonList[i].name} (height: ${pokemonList[1].height})`;

    //add comment for if then statement for size.

    if(pokemonList[1].height > 0.6){
        output = `${output} - wow, that's big!`;
    }
    //add output for conditional statement.

    document.write(`${output}<br>`)
};