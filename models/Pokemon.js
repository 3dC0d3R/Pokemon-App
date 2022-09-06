// const pokemon = [
//     {name: "bulbasaur", img: "https://img.pokemondb.net/artwork/large/bulbasaur.jpg"},
//     {name: "ivysaur", img: "https://img.pokemondb.net/artwork/large/ivysaur.jpg"},
//     {name: "venusaur", img: "https://img.pokemondb.net/artwork/large/venusaur.jpg"},
//     {name: "charmander", img: "https://img.pokemondb.net/artwork/large/charmander.jpg"},
//     {name: "charizard", img: "https://img.pokemondb.net/artwork/large/charizard.jpg"},
//     {name: "squirtle", img: "https://img.pokemondb.net/artwork/large/squirtle.jpg"},
//     {name: "wartortle", img: "https://img.pokemondb.net/artwork/large/wartortle.jpg"}
//  ];

//  module.exports = pokemon;

const mongoose = require('mongoose');

const PokeSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    img:  { type: String, required: true },
});

const Pokemon = mongoose.model('Pokemon', PokeSchema);

module.exports = Pokemon;