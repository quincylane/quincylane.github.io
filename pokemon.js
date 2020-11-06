/**
 * Pokemon HTML5 canvas game
 * @version 1.0.0
 * @author Panagiotis Vourtsis <vourtsis_pan@hotmail.com>
 */

class Pokemon {
  constructor(name, image, move1, move2, move3, move4, evolution, hp) {    
    this.name = name;
    this.image = new Image();
    this.image.src = image;
    this.move1 = move1;
    this.move2 = move2;
    this.move3 = move3;
    this.move4 = move4;
    this.evolution = evolution;
    this.hp = hp;
  }
}

var pokemon_names = ['Jenna1', 'Jenna2', 'Jenna3', 'Jenna4', 'Jenna5']

var last_stroke = 0;

var current_pokemon = 0;


var pokemon_data = {
'Jenna1' : {image : "jenna.png", move1 : "Water", move2 : "Earth", move3: "Fire", move4 : "Air", evolution : -1, hp : 100},
'Jenna2' : {image : "jenna.png", move1 : "Water", move2 : "Earth", move3: "Fire", move4 : "Air", evolution : -1, hp : 100},
'Jenna3' : {image : "jenna.png", move1 : "Water", move2 : "Earth", move3: "Fire", move4 : "Air", evolution : -1, hp : 100},
'Jenna4' : {image : "jenna.png", move1 : "Water", move2 : "Earth", move3: "Fire", move4 : "Air", evolution : -1, hp : 100},
'Jenna5' : {image : "jenna.png", move1 : "Water", move2 : "Earth", move3: "Fire", move4 : "Air", evolution : -1, hp : 100}
};

var text_case = "welcome";

for(var name in pokemon_data) {
    image = pokemon_data[name]["image"]
}

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

  //main sound
  var mainTheme = new Audio('https://drive.google.com/uc?id=1ljrlJ1UBrH4YnIpxH02jqR_oJeLZhkDv');
  mainTheme.loop = true;
  mainTheme.volume = .5;

  //pokeball-selection
  var pokePick = new Audio('https://drive.google.com/uc?id=1ULOY_JeGQWJ0SOcxQfBtNQ77e20sWa31');
  pokePick.volume = 0.8;

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
    let name = pokemon_names[Math.floor(Math.random() * 4) + 0]
    let poke = pokemon_data[name]
    let pokemon_object = new Pokemon(name, poke["image"], poke["move1"], poke["move2"], poke["move3"], poke["move4"], -1, 100);
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
      pokePick.pause();
      pokePick.currentTime = 0;
      pokePick.play();
    }

    // Player  at champion's door
    if (player.x == 6 && player.y == 7) {
      if (caught.length < 6) {
          text_case = "notready"
      } else {
          text_case = "ready"
      }
    }

    update();
  };

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
        caught[current_pokemon].image,
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
    ctx.fillText(score + ' poketballs', w - 90, 40);

      // Text
      switch(text_case) {
        
        case "welcome":
          ctx.fillText('Welcome to the world of Pokémon!', 10, h - 75);
          ctx.fillText('Go explore and catch some Pokémon!', 10, h - 55);
          working = false;
          break;
        case "wild_encounter":
          working = true;
          ctx.fillText('You encountered a wild pokemon! What will you do?', 10, h - 75);
          ctx.fillText('1. Battle!', 10, h - 55);
          ctx.fillText('2. Throw Pokéball', w/2, h - 55);
          ctx.fillText('3. Flee', 10, h - 35);
          if (last_stroke == 49) {
            if (caught.length == 0) {
              text_case = "nopokemon";
            } else {
              text_case = "choose_move";
              last_stroke = -1;
            }
          } else if (last_stroke == 50) {
            if (score == 0) {
              text_case = "emptybag"
            } else if (caught.length == 6) {
              text_case = "toomany";
            }else {
              score = score - 1
              text_case = "throw";
            } 

          } else if (last_stroke == 51) {
            text_case = "sorry";
          } 
          break;
        case "choose_move":
          ctx.fillText('What should your_pokemon do? ', 10, h - 75);
          ctx.fillText('1. Move 1', 10, h - 55);
          ctx.fillText('2. Move 2', w/2, h - 55);
          ctx.fillText('3. Move 3', 10, h - 35);
          ctx.fillText('4. Move 4', w/2, h - 35);
          if (last_stroke == 49) {
            text_case = "move1";
          } else if (last_stroke == 50) {
            text_case = "move2";
          } else if (last_stroke == 51) {
            text_case = "move3";
          } else if (last_stroke == 52) {
            text_case = "move4";
          }
          break;
        case "move1":
          ctx.fillText('your_pokemon used move1!', 10, h - 75);
          ctx.fillText('The wild_pokemon fainted! yours gained exp!', 10, h - 55);
          text_case = "battle_done";
          break;
        case "move2":
          ctx.fillText('your_pokemon used move2!', 10, h - 75);
          ctx.fillText('The wild_pokemon fainted! yours gained exp!', 10, h - 55);
          text_case = "battle_done";
          break;
        case "move3":
          ctx.fillText('your_pokemon used move3!', 10, h - 75);
          ctx.fillText('The wild_pokemon fainted! yours gained exp!', 10, h - 55);
          text_case = "battle_done";
          break;
        case "move4":
          ctx.fillText('your_pokemon used move4!', 10, h - 75);
          ctx.fillText('The wild_pokemon fainted! yours gained exp!', 10, h - 55);
          text_case = "battle_done";
          break;
        case "throw":
          ctx.fillText('You threw a Pokeball!', 10, h - 75);
          let odds = Math.floor(Math.random() * 9) + 0
          let catch_rate = 4;
          if (odds > catch_rate) {
            text_case = "caught";
          } else {
            text_case = "escaped";
          }
          break;

        case "caught":
            ctx.fillText('You caught the pokemon! It has been added to your party!', 10, h - 75);
            ctx.fillText('Press the space bar to switch between your partner Pokémon!', 10, h - 35);
            caught.push(wild_pokemon.who);
            console.log(caught);
            text_case = "battle_done";
          break;
        case "escaped":
            ctx.fillText('Shoot! The pokemon escaped!', 10, h - 75);
            ctx.fillText('Press enter to throw another Pokeball or escape to flee!', 10, h - 55);
             if (last_stroke == 27) {
              text_case = "sorry";
            } else if (score == 0) {
                text_case = "emptybag"
              } else if (last_stroke == 13) {
                score = score - 1
                text_case = "throw";
              }
          break;

        case "nopokemon":
          text_case = "battle_done";
          ctx.fillText("You can't battle until you catch a Pokémon!", 10, h - 75);
          ctx.fillText("Better luck next time, Trainer!", 10, h - 55);
          break;

        case "toomany":
          text_case = "battle_done";
          ctx.fillText("You already have 6 Pokémon in your party!", 10, h - 75);
          ctx.fillText("Sorry, Trainer!", 10, h - 55);
          break;

        case "emptybag":
          text_case = "battle_done";
          ctx.fillText("You're out of Pokeballs! Oh no!", 10, h - 75);
          ctx.fillText("Better luck next time, Trainer!", 10, h - 55);
          break;

        case "sorry":
          text_case = "battle_done";
          ctx.fillText("Better luck next time, Trainer!", 10, h - 75);
          break;

        case "comeback":
          ctx.fillText("This is the home of the champion... Come back later.", 10, h - 75);
          ctx.fillText("You need more Pokémon to challenge the champion.", 10, h - 55);
          text_case = "battle_done";
          break;

        case "notready":
          text_case = "comeback";
          break;

        case "ready":
          ctx.fillText("This is the home of the champion... are you sure you're ready?", 10, h - 75);
          ctx.fillText("Press enter to challenge the champion or escape to wait.", 10, h - 55);
             if (last_stroke == 27) {
              text_case = "sorry";
            } else if (last_stroke == 13) {
                text_case = "champion";
              }
          break;

        case "champion":
          ctx.fillText("LETS GO!", 10, h - 75);
          text_case = "sorry";
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
  function assetsLoaded() {
    if (
      terrainImageLoaded == true &&
      houseImageLoaded == true &&
      pokeballImageLoaded == true &&
      playerImageLoaded == true
    ) {
      pokeball.generatePosition();
      wild_pokemon.generateWild();
      update();
    }
  }

  /**
   * Assign of the arrow keys to call the player move
   */
  document.onkeydown = function(e) {
    //mainTheme.play();
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
    update();
  };
caught.push(wild_pokemon.who);
caught.push(wild_pokemon.who);
caught.push(wild_pokemon.who);
caught.push(wild_pokemon.who);
caught.push(wild_pokemon.who);
// caught.push(wild_pokemon.who);
setInterval(update, 500);

};

