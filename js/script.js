//creating pokemon array
et pokemonList = [];
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
    document.write(`${pokemonList[i].name} (height: ${pokemonList[i].height})`)
};