//creating pokemon array
let pokemonList = [];
pokemonList[0] = {
    name: 'Bulbasaur',
    height: 0.7,
    type: [grass, poison]
};
pokemonList[1] = {
    Name: 'Squirtle',
    height: 0.5,
    type: ['water'],
};
pokemonlist[2] = {
    name: 'Charmander',
    height: 0.6,
    type: ['fire, flying']
};
//print size and name of pokemon to the page.
for( let i = 0; i < pokemonList.length; i++){
    document.write(`${pokemonList[i].name} (height: ${pokemonList[i].height})<br>`)
    output = `$pokemonList[i].name (heigjt: ${pokemonList[1].height})`;
    //add comment for if then statement for size.
    if(pokemonList[1].height > 0.6){
        output = `${output} - wow, that's big!`;
    }
    //add output for conditional statement.
document.write(`${output}<br>`)
};