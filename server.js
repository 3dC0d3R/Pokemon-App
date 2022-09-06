
/*
    GitHub commands
    --------------- 
1. Navigate to project directory!
2. git init  
  //Initialize the local directory as a Git  repository.
3. git add .
  //Adds the files in the local repository and stages them for commit. To unstage a file, use 'git reset HEAD YOUR-FILE'.
4. git commit -m 'Added my project'
  //Commits the tracked changes and prepares them to be pushed to a remote repository. To remove this commit and modify the file, use 'git reset --soft HEAD~1' and commit and add the file again.
5. git branch -M main
6. git remote add origin git@g3dC0d3R/m2w1d3_First_Express_HW.git
  //Sets the new remote
7. git remote -v 
  //Verifies the new remote URL
8. git push -u -f origin main
  //Pushes the changes in your local repository up to the remote repository you specified as the origin. The -f (or --force) flag stands for force. This will automatically overwrite everything in the remote directory.  
*/

//--------------^^^CONTROLLER^^^---------->
      //The following code belongs in server.js. -Rename this file, or Save As: 'server.js'

  // A. ---> Dependencies
  
    require('dotenv').config() 
    const express = require('express')
    const fs = require('fs')
    const mongoose = require("mongoose");
    const Pokemon = require('./models/Pokemon.js') 

  // B. ---> Create the Express app
    const app = express(); //app is an object. (see step 04.)

  
    // Global Configuration
    const PORT = process.env.PORT || 3000
    const MONGO_URI =process.env.MONGO_URI
    const db = mongoose.connection;
    
    // Connect to mongo
    mongoose.connect(process.env.MONGO_URI, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true
    });
   
    
    // Check MongoDB connection status 
    db.on("error", (err) => console.log(err.message + " is mongodb running?"));
    db.once('open', ()=> {
        console.log('connected to mongo');
    });
    db.on("close", () => console.log("mongo disconnected"));

  // D. ---> Create views engine  // (See step 10.)
    app.engine("jsx", require("express-react-views").createEngine()); 

  // E. ---> Configure the app (app.set)
    app.set("view engine", "jsx"); // (See D)

  // F. ---> Mount middleware (app.use)
    app.use(express.urlencoded({ extended: false }));
    
  // G. ---> Mount routes (app.get)
    
    // Home Route
    app.get('/', function(req, res){
      res.render('Home',{});
    });

    // Seed Route
    app.get('/pokemon/seed', (req, res)=>{
      Pokemon.create([
        {name: "bulbasaur", img: "https://img.pokemondb.net/artwork/large/bulbasaur.jpg"},
        {name: "ivysaur", img: "https://img.pokemondb.net/artwork/large/ivysaur.jpg"},
        {name: "venusaur", img: "https://img.pokemondb.net/artwork/large/venusaur.jpg"},
        {name: "charmander", img: "https://img.pokemondb.net/artwork/large/charmander.jpg"},
        {name: "charizard", img: "https://img.pokemondb.net/artwork/large/charizard.jpg"},
        {name: "squirtle", img: "https://img.pokemondb.net/artwork/large/squirtle.jpg"},
        {name: "wartortle", img: "https://img.pokemondb.net/artwork/large/wartortle.jpg"}
      ], (err, data)=>{
        res.redirect('/pokemon');
      })
    });

        // Seed Route
    app.get('/pokemon/seed', (req, res)=>{
      Pokemon.create([
        {name: "bulbasaur", img: "https://img.pokemondb.net/artwork/large/bulbasaur.jpg"},
        {name: "ivysaur", img: "https://img.pokemondb.net/artwork/large/ivysaur.jpg"},
        {name: "venusaur", img: "https://img.pokemondb.net/artwork/large/venusaur.jpg"},
        {name: "charmander", img: "https://img.pokemondb.net/artwork/large/charmander.jpg"},
        {name: "charizard", img: "https://img.pokemondb.net/artwork/large/charizard.jpg"},
        {name: "squirtle", img: "https://img.pokemondb.net/artwork/large/squirtle.jpg"},
        {name: "wartortle", img: "https://img.pokemondb.net/artwork/large/wartortle.jpg"}
      ], (err, data)=>{
        res.redirect('/pokemon');
      })
    });

    // Delete ALL Route
    app.get('/pokemon/deleteall', (req, res)=>{
      Pokemon.deleteMany({}, (err, data)=>{
        res.redirect('/pokemon');
      })
    });

    // NEW Route
    app.get('/pokemon/new', (req, res) => {
      res.render('New', {});
  });

    // Index Route
    app.get('/pokemon', (req, res)=>{
      Pokemon.find({}, (error, allPokemon)=>{
          res.render('Index', {
            pokemon: allPokemon
          });
      });
  });

    // Show Route
  app.get('/pokemon/:id', function(req, res){
     Pokemon.findById(req.params.id, (err, foundPokemon) =>{
        res.render('Show', {
          pokemon: foundPokemon
        })
     });
  });

  

    // Post Route
  app.post('/pokemon/', (req, res)=>{
    //res.send("Created NEW Pokemon");
    Pokemon.create(req.body, (error, createdPokemon) => {
      res.redirect('/pokemon'); //send the user back to /pokemon
      });
  });


  // H. ---> Listen on port defined in .env (See C.)
  app.listen(PORT, function() {
  console.log('Listening on port: ' + PORT);
  });