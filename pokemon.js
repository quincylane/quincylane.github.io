/**
 * Pokemon HTML5 canvas game
 * @version 1.0.0
 * @author Panagiotis Vourtsis <vourtsis_pan@hotmail.com>
 */

 // SECTION 1: Variable Initialization

class Pokemon {
  constructor(name, image_name, move1, move2, move3, move4, evolution, hp) {    
    this.name = name;


    this.tinyimage = new Image();
    this.tinyimage.src = image_name.slice(0, 7) + "tiny/" + image_name.slice(7);

    this.image = new Image();
    this.image.src = image_name.slice(0, 7) + "med/" + image_name.slice(7);

    this.largeimage = new Image();
    this.largeimage.src = image_name.slice(0, 7) + "large/" + image_name.slice(7);

    this.move1 = move1;
    this.move2 = move2;
    this.move3 = move3;
    this.move4 = move4;
    this.evolution = evolution;
    this.hp = hp;
    this.exp = 0;
  }
}


// Buttons to Keyboard Strokes

function moveenter() {
  var evt = new KeyboardEvent('keydown', {'keyCode':13, 'which':13}); 
  document.dispatchEvent (evt); 
}


function moveleft() {
  var evt = new KeyboardEvent('keydown', {'keyCode':37, 'which':37}); 
  document.dispatchEvent (evt); 
}

function moveup() {
  var evt = new KeyboardEvent('keydown', {'keyCode':38, 'which':38}); 
  document.dispatchEvent (evt); 
}


function moveright() {
  var evt = new KeyboardEvent('keydown', {'keyCode':39, 'which':39}); 
  document.dispatchEvent (evt); 
}

function movedown() {
  var evt = new KeyboardEvent('keydown', {'keyCode':40, 'which':40}); 
  document.dispatchEvent (evt); 
}

function move1() {
  var evt = new KeyboardEvent('keydown', {'keyCode':49, 'which':49}); 
  document.dispatchEvent (evt); 
}

function move2() {
  var evt = new KeyboardEvent('keydown', {'keyCode':50, 'which':50}); 
  document.dispatchEvent (evt); 
}

function move3() {
  var evt = new KeyboardEvent('keydown', {'keyCode':51, 'which':51}); 
  document.dispatchEvent (evt); 
}

function move4() {
  var evt = new KeyboardEvent('keydown', {'keyCode':52, 'which':52}); 
  document.dispatchEvent (evt); 
}

var in_battle = false;

var pokemon_names = ['Jenna', 'Maddie', 'Hannah', 'Colton', 'Olivia', 'Julia', 'Anna', 'Leah', 'Schwetty', 'Ryan', 'Kyle', 'Holly', 'Angela', 'Chris', 'Anthony', 
                    'Finn', 'Jude', 'Aidan','Allie','Owen','William', 'Matthew','Haven','Jack', 'Cole', 'Ms. Patty', 'Mystery House Vampire']

var wild_names = ["Jenna", "Hannah", "Owen", "Matthew", "Olivia", "Anna", "Ryan", "Angela", "Finn", "Haven", "Ms. Patty", "Lil Kody"];


var last_stroke = -1;

var current_pokemon = 0;

var party = [];

var pokemon_data = {
'Jenna' : {image : "static/jenna.png", move1 : "Water", move2 : "Earth", move3: "Fire", move4 : "Air", evolution : "Maddie"},
'Maddie' : {image : "static/maddie.png", move1 : "Water", move2 : "Earth", move3: "Fire", move4 : "Air", evolution : -1},

'Hannah' : {image : "static/hannah.png", move1 : "Water", move2 : "Earth", move3: "Fire", move4 : "Air", evolution : "Colton"},
'Colton' : {image : "static/colton.png", move1 : "Water", move2 : "Earth", move3: "Fire", move4 : "Air", evolution : -1},

'Owen' : {image : "static/owen.png", move1 : "Water", move2 : "Earth", move3: "Fire", move4 : "Air", evolution : "Allie"},
'Allie' : {image : "static/allie.png", move1 : "Water", move2 : "Earth", move3: "Fire", move4 : "Air", evolution : -1},

'Matthew' : {image : "static/matthew.png", move1 : "Water", move2 : "Earth", move3: "Fire", move4 : "Air", evolution : "William"},
'William' : {image : "static/william.png", move1 : "Water", move2 : "Earth", move3: "Fire", move4 : "Air", evolution : -1},

'Olivia' : {image : "static/olivia.png", move1 : "Water", move2 : "Earth", move3: "Fire", move4 : "Air", evolution : "Julia"},
'Julia' : {image : "static/julia.png", move1 : "Water", move2 : "Earth", move3: "Fire", move4 : "Air", evolution : -1},

'Anna' : {image : "static/anna.png", move1 : "Water", move2 : "Earth", move3: "Fire", move4 : "Air", evolution : "Leah"},
'Leah' : {image : "static/leah.png", move1 : "Water", move2 : "Earth", move3: "Fire", move4 : "Air", evolution : "Schwetty"},
'Schwetty' : {image : "static/schwetty.png", move1 : "Water", move2 : "Earth", move3: "Fire", move4 : "Air", evolution : -1},

'Ryan' : {image : "static/ryan.png", move1 : "Water", move2 : "Earth", move3: "Fire", move4 : "Air", evolution : "Kyle"},
'Kyle' : {image : "static/kyle.png", move1 : "Water", move2 : "Earth", move3: "Fire", move4 : "Air", evolution : "Holly"},
'Holly' : {image : "static/holly.png", move1 : "Water", move2 : "Earth", move3: "Fire", move4 : "Air", evolution : -1},

'Angela' : {image : "static/angela.png", move1 : "Water", move2 : "Earth", move3: "Fire", move4 : "Air", evolution : "Chris"},
'Chris' : {image : "static/chris.png", move1 : "Water", move2 : "Earth", move3: "Fire", move4 : "Air", evolution : "Anthony"},
'Anthony' : {image : "static/anthony.png", move1 : "Water", move2 : "Earth", move3: "Fire", move4 : "Air", evolution : -1},

'Finn' : {image : "static/finn.png", move1 : "Water", move2 : "Earth", move3: "Fire", move4 : "Air", evolution : "Jude"},
'Jude' : {image : "static/jude.png", move1 : "Water", move2 : "Earth", move3: "Fire", move4 : "Air", evolution : "Aidan"},
'Aidan' : {image : "static/aidan.png", move1 : "Water", move2 : "Earth", move3: "Fire", move4 : "Air", evolution : -1},

'Haven' : {image : "static/haven.png", move1 : "Water", move2 : "Earth", move3: "Fire", move4 : "Air", evolution : "Jack"},
'Jack' : {image : "static/jack.png", move1 : "Water", move2 : "Earth", move3: "Fire", move4 : "Air", evolution : "Aidan"},
'Cole' : {image : "static/cole.png", move1 : "Water", move2 : "Earth", move3: "Fire", move4 : "Air", evolution : -1},

'Ms. Patty' : {image : "static/patty.png", move1 : "Water", move2 : "Earth", move3: "Fire", move4 : "Air", evolution : -1},

'Mystery House Vampire' : {image : "static/vampire.png", move1 : "Water", move2 : "Earth", move3: "Fire", move4 : "Air", evolution : -1},

'Lil Kody' : {image : "static/lilkody.png", move1 : "Water", move2 : "Earth", move3: "Fire", move4 : "Air", evolution : "Kody"},
'Kody' : {image : "static/kody.png", move1 : "Water", move2 : "Earth", move3: "Fire", move4 : "Air", evolution : -1},

};

var text_case = "welcome";

var caught = [];
var working = false;


function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

window.onload = function() {
  'use strict';

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var w = document.getElementById('canvas').offsetWidth;
  var h = document.getElementById('canvas').offsetHeight;
  var terrainImageLoaded = false,
    houseImageLoaded = false,
    pokeballImageLoaded = false,
    playerImageLoaded = false;
  var objectSizes = 20;
  var speed = 100;
  var modifier = 100;
  var score = 0;

  //terrain image
  var terrainImage = new Image();
  terrainImage.onload = function() {
    terrainImageLoaded = true;
    assetsLoaded();
  };
  terrainImage.src = 'https://drive.google.com/uc?id=1o9rhnAr2GIilfjxPm4Wdl1BlaVP4Gsj1';

  //house image
  var houseImage = new Image();
  houseImage.onload = function() {
    houseImageLoaded = true;
    assetsLoaded();
  };
  houseImage.src = 'https://drive.google.com/uc?id=1YO5Mg6IzlskREYSRcr2Ut00JZI49ivnR';

  var battleImage = new Image();
  battleImage.src = "static/battle.jpg";

  //main sound
  var mainTheme = new Audio('https://drive.google.com/uc?id=1ljrlJ1UBrH4YnIpxH02jqR_oJeLZhkDv');
  mainTheme.loop = true;
  mainTheme.volume = .5;


  var battleTheme = new Audio('static/battle.mp3');
  battleTheme.loop = true;
  battleTheme.volume = .5;

  var evolutionTheme = new Audio('static/evolution.mp3');
  evolutionTheme.loop = false;
  evolutionTheme.volume = .5;

  //pokeball-selection
  var pokePick = new Audio('https://drive.google.com/uc?id=1ULOY_JeGQWJ0SOcxQfBtNQ77e20sWa31');
  pokePick.volume = 0.8;

  //pokeball-selection
  var wildFind = new Audio('static/wild.mp3');
  wildFind.volume = 0.8;

  //player image
  var playerImage = new Image();
  playerImage.onload = function() {
    pokeballImageLoaded = true;
    assetsLoaded();
  };
  playerImage.src = 'https://drive.google.com/uc?id=1ZsYCAWG7uR2_nZTVsIOOUog4tXFIUsgB';

  //pokeball image
  var pokeballImage = new Image();
  pokeballImage.onload = function() {
    playerImageLoaded = true;
    assetsLoaded();
  };
  pokeballImage.src = 'https://drive.google.com/uc?id=1XiXaiRlytnRI2ncwnBWyyef79guxI55X';

  /**
   * It will hold all the pockeball data like x and y axis position
   * sprite position and item distance is for determine which item is selected from the sprite - @todo future use for knowing on score which one player picked
   * Also hold the generate position function that generates random positions if there is no collision.
   * @Object
   * @name pokeball
   */
  var pokeball = {
    x: -1,
    y: -1,
    spritePosition: 0,
    spriteItemDistance: 33,
  };
  pokeball.generatePosition = function() {
    do {
      pokeball.x = Math.floor(Math.random() * 20) + 1;
      pokeball.y = Math.floor(Math.random() * 16) + 4;
    } while (check_collision(pokeball.x, pokeball.y));

    pokeball.spritePosition = Math.floor(Math.random() * 4) + 0; // get position from 0-4
  };


var wild_pokemon = {
    who: 0,
    x: 0,
    y: 0,
    spritePosition: 0,
    spriteItemDistance: 33,
  };

  wild_pokemon.generateWild = function() {
    do {
      wild_pokemon.x = Math.floor(Math.random() * 20) + 1;
      wild_pokemon.y = Math.floor(Math.random() * 16) + 4;
    } while (check_collision(wild_pokemon.x, wild_pokemon.y) || (wild_pokemon.x == pokeball.x && wild_pokemon.y == pokeball.y));

    wild_pokemon.spritePosition = Math.floor(Math.random() * 4) + 0; // get position from 0-4

    let name = wild_names[Math.floor(Math.random() * wild_names.length) + 0];
    let poke = pokemon_data[name]
    let pokemon_object = new Pokemon(name, poke["image"], poke["move1"], poke["move2"], poke["move3"], poke["move4"], poke["evolution"], 100);
    wild_pokemon.who = pokemon_object
    console.log(wild_pokemon.who)
  };

  wild_pokemon.generateWild();

  /**
   * Holds all the player's info like x and y axis position, his current direction (facing).
   * I have also incuded an object to hold the sprite position of each movement so i can call them
   * I also included the move function in order to move the player - all the functionality for the movement is in there
   * @Object
   * @name pokeball
   */
  var hold_player = {
    x: 0,
    y: 0,
  };


  var player = {
    x: Math.round(w / 2 / objectSizes),
    y: Math.round(h / 2 / objectSizes),
    currentDirection: 'stand',
    direction: {
      stand: {
        x: 0,
        y: 0,
      },
      'down-1': {
        x: 17,
        y: 0,
      },
      'down-2': {
        x: 34,
        y: 0,
      },
      'up-1': {
        x: 125,
        y: 0,
      },
      'up-2': {
        x: 142,
        y: 0,
      },
      'left-1': {
        x: 69,
        y: 0,
      },
      'left-2': {
        x: 87,
        y: 0,
      },
      'right-1': {
        x: 160,
        y: 0,
      },
      'right-2': {
        x: 178,
        y: 0,
      },
    },
  };
  player.move = function(direction) {
    /**
     * A temporary object to hold the current x, y so if there is a collision with the new coordinates to fallback here
     */
    var prev_partner_x = hold_player.x;
    var prev_partner_y = hold_player.y;
    hold_player.x =  player.x
    hold_player.y =  player.y

    /**
     * Decide here the direction of the user and do the neccessary changes on the directions
     */
    switch (direction) {
      case 'left':
        player.x -= speed / modifier;
        if (player.currentDirection == 'stand') {
          player.currentDirection = 'left-1';
        } else if (player.currentDirection == 'left-1') {
          player.currentDirection = 'left-2';
        } else if (player.currentDirection == 'left-2') {
          player.currentDirection = 'left-1';
        } else {
          player.currentDirection = 'left-1';
        }
        break;
      case 'right':
        player.x += speed / modifier;
        if (player.currentDirection == 'stand') {
          player.currentDirection = 'right-1';
        } else if (player.currentDirection == 'right-1') {
          player.currentDirection = 'right-2';
        } else if (player.currentDirection == 'right-2') {
          player.currentDirection = 'right-1';
        } else {
          player.currentDirection = 'right-1';
        }
        break;
      case 'up':
        player.y -= speed / modifier;

        if (player.currentDirection == 'stand') {
          player.currentDirection = 'up-1';
        } else if (player.currentDirection == 'up-1') {
          player.currentDirection = 'up-2';
        } else if (player.currentDirection == 'up-2') {
          player.currentDirection = 'up-1';
        } else {
          player.currentDirection = 'up-1';
        }

        break;
      case 'down':
        player.y += speed / modifier;

        if (player.currentDirection == 'stand') {
          player.currentDirection = 'down-1';
        } else if (player.currentDirection == 'down-1') {
          player.currentDirection = 'down-2';
        } else if (player.currentDirection == 'down-2') {
          player.currentDirection = 'down-1';
        } else {
          player.currentDirection = 'down-1';
        }
        break;
    }



    /**
     * if there is a collision just fallback to the temp object i build before while not change back the direction so we can have a movement
     */


    if (check_collision(player.x, player.y)) {
      player.x = hold_player.x;
      player.y = hold_player.y;

      hold_player.x = prev_partner_x;
      hold_player.y = prev_partner_y;


    }

    var new_x = 0;
    var new_y = 0;

    // Random wild pokemon move
    let wild_move = Math.floor(Math.random() * 4);
    switch (wild_move) {
      case 0:
        new_x = wild_pokemon.x + 1;
        new_y = wild_pokemon.y;
        break;
      case 1:
        new_x = wild_pokemon.x - 1;
        new_y = wild_pokemon.y;
        break;
      case 2:
        new_y = wild_pokemon.y + 1;
        new_x = wild_pokemon.x;
        break;
      case 3:
        new_y = wild_pokemon.y - 1;
        new_x = wild_pokemon.x;
        break;
      default:
        break;
      }

    /**
     * If player finds the coordinates of pokeball the generate new one, play the sound and update the score
     */
    if (player.x == pokeball.x && player.y == pokeball.y) {
      // found a pokeball !! create a new one
      console.log('found a pokeball of ' + pokeball.spritePosition + '! Bravo! ');
      pokePick.pause();
      pokePick.currentTime = 0;
      pokePick.play();
      score += 1;
      pokeball.generatePosition();
    }


    // Player found wild pokemon
    if (player.x == wild_pokemon.x && player.y == wild_pokemon.y) {
      console.log('found a pokemon! Bravo!');
      text_case = "wild_encounter"
      wildFind.pause();
      pokePick.currentTime = 0;
      wildFind.play();
    } else if (!(new_x == player.x && new_y == player.y) && !(check_collision(new_x, new_y))) {
      wild_pokemon.x = new_x;
      wild_pokemon.y = new_y;
    }

    // Player  at champion's door
    if (player.x == 6 && player.y == 7) {
      if (caught.length < 6) {
          text_case = "notready";
          last_stroke = -1;
      } else {
          text_case = "ready"
          last_stroke = -1;
      }
    }

    update();
  };



 // SECTION 2: Battle Section

var battle_text = "choose";
var move = "";
var opponent_move = "";
var your_strength = 0;
var opponent_strength = 0;
var old_image = 0;
var old_name = 0;
var flip = 0;

function battle() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(battleImage, 0, 0);

    ctx.font = '18px Arial';
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';


    ctx.fillText(`${caught[current_pokemon].name}`, 275, 240);
    ctx.fillText(`${wild_pokemon.who.name}`, 40, 75);

    ctx.drawImage(wild_pokemon.who.largeimage, 260, 50);
    ctx.drawImage(caught[current_pokemon].largeimage, 50, 160);

    // Exp bar
    ctx.fillStyle = 'rgba(137, 196, 244, 1)';
    ctx.fillRect(304, 304, 42*caught[current_pokemon].exp, 8);

    // Enemy HP
    ctx.fillStyle = 'rgba(231, 76, 60, 1)';
    ctx.fillRect(100 + (91 - 91*(100-wild_pokemon.who.hp)/100), 96, 91*(100-wild_pokemon.who.hp)/100, 7);

    // Your HP
    ctx.fillStyle = 'rgba(231, 76, 60, 1)';
    ctx.fillRect(334 + (91 - 91*(100-caught[current_pokemon].hp)/100), 260, 91*(100-caught[current_pokemon].hp)/100, 7);


    // ctx.fillRect(335, 260, 90, 10);

    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
      switch(battle_text) {
        
        case "choose":
          ctx.fillText(`What should ${caught[current_pokemon].name} do?`, 20, h - 100);
          ctx.fillText(`1. ${caught[current_pokemon].move1}`, 20, h - 65);
          ctx.fillText(`2. ${caught[current_pokemon].move2}`, w/2, h - 65);
          ctx.fillText(`3. ${caught[current_pokemon].move3}`, 20, h - 35);
          ctx.fillText(`4. ${caught[current_pokemon].move4}`, w/2, h - 35);

          // Random wild pokemon move
          let opponent_move_select = Math.floor(Math.random() * 4);
          switch (opponent_move_select) {
            case 0:
              opponent_move = wild_pokemon.who.move1;
              opponent_strength = 10;
              break;
            case 1:
              opponent_move = wild_pokemon.who.move2;
              opponent_strength = 20;
              break;
            case 2:
              opponent_move = wild_pokemon.who.move3;
              opponent_strength = 30;
              break;
            case 3:
              opponent_move = wild_pokemon.who.move4;
              opponent_strength = 50;
              break;
            default:
              break;
            }

          if (last_stroke == 49) {
            battle_text = "move";
            your_strength = 10;
            move = caught[current_pokemon].move1;
            caught[current_pokemon].hp -= opponent_strength;
            wild_pokemon.who.hp -= your_strength;
          } else if (last_stroke == 50) {
            battle_text = "move";
            your_strength = 20;
            move = caught[current_pokemon].move2;
            caught[current_pokemon].hp -= opponent_strength;
            wild_pokemon.who.hp -= your_strength;
          } else if (last_stroke == 51) {
            battle_text = "move";
            your_strength = 30;
            move = caught[current_pokemon].move3;
            caught[current_pokemon].hp -= opponent_strength;
            wild_pokemon.who.hp -= your_strength;
          } else if (last_stroke == 52) {
            battle_text = "move";
            your_strength = 50;
            move = caught[current_pokemon].move4;
            caught[current_pokemon].hp -= opponent_strength;
            wild_pokemon.who.hp -= your_strength;
          }

          if (wild_pokemon.who.hp < 0) {
            wild_pokemon.who.hp = 0;
          }
          if (caught[current_pokemon].hp < 0) {
            caught[current_pokemon].hp = 0;
          }
          break;
        case "move":

          ctx.fillText(`${caught[current_pokemon].name} used ${move}! The wild ${wild_pokemon.who.name} lost ${your_strength} HP!`, 20, h - 100);
          ctx.fillText(`The wild ${wild_pokemon.who.name} used ${opponent_move}! ${caught[current_pokemon].name} lost ${opponent_strength} HP!`, 20, h - 65);

          if (last_stroke == 13) {

              last_stroke = -1;
              if (wild_pokemon.who.hp <= 0) {
                battle_text = "faint";
                  if (caught[current_pokemon].exp < 3) {
                    caught[current_pokemon].exp += 1;
                  }
              } else if (caught[current_pokemon].hp <= 0) {
                battle_text = "loose";
              } else {
                battle_text = "choose";
              }
            
          }
          break;
        case "faint":
          ctx.fillText(`The wild ${wild_pokemon.who.name} fainted!`, 20, h - 100);
           ctx.fillText(`${caught[current_pokemon].name} gained 1 experience point!`, 20, h - 65);

          

          if (last_stroke == 13) {
            if (caught[current_pokemon].exp >= 3 && caught[current_pokemon].evolution != -1) {
                old_image = caught[current_pokemon].largeimage;
                old_name = caught[current_pokemon].name;
                let poke = pokemon_data[caught[current_pokemon].evolution];
                let new_pokemon = new Pokemon(caught[current_pokemon].evolution, poke["image"], poke["move1"], poke["move2"], poke["move3"], poke["move4"], poke["evolution"], 100);
                caught[current_pokemon] = new_pokemon;
                console.log("New pokemon!:");
                console.log(caught[current_pokemon]);
                last_stroke = -1;
                battleTheme.pause();
                evolutionTheme.play();
                battle_text = "evolve";
            } else {
              battle_text = "battle_done";
            }
            
          }
          break;

        case "evolve":

          if (flip % 2 == 0 && flip <= 12) {
            ctx.drawImage(old_image, 50, 160);
          }
          flip += 1;

          ctx.fillText(`What? ... ${old_name} is evolving....`, 20, h - 100);

         if (flip > 12) {
            ctx.fillText(`${old_name} evolved into ${caught[current_pokemon].name}!!`, 20, h - 65);
          }

          if (last_stroke == 13) {
            evolutionTheme.pause();
            battle_text = "battle_done";
            flip = 0;
          }
          break;

        case "loose":
          ctx.fillText(`${caught[current_pokemon].name} fainted! You ran away!`, 20, h - 100);
          if (last_stroke == 13) {
            battle_text = "battle_done";
          }
          break;
        case "battle_done":
            caught[current_pokemon].hp = 100;
            in_battle = false;
            refreshIntervalId = setInterval(update, 500);
            clearInterval(refreshIntervalId_battle);
            battleTheme.pause();
            mainTheme.play();
            wild_pokemon.generateWild();
            text_case = "welcome"
            update();
          break;

        default:
          break;

      }



  };

   // SECTION 2: World Section

  /**
   * Handle all the updates of the canvas and creates the objects
   * @function
   * @name update
   */
  function update() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(terrainImage, 0, 0);
    ctx.drawImage(houseImage, 80, 60);

    //Genboard
    board();

    // Pokeball
    ctx.drawImage(
      pokeballImage,
      pokeball.spritePosition * pokeball.spriteItemDistance,
      0,
      objectSizes,
      objectSizes,
      pokeball.x * objectSizes,
      pokeball.y * objectSizes,
      objectSizes,
      objectSizes
    );

    // Wild_pokemon
    ctx.drawImage(
      wild_pokemon.who.image,
      0,
      0,
      30,
      30,
      wild_pokemon.x * objectSizes,
      wild_pokemon.y * objectSizes,
      30,
      30
    );

    // Player
    console.log('y:', (player.y * objectSizes) / objectSizes);
    console.log('x', (player.x * objectSizes) / objectSizes);
    ctx.drawImage(
      playerImage,
      player.direction[player.currentDirection].x,
      player.direction[player.currentDirection].y,
      objectSizes - 2,
      objectSizes,
      player.x * objectSizes,
      player.y * objectSizes,
      objectSizes,
      objectSizes
    );


    // Partner
    if (caught.length > 0) {
      console.log('y:', (player.y * objectSizes) / objectSizes);
      console.log('x', (player.x * objectSizes) / objectSizes);
      ctx.drawImage(
        caught[current_pokemon].tinyimage,
        0,
        0,
        20,
        20,
        hold_player.x * objectSizes,
        hold_player.y * objectSizes,
        20,
        20
      );
    }

    // Caught Pokemon

    ctx.fillStyle = 'rgba(0,255,0,0.3)';
    ctx.fillRect(10 + current_pokemon*50, 5, 40, 40);

    for (var index = 0; index < caught.length; index++) { 
        ctx.drawImage(caught[index].image, 0, 0, 30, 30, 15 + index*50, 10, 30, 30);
    } 
        
    ctx.font = '18px Arial';
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillText('You have', w - 100, 20);

    ctx.font = '14px Arial';
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillText(score + ' pokéballs', w - 90, 40);

      // Text
      switch(text_case) {
        
        case "welcome":
          ctx.fillText('Welcome to the world of Pokémon!', 10, h - 75);
          ctx.fillText('Go explore and catch some Pokémon!', 10, h - 55);
          if (caught.length > 1) {
            ctx.fillText('Press the space bar to switch between your partner Pokémon!', 10, h - 15);
          }
          working = false;
          break;
        case "wild_encounter":
          working = true;
          ctx.fillText(`You encountered a wild ${wild_pokemon.who.name}! What will you do?`, 10, h - 75);
          ctx.fillText('1. Battle!', 10, h - 55);
          ctx.fillText('2. Throw Pokéball', w/2, h - 55);
          ctx.fillText('3. Flee', 10, h - 35);
          if (last_stroke == 49) {
            if (caught.length == 0) {
              text_case = "nopokemon";
              last_stroke = -1
            } else {
              in_battle = true;
              clearInterval(refreshIntervalId);
              refreshIntervalId_battle = setInterval(battle, 500);
              mainTheme.pause();
              battleTheme.play();
              battle_text = "choose";
              last_stroke = -1;
              battle();
            }
          } else if (last_stroke == 50) {
            if (score == 0) {
              text_case = "emptybag"
              last_stroke = -1
            } else if (caught.length == 6) {
              text_case = "toomany";
              last_stroke = -1
            }else {
              score = score - 1
              text_case = "throw";
              last_stroke = -1
            } 

          } else if (last_stroke == 51) {
            text_case = "sorry";
            last_stroke = -1
          } 
          break;
        case "throw":
          ctx.fillText('You threw a Pokeball!', 10, h - 75);
          let odds = Math.floor(Math.random() * 9) + 0
          let catch_rate = 4;
          if (odds > catch_rate) {
            if (last_stroke != -1) {
              text_case = "caught";
              last_stroke = -1
            }
          } else {
            if (last_stroke != -1) {
              text_case = "escaped";
              last_stroke = -1
            }
          }
          break;

        case "caught":
            ctx.fillText(`You caught the ${wild_pokemon.who.name}! It has been added to your party!`, 10, h - 75);

            if (last_stroke != -1) {
              caught.push(wild_pokemon.who);
              wild_pokemon.generateWild();
              text_case = "welcome";
            }

            last_stroke = -1
          break;
        case "escaped":
            ctx.fillText(`Shoot! ${wild_pokemon.who.name} escaped!`, 10, h - 75);
            ctx.fillText('Press enter to throw another Pokeball or escape to flee!', 10, h - 55);
             if (last_stroke == 27) {
              text_case = "sorry";
              last_stroke = -1
            } else if (last_stroke == 13) {
                if (score == 0) {
                  text_case = "emptybag"
                  last_stroke = -1
                } else {
                  score = score - 1
                  text_case = "throw";
                  last_stroke = -1
               }
              } 
          break;

        case "nopokemon":
          if (last_stroke != -1) {
            text_case = "welcome";
          }
          ctx.fillText("You can't battle until you catch a Pokémon!", 10, h - 75);
          ctx.fillText("Better luck next time, Trainer!", 10, h - 55);
          break;

        case "toomany":
          if (last_stroke != -1) {
            text_case = "welcome";
          }
          ctx.fillText("You already have 6 Pokémon in your party!", 10, h - 75);
          ctx.fillText("Sorry, Trainer!", 10, h - 55);
          break;

        case "emptybag":
          if (last_stroke != -1) {
            text_case = "welcome";
          }
          ctx.fillText("You're out of Pokeballs! Oh no!", 10, h - 75);
          ctx.fillText("Better luck next time, Trainer!", 10, h - 55);
          break;

        case "sorry":
          if (last_stroke != -1) {
            text_case = "welcome";
          }
          ctx.fillText("Better luck next time, Trainer!", 10, h - 75);
          break;

        case "notready":
          ctx.fillText("This is the home of the champion... Come back later.", 10, h - 75);
          ctx.fillText("You need more Pokémon to challenge the champion.", 10, h - 55);
          if (last_stroke != -1) {
            text_case = "welcome";
          }
          break;

        case "ready":
          ctx.fillText("This is the home of the champion... are you sure you're ready?", 10, h - 75);
          ctx.fillText("Press enter to challenge the champion or escape to wait.", 10, h - 55);
             if (last_stroke == 27) {
              text_case = "wlecome";
            } else if (last_stroke == 13) {
                last_stroke = -1;
                text_case = "champion";
              }
          break;

        case "champion":
          ctx.fillText("LETS GO!", 10, h - 75);

          if (last_stroke != -1) {
            text_case = "welcome";
          }
          break;

        case "battle_done":
          text_case = "welcome";
          ctx.fillText('Keep going, Trainer!', 10, h - 75);
          wild_pokemon.generateWild();
          sleep(2000);
          break;

        default:
          break;
          // code block
      }

  }



   // SECTION Z: Closing Section
  /**
   * Our function that decides if there is a collision on the objects or not
   * @function
   * @name check_collision
   * @param {Integer} x - The x axis
   * @param {Integer} y - The y axis
   */
  function check_collision(x, y) {
    var foundCollision = false;

    if ((x > 3 && x < 9 && y == 6) || (x > 4 && x < 9 && (y == 5 || y == 4 || y == 3))) {
      //collision on house
      console.log('on house');
      foundCollision = true;
    }

    if (
      x < 1 ||
      x > 20 ||
      y < 3 ||
      y > 16 ||
      (y > 0 && y < 4 && (x == 20 || x == 19)) || //right corner
      (y > 0 && y < 4 && (x == 2 || x == 3)) || //left corner
      (y > 18 && (x == 2 || x == 3)) || //left corner
      (x > 17 && (y == 19 || y == 20)) || //left corner
      (x > 19 && (y == 17 || y == 18)) //left corner 2
    ) {
      console.log('lost on the woods');
      foundCollision = true;
    }

    return foundCollision;
  }

  /**
   * Here we are creating our board on the bottom right with our score
   * @todo maybe some mute button for the future?
   * @function
   * @name board
   */
  function board() {

    ctx.fillStyle = 'rgba(0, 0, 0, 0.9)';
    ctx.fillRect(0, 0, w, 50);

    ctx.fillStyle = 'rgba(0, 0, 0, 0.9)';
    ctx.fillRect(0, h - 100, w, 100);

  }

  /**
   * Decide here if all the assets are ready to start updating
   * @function
   * @name assetsLoaded
   */
   var refreshIntervalId = 0;
   var refreshIntervalId_battle = 0;
  function assetsLoaded() {
    if (
      terrainImageLoaded == true &&
      houseImageLoaded == true &&
      pokeballImageLoaded == true &&
      playerImageLoaded == true
    ) {
      pokeball.generatePosition();
      wild_pokemon.generateWild();
      document.getElementById("loading").height = "0";
      refreshIntervalId = setInterval(update, 500);
      update();
    }
  }

  /**
   * Assign of the arrow keys to call the player move
   */
  document.onkeydown = function(e) {
    e = e || window.event;
    last_stroke = e.keyCode;

    if (!working) {
      if (e.keyCode == '37') player.move('left');
      else if (e.keyCode == '38') player.move('up');
      else if (e.keyCode == '39') player.move('right');
      else if (e.keyCode == '40') player.move('down');
      else if (e.keyCode == '32') {
        current_pokemon = current_pokemon + 1;
        if (current_pokemon > caught.length-1){
          current_pokemon = 0;
        }
      }
    }

    if (in_battle) {
      battle();
    } else {
      mainTheme.play();
      update();
    }
  };


caught.push(wild_pokemon.who);
// caught.push(wild_pokemon.who);
// caught.push(wild_pokemon.who);
// caught.push(wild_pokemon.who);
// caught.push(wild_pokemon.who);

};

