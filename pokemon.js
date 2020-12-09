 // SECTION 1: Variable Initialization

var wild_names = [
"Jenna",
"Hannah",
"Owen",
"Matthew",
"Olivia",
"Anna",
"Ryan",
"Angela",
"Finn",
"Haven",
"Lil Kody",
'Squirtle',
'Charmander',
'Bulbasaur',
'Dratini',
'Ghastly',
'Eevee',
'Magikarp',
'Jigglypuff',
'Lapras',
'Pikachu',
'Psyduck'
];


var boss_names = [
"Ms. Patty",
"The Post Star",
"Snowplow Driver",
"Mr. Varney", 
"Mr. Margison", 
"Mystery House"];

var eeveelutions = ["Jolteon", "Vaporeon", "Flareon"];

var pokemon_data = {
'Jenna' : {image : "static/jenna.png", move1 : "Tesla Tackle", move2 : "Bong Blast", move3: "Snow Hair Slap", move4 : "Billie Burst", evolution : "Maddie", power : [20, 10, 15, 30]},
'Maddie' : {image : "static/maddie.png", move1 : "Cannon6D Flash", move2 : "Bee Stingers", move3: "Lightning Booty", move4 : "Kody Krush", evolution : -1, power : [20, 10, 40, 50]},

'Hannah' : {image : "static/hannah.png", move1 : "LAX Leap", move2 : "Hadlock Pound", move3: "Volun-tear You Apart", move4 : "Aerial Angel", evolution : "Colton", power : [30, 30, 20, 40]},
'Colton' : {image : "static/colton.png", move1 : "Gentle Fist", move2 : "Trusty Lassoo", move3: "Waterbend Whip", move4 : "Aerial Angel", evolution : -1, power : [50, 20, 30, 40]},

'Owen' : {image : "static/owen.png", move1 : "Lick", move2 : "Flick", move3: "Dick Out", move4 : "Toy Chuck", evolution : "Allie", power : [10, 10, 20, 20]},
'Allie' : {image : "static/allie.png", move1 : "Screech", move2 : "Evil Giggle", move3: "Scratch", move4 : "Satanic Posession", evolution : -1, power : [10, 20, 20, 50]},

'Matthew' : {image : "static/matthew.png", move1 : "Splash", move2 : "Scratch", move3: "Tear Up", move4 : "Patty Pounce", evolution : "William", power : [10, 10, 10, 20]},
'William' : {image : "static/william.png", move1 : "Flail", move2 : "Stick Poke", move3: "Cry", move4 : "Patty Pound", evolution : -1, power : [10, 10, 10, 30]},

'Olivia' : {image : "static/olivia.png", move1 : "Kopnięcie", move2 : "Polish Pinch", move3: "Basketball Bounce", move4 : "Nitro Nugget", evolution : "Julia", power : [20, 20, 30, 40]},
'Julia' : {image : "static/julia.png", move1 : "Stempel", move2 : "Polish Punch", move3: "Connor Karate Chop", move4 : "Nugget Nuke", evolution : -1, power : [10, 20, 30, 50]},

'Anna' : {image : "static/anna.png", move1 : "Speedy Sprint", move2 : "Selfie Slap", move3: "Anna Ambush", move4 : "Macy Mash", evolution : "Leah", power : [10, 20, 40, 30]},
'Leah' : {image : "static/leah.png", move1 : "Bite", move2 : "Queer Quake", move3: "Pastel Pow", move4 : "Maya Mangle", evolution : "Schwetty", power : [10, 50, 10, 40]},
'Schwetty' : {image : "static/schwetty.png", move1 : "Dark Alchemy", move2 : "64 Palms", move3: "Bloodbend", move4 : "Flyin Ryan", evolution : -1, power : [10, 50, 40, 40]},

'Ryan' : {image : "static/ryan.png", move1 : "Sokol Shuffle", move2 : "Sharingan", move3: "Ryan Ram", move4 : "Dak Attack", evolution : "Kyle", power : [40, 30, 10, 20]},
'Kyle' : {image : "static/kyle.png", move1 : "Tackett Tackle", move2 : "Divine Punishment", move3: "Boom Roasted", move4 : "Dak Attack", evolution : "Holly", power : [20, 100, 50, 20]},
'Holly' : {image : "static/holly.png", move1 : "Tatoosh Whoosh + Momaire Mash", move2 : "Pharma-Flip", move3: "Hollylujah", move4 : "Dak Attack", evolution : -1, power : [40, 30, 100, 20]},

'Angela' : {image : "static/angela.png", move1 : "Troisi Tickle", move2 : "Kathy Kick", move3: "Angelunge", move4 : "Bella Blitz", evolution : "Chris", power : [10, 20, 20, 20]},
'Chris' : {image : "static/chris.png", move1 : "Troisi Tackle", move2 : "Waterski Slash", move3: "Nipple Twist", move4 : "Bella Barrage", evolution : "Anthony", power : [30, 40, 20, 30]},
'Anthony' : {image : "static/anthony.png", move1 : "Troisi Triumph", move2 : "Airsoft Assault", move3: "Bong Blast", move4 : "Bella Bombardment", evolution : -1, power : [50, 20, 30, 40]},

'Finn' : {image : "static/finn.png", move1 : "Irish Jig", move2 : "Corner Shot", move3: "Finn Flip", move4 : "Rudy Rumble", evolution : "Jude", power : [20, 20, 30, 20]},
'Jude' : {image : "static/jude.png", move1 : "Dragon Summon", move2 : "Producer Pow", move3: "Jude Jab", move4 : "Aggie Attack", evolution : "Aidan", power : [40, 20, 30, 30]},
'Aidan' : {image : "static/aidan.png", move1 : "Startup Slam", move2 : "Flex Gains", move3: "Aidan Assault", move4 : "Lazlo Lunge", evolution : -1, power : [30, 30, 50, 50]},

'Haven' : {image : "static/haven.png", move1 : "Splash", move2 : "Fake Tears", move3: "Scratch", move4 : "Chainsaw Massacre", evolution : "Jack", power : [10, 10, 10, 50]},
'Jack' : {image : "static/jack.png", move1 : "Flail", move2 : "Fake Tears", move3: "Nerf Gun", move4 : "Jack Attack", evolution : "Cole", power : [10, 10, 10, 30]},
'Cole' : {image : "static/cole.png", move1 : "Tackle", move2 : "Scratch", move3: "Ripstick Ram", move4 : "Alpaca Punch", evolution : -1, power : [10, 20, 30, 40]},

'Lil Kody' : {image : "static/lilkody.png", move1 : "Head Tilt", move2 : "Grr", move3: "Woof", move4 : "WOOF", evolution : "Kody", power : [30, 10, 20, 30]},
'Kody' : {image : "static/kody.png", move1 : "Snout Push", move2 : "Tennis Ball Tear", move3: "Kody Krush", move4 : "DEFEND CHAD", evolution : -1, power : [20, 10, 30, 60]},

'Ms. Patty' : {image : "static/patty.png", move1 : "Patty Pounce", move2 : "Patty Pounce", move3: "LeapFrog Lunge", move4 : "LeapFrog Lunge", evolution : -1, power : [40, 40, 50, 50]},
'The Post Star' : {image : "static/poststar.png", move1 : "Public Shame", move2 : "Public Shame", move3: "Stone Throw", move4 : "Stone Throw", evolution : -1, power : [40, 40, 50, 50]},
'Mr. Margison' : {image : "static/margison.png", move1 : "Call 911", move2 : "Call 911", move3: "Sue Association", move4 : "Sue Association", evolution : -1, power : [40, 40, 50, 50]},
'Mystery House' : {image : "static/monster.png", move1 : "Demonic Curse", move2 : "Demonic Curse", move3: "Blood Sacrifice", move4 : "Blood Sacrifice", evolution : -1, power : [40, 40, 50, 50]},
'Mr. Varney' : {image : "static/varney.png", move1 : "Ding Dong Dash", move2 : "Ding Dong Dash", move3: "Femur SMASH", move4 : "Femur SMASH", evolution : -1, power : [40, 40, 50, 50]},
'Snowplow Driver' : {image : "static/snowplow.png", move1 : "Run Over", move2 : "Run Over", move3: "Avalanche", move4 : "Avalanche", evolution : -1, power : [40, 40, 50, 50]},

// Pokemon

'Squirtle' : {image : "static/squirtle.png", move1 : "Headbutt", move2 : "Tackle", move3: "Watergun", move4 : "Bubble", evolution : "Warturtle", power : [10, 10, 20, 10]},
'Warturtle' : {image : "static/warturtle.png", move1 : "Watergun", move2 : "Bubblebeam", move3: "Body Slam", move4 : "Ice Beam", evolution : "Blastoise", power : [20, 20, 20, 30]},
'Blastoise' : {image : "static/blastoise.png", move1 : "Hydro Pump", move2 : "Blizzard", move3: "Shell Smash", move4 : "Hydro Cannon", evolution : -1, power : [40, 50, 30, 50]},

'Charmander' : {image : "static/charmander.png", move1 : "Ember", move2 : "Scratch", move3: "Growl", move4 : "Fire Spin", evolution : "Charmeleon", power : [10, 10, 20, 10]},
'Charmeleon' : {image : "static/charmeleon.png", move1 : "Fire Spin", move2 : "Slash", move3: "Flamethrower", move4 : "Body Slam", evolution : "Charizard", power : [20, 20, 20, 30]},
'Charizard' : {image : "static/charizard.png", move1 : "Wing Attack", move2 : "Flamethrower", move3: "Fly", move4 : "Blast Burn", evolution : -1, power : [40, 50, 30, 50]},

'Bulbasaur' : {image : "static/bulbasaur.png", move1 : "Headbutt", move2 : "Leech Seed", move3: "Vine Whip", move4 : "Razor Leaf", evolution : "Ivysaur", power : [10, 10, 20, 10]},
'Ivysaur' : {image : "static/ivysaur.png", move1 : "Giga Drain", move2 : "Magical Leaf", move3: "Vine Whip", move4 : "Body Slam", evolution : "Venasaur", power : [20, 20, 20, 30]},
'Venasaur' : {image : "static/venasaur.png", move1 : "Earthquake", move2 : "Sludge Bomb", move3: "Giga Drain", move4 : "Plant Frenzy", evolution : -1, power : [40, 50, 30, 50]},

'Dratini' : {image : "static/dratini.png", move1 : "Tackle", move2 : "Dragon Breath", move3: "Splash", move4 : "Headbutt", evolution : "Dragonair", power : [10, 10, 20, 10]},
'Dragonair' : {image : "static/dragonair.png", move1 : "Aurora Beam", move2 : "Dragon Breath", move3: "Ice Beam", move4 : "Surf", evolution : "Dragonite", power : [20, 20, 20, 30]},
'Dragonite' : {image : "static/dragonite.png", move1 : "Thunder Punch", move2 : "Hyper Beam", move3: "Dragon Rush", move4 : "Fly", evolution : -1, power : [40, 50, 30, 50]},

'Ghastly' : {image : "static/ghastly.png", move1 : "Curse", move2 : "Astonish", move3: "Smog", move4 : "Shadow Sneak", evolution : "Haunter", power : [10, 10, 20, 10]},
'Haunter' : {image : "static/haunter.png", move1 : "Shadow Sneak", move2 : "Sludge Bomb", move3: "Lick", move4 : "Shadow Ball", evolution : "Gengar", power : [20, 20, 20, 30]},
'Gengar' : {image : "static/gengar.png", move1 : "Dark Pulse", move2 : "Shadow Punch", move3: "Sludge Wave", move4 : "Shadow Rush", evolution : -1, power : [40, 50, 30, 50]},


'Eevee' : {image : "static/eevee.png", move1 : "Tackle", move2 : "Headbutt", move3: "Quick Attack", move4 : "Scratch", evolution : eeveelutions[Math.floor(Math.random() * 2)], power : [10, 10, 10, 10]},
'Vaporeon' : {image : "static/vaporeon.png", move1 : "Dive", move2 : "Surf", move3: "Hydro Pump", move4 : "Ice Beam", evolution : -1, power : [30, 30, 50, 30]},
'Jolteon' : {image : "static/jolteon.png", move1 : "Quick Attack", move2 : "Signal Beam", move3: "Thunderbolt", move4 : "Volt Tackle", evolution : -1, power : [20, 30, 40, 50]},
'Flareon' : {image : "static/flareon.png", move1 : "Flame Charge", move2 : "Scorching Sands", move3: "Fire Spin", move4 : "Fire Blast", evolution : -1, power : [20, 40, 30, 50]},

'Magikarp' : {image : "static/magikarp.png", move1 : "Splash", move2 : "Flail", move3: "Tackle", move4 : "Dive", evolution : "Gyrados", power : [10, 20, 20, 30]},
'Gyrados' : {image : "static/gyrados.png", move1 : "Dragon Rush", move2 : "Waterfall", move3: "Hyperbeam", move4 : "Giga Impact", evolution : -1, power : [30, 30, 50, 40]},

'Jigglypuff' : {image : "static/jigglypuff.png", move1 : "Pound", move2 : "Sing", move3: "Uproar", move4 : "Rollout", evolution : "Wigglytuff", power : [10, 20, 30, 20]},
'Wigglytuff' : {image : "static/wigglytuff.png", move1 : "Body Slam", move2 : "Play Rough", move3: "Dazzling Gleam", move4 : "Hyper Voice", evolution : -1, power : [30, 40, 50, 40]},

'Lapras' : {image : "static/lapras.png", move1 : "Ice Beam", move2 : "Thunderbolt", move3: "Surf", move4 : "Hyper Beam", evolution : -1, power : [10, 20, 30, 50]},

'Pikachu' : {image : "static/pikachu.png", move1 : "Quick Attack", move2 : "Spark", move3: "Tail Slap", move4 : "Thunderbolt", evolution : "Raichu", power : [10, 20, 10, 40]},
'Raichu' : {image : "static/raichu.png", move1 : "Body Slam", move2 : "Iron Tail", move3: "Thunder", move4 : "Volt Tackle", evolution : -1, power : [20, 30, 50, 50]},

'Psyduck' : {image : "static/psyduck.png", move1 : "Confusion", move2 : "Water Gun", move3: "Scratch", move4 : "Ice Beam", evolution : "Golduck", power : [50, 20, 20, 30]},
'Golduck' : {image : "static/golduck.png", move1 : "Ice Beam", move2 : "Slash", move3: "Hydro Pump", move4 : "Psychic", evolution : -1, power : [40, 30, 50, 40]},

};

class Pokemon {
  constructor(name, image_name, move1, move2, move3, move4, evolution, hp, power) {    
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

    this.power1 = power[0];
    this.power2 = power[1];
    this.power3 = power[2];
    this.power4 = power[3];
  }
}

// Buttons to Keyboard Strokes

// function moveenter() {
//   var evt = new KeyboardEvent('keydown', {'keyCode':13, 'which':13}); 
//   document.dispatchEvent (evt); 
// }


// function moveleft() {
//   var evt = new KeyboardEvent('keydown', {'keyCode':37, 'which':37}); 
//   document.dispatchEvent (evt); 
// }

// function moveup() {
//   var evt = new KeyboardEvent('keydown', {'keyCode':38, 'which':38}); 
//   document.dispatchEvent (evt); 
// }


// function moveright() {
//   var evt = new KeyboardEvent('keydown', {'keyCode':39, 'which':39}); 
//   document.dispatchEvent (evt); 
// }

// function movedown() {
//   var evt = new KeyboardEvent('keydown', {'keyCode':40, 'which':40}); 
//   document.dispatchEvent (evt); 
// }

// function move1() {
//   var evt = new KeyboardEvent('keydown', {'keyCode':49, 'which':49}); 
//   document.dispatchEvent (evt); 
// }

// function move2() {
//   var evt = new KeyboardEvent('keydown', {'keyCode':50, 'which':50}); 
//   document.dispatchEvent (evt); 
// }

// function move3() {
//   var evt = new KeyboardEvent('keydown', {'keyCode':51, 'which':51}); 
//   document.dispatchEvent (evt); 
// }

// function move4() {
//   var evt = new KeyboardEvent('keydown', {'keyCode':52, 'which':52}); 
//   document.dispatchEvent (evt); 
// }

// function showMenu() {
//   var menu = document.getElementById("phone_buttons");
//   menu.style.display = "block";
// }


var in_battle = false;

var last_stroke = -1;

var current_pokemon = 0;


var text_case = "welcome";

var caught = [];
var working = false;
var champion_battle = -1;
var champion_current = -1;
var delta_x = 100;
var delta_y = 100;

window.onload = function() {
  'use strict';

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var w = document.getElementById('canvas').offsetWidth;
  var h = document.getElementById('canvas').offsetHeight;
  var terrainImageLoaded = true,
    houseImageLoaded = true,
    pokeballImageLoaded = true,
    playerImageLoaded = true;
  var objectSizes = 20;
  var speed = 100;
  var modifier = 100;
  var score = 0;

  //terrain image
  var terrainImage = new Image();
  terrainImage.src = 'static/terrain.jpg';

  //house image
  var houseImage = new Image();
  houseImage.src = 'static/house.png';

  var battleImage = new Image();
  battleImage.src = "static/battle.jpg";

  //moves
  var fire_move = new Image();
  fire_move.src = "static/moves/fire.png";
  var aggie_move = new Image();
  aggie_move.src = "static/moves/aggie-rudy.png";
  var angel_move = new Image();
  angel_move.src = "static/moves/angel.png";
  var bella_move = new Image();
  bella_move.src = "static/moves/bella.png";
  var billie_move = new Image();
  billie_move.src = "static/moves/billie.png";
  var dak_move = new Image();
  dak_move.src = "static/moves/dak.png";
  var kody_move = new Image();
  kody_move.src = "static/moves/kody.png";
  var lazlo_move = new Image();
  lazlo_move.src = "static/moves/lazlo.png";
  var macy_move = new Image();
  macy_move.src = "static/moves/macy.png";
  var maya_move = new Image();
  maya_move.src = "static/moves/maya.png";
  var nugget_move = new Image();
  nugget_move.src = "static/moves/nugget.png";
  var ryan_move = new Image();
  ryan_move.src = "static/moves/ryan.png";
  var toy_move = new Image();
  toy_move.src = "static/moves/toy.png";

  var moves = {
  'Jenna' : billie_move,
  'Maddie' : kody_move,

  'Hannah' : angel_move,
  'Colton' : angel_move,

  'Owen' : toy_move,
  'Allie' : fire_move,

  'Matthew' : fire_move,
  'William' : fire_move,

  'Olivia' : nugget_move,
  'Julia' : nugget_move,

  'Anna' : macy_move,
  'Leah' : maya_move,
  'Schwetty' : ryan_move,

  'Ryan' : dak_move,
  'Kyle' : dak_move,
  'Holly' : dak_move,

  'Angela' : bella_move,
  'Chris' : bella_move,
  'Anthony' : bella_move,

  'Finn' : aggie_move,
  'Jude' : aggie_move,
  'Aidan' : lazlo_move,

  'Haven' : fire_move,
  'Jack' : fire_move,
  'Cole' : fire_move,

  'Lil Kody' : kody_move,
  'Kody' : kody_move,

  };


  //main sound
  var mainTheme = new Audio('static/main.mp3');
  mainTheme.loop = true;
  mainTheme.volume = .5;


  var battleTheme = new Audio('static/battle.mp3');
  battleTheme.loop = true;
  battleTheme.volume = .5;

  var evolutionTheme = new Audio('static/evolution.mp3');
  evolutionTheme.loop = false;
  evolutionTheme.volume = .5;

  //pokeball-selection
  var pokePick = new Audio('static/pickup.mp3');
  pokePick.volume = 0.8;

  //pokeball-selection
  var wildFind = new Audio('static/wild.mp3');
  wildFind.volume = 0.8;

  //player image
  var playerImage = new Image();
  playerImage.src = 'static/player.png';

  //pokeball image
  var pokeballImage = new Image();
  pokeballImage.src = 'static/pokeball.png';

  //pokeball-selection
  var winnerAudio = new Audio('static/winner.mp3');
  winnerAudio.volume = 0.8;

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


var attack = {
    image: fire_move,
    x: 100,
    y: 100,
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
    let pokemon_object = new Pokemon(name, poke["image"], poke["move1"], poke["move2"], poke["move3"], poke["move4"], poke["evolution"], 100, poke["power"]);
    wild_pokemon.who = pokemon_object
    console.log(wild_pokemon.who)
  };

  wild_pokemon.generateWild();

  var last_direction;
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
    last_direction = direction;
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
      wildFind.currentTime = 0;
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

        if (caught[0].evolution == -1 && caught[1].evolution == -1 && caught[2].evolution == -1 && caught[3].evolution == -1 && caught[4].evolution == -1 && caught[5].evolution == -1) {
          text_case = "ready"
          last_stroke = -1;
        } else {
          text_case = "notready";
          last_stroke = -1;
        }
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
              opponent_strength = wild_pokemon.who.power1;
              break;
            case 1:
              opponent_move = wild_pokemon.who.move2;
              opponent_strength = wild_pokemon.who.power2;
              break;
            case 2:
              opponent_move = wild_pokemon.who.move3;
              opponent_strength = wild_pokemon.who.power3;
              break;
            case 3:
              opponent_move = wild_pokemon.who.move4;
              opponent_strength = wild_pokemon.who.power4;
              break;
            default:
              break;
            }

          if (last_stroke == 49) {
            battle_text = "move";
            your_strength = caught[current_pokemon].power1;
            move = caught[current_pokemon].move1;
            caught[current_pokemon].hp -= opponent_strength;
            wild_pokemon.who.hp -= your_strength;
          } else if (last_stroke == 50) {
            battle_text = "move";
            your_strength = caught[current_pokemon].power2;
            move = caught[current_pokemon].move2;
            caught[current_pokemon].hp -= opponent_strength;
            wild_pokemon.who.hp -= your_strength;
          } else if (last_stroke == 51) {
            battle_text = "move";
            your_strength = caught[current_pokemon].power3;
            move = caught[current_pokemon].move3;
            caught[current_pokemon].hp -= opponent_strength;
            wild_pokemon.who.hp -= your_strength;
          } else if (last_stroke == 52) {
            battle_text = "move";
            your_strength = caught[current_pokemon].power4;
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

          ctx.fillText(`${caught[current_pokemon].name} used ${move}!`, 20, h - 100);
          ctx.fillText(`${wild_pokemon.who.name} lost ${your_strength} HP!`, 20, h - 75);
          ctx.fillText(`${wild_pokemon.who.name} used ${opponent_move}!`, 20, h - 50);
          ctx.fillText(`${caught[current_pokemon].name} lost ${opponent_strength} HP!`, 20, h - 25);

          if (last_stroke == 13) {

              last_stroke = -1;

              if (wild_pokemon.who.hp <= 0) {
                if (champion_current != -1 && champion_current < 5) {
                  champion_current += 1;
                  let poke = pokemon_data[boss_names[champion_current]];
                  let new_pokemon = new Pokemon(boss_names[champion_current], poke["image"], poke["move1"], poke["move2"], poke["move3"], poke["move4"], poke["evolution"], 100, poke["power"]);
                  old_name = wild_pokemon.who.name;
                  wild_pokemon.who = new_pokemon;
                  battle_text = "next_opponent";

                } else if (champion_current >= 5) {
                    battle_text = "champion_beaten";
                } else {
                    battle_text = "faint";
                }
                  if (caught[current_pokemon].exp < 3) {
                    caught[current_pokemon].exp += 1;
                  }
              } else if (caught[current_pokemon].hp <= 0) {
                if (champion_battle > 0) {
                    battle_text = "next";
                    last_stroke = -1;
                } else {
                    battle_text = "lose";
                }
              } else {
                battle_text = "choose";
              }
            
          }
          break;


        case "next_opponent":
          ctx.fillText(`${old_name} fainted!`, 20, h - 100);
          ctx.fillText(`The Champion sent out ${wild_pokemon.who.name}!`, 20, h - 75);
          if (last_stroke == 13) {
            last_stroke = -1;
            battle_text = "choose";
          }
          break;

        case "champion_beaten":
          ctx.fillText(`${wild_pokemon.who.name} fainted! You defeated the Champion!`, 20, h - 100);
          if (last_stroke == 13) {
            last_stroke = -1;
            battle_text = "battle_done";
          }
          break;

        case "faint":
          ctx.fillText(`${wild_pokemon.who.name} fainted!`, 20, h - 100);
          ctx.fillText(`${caught[current_pokemon].name} gained 1 experience point!`, 20, h - 65);

          if (last_stroke == 13) {
            if (caught[current_pokemon].exp >= 3 && caught[current_pokemon].evolution != -1) {
                old_image = caught[current_pokemon].largeimage;
                old_name = caught[current_pokemon].name;
                let poke = pokemon_data[caught[current_pokemon].evolution];
                let new_pokemon = new Pokemon(caught[current_pokemon].evolution, poke["image"], poke["move1"], poke["move2"], poke["move3"], poke["move4"], poke["evolution"], 100, poke["power"]);
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
            last_stroke = -1;
            battle_text = "battle_done";
            flip = 0;
          }
          break;

        case "lose":
          ctx.fillText(`${caught[current_pokemon].name} fainted! You ran away!`, 20, h - 100);
          if (last_stroke == 13) {
            last_stroke = -1;
            battle_text = "battle_done";
          }
          break;

        case "next":
          ctx.fillText(`${caught[current_pokemon].name} fainted!`, 20, h - 100);
          ctx.fillText(`Press enter to send out your next Pokémon!`, 20, h - 65);

          if (last_stroke != -1) {
            current_pokemon += 1;
            champion_battle -= 1;
            if (current_pokemon == 6) {
              current_pokemon = 0;
            }
            last_stroke = -1;
            battle_text = "choose";
          }
          break;

        case "battle_done":
            text_case = "welcome";
            if (champion_battle != -1) {
              if (champion_battle != 0) {
                text_case = "winner";
              }
              champion_battle = -1;
            }
            last_stroke = -1;
            caught[current_pokemon].hp = 100;
            in_battle = false;
            refreshIntervalId = setInterval(update, 100);
            clearInterval(refreshIntervalId_battle);
            battleTheme.pause();
            mainTheme.play();
            update();
            wild_pokemon.generateWild();
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



    attack.x += delta_x;
    attack.y += delta_y;

    if (
      (attack.x > 3 && attack.x < 9 && attack.y == 6) || (attack.x > 4 && attack.x < 9 && (attack.y == 5 || attack.y == 4 || attack.y == 3)) ||
      attack.x < 1 ||
      attack.x > 20 ||
      attack.y < 3 ||
      attack.y > 16 ||
      (attack.y > 0 && attack.y < 4 && (attack.x == 20 || attack.x == 19)) || //right corner
      (attack.y > 0 && attack.y < 4 && (attack.x == 2 || attack.x == 3)) || //left corner
      (attack.y > 18 && (attack.x == 2 || attack.x == 3)) || //left corner
      (attack.x > 17 && (attack.y == 19 || attack.y == 20)) || //left corner
      (attack.x > 19 && (attack.y == 17 || attack.y == 18)) //left corner 2
    ) {
      attack.x = 100;
      attack.y = 100;
    }


    if (attack.x == wild_pokemon.x && attack.y == wild_pokemon.y) {
      wildFind.pause();
      wildFind.currentTime = 0;
      wildFind.play();
      attack.x = 100;
      attack.y = 100;
      wild_pokemon.generateWild();
    }


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
      if (caught[current_pokemon].name in moves) { 
        console.log(caught[current_pokemon].name + "is in moves!")
        attack.image = moves[caught[current_pokemon].name];
       } else {
        console.log(caught[current_pokemon].name + "is NOT in moves!")
        attack.image = fire_move;
       }
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
          if (caught.length >= 1) {
            ctx.fillText('Press the space bar to switch between your partner Pokémon!', 10, h - 35);
            ctx.fillText('Press x to tell your partner to attack!', 10, h - 15);
          }
          working = false;
          break;
        
        case "used_move":
          ctx.fillText(`${caught[current_pokemon].name} used ${caught[current_pokemon].move4}!`, 10, h - 75);
            if (last_stroke != -1) {
              text_case = "welcome";
              last_stroke = -1
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
          ctx.fillText("You need to get stronger before you challenge the champion.", 10, h - 55);
          if (last_stroke != -1) {
            text_case = "welcome";
          }
          break;

        case "ready":
          ctx.fillText("This is the home of the champion... are you sure you're ready?", 10, h - 75);
          ctx.fillText("Press enter to challenge the champion or escape to wait.", 10, h - 55);
            if (last_stroke == 13) {
                last_stroke = -1;
                text_case = "champion";
              } else if (last_stroke != -1) {
                text_case = "welcome";
              } 
          break;

        case "champion":
          ctx.fillText("LETS GO!", 10, h - 75);
          if (last_stroke != -1) {
              in_battle = true;
              clearInterval(refreshIntervalId);
              refreshIntervalId_battle = setInterval(battle, 500);
              mainTheme.pause();
              battleTheme.play();
              champion_battle = 5;
              champion_current = 0;
              battle_text = "choose";
              last_stroke = -1;
              let poke = pokemon_data[boss_names[champion_current]];
              let new_pokemon = new Pokemon(boss_names[champion_current], poke["image"], poke["move1"], poke["move2"], poke["move3"], poke["move4"], poke["evolution"], 100, poke["power"]);
              wild_pokemon.who = new_pokemon;
              battle();
              text_case = "winner";
          }
          break;

        case "winner":
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          mainTheme.pause();
          winnerAudio.play();
          var winnerGIF = document.getElementById("winner");
          winnerGIF.style.display = "block";
          break;

        default:
          break;
          // code block
      }

    // Draw Move
    ctx.drawImage(
      attack.image,
      0,
      0,
      30,
      30,
      attack.x * objectSizes,
      attack.y * objectSizes,
      30,
      30
    );

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
      pokeball.generatePosition();
      wild_pokemon.generateWild();
      document.getElementById("loading").height = "0";
      sleep(2000);
      refreshIntervalId = setInterval(update, 100);
      update();
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
      } else if (e.keyCode == '88' && caught.length > 0) {        

        attack.x = player.x;
        attack.y = player.y;
        switch (last_direction) {
          case 'left':
            delta_x = -1;
            delta_y = 0;
            break;
          case 'right':
            delta_x = 1;
            delta_y = 0;
            break;
          case 'up':
            delta_x = 0;
            delta_y = -1;
            break;
          case 'down':
            delta_x = 0;
            delta_y = 1;
            break;
          default:
            break;
        }
        text_case = "used_move";
        last_stroke = -1;
      }
    }

    if (in_battle) {
      battle();
    } else {
      mainTheme.play();
      update();
    }
  };

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

assetsLoaded()
// caught.push(wild_pokemon.who);
// wild_pokemon.generateWild();
// caught.push(wild_pokemon.who);
// wild_pokemon.generateWild();
// caught.push(wild_pokemon.who);
// wild_pokemon.generateWild();
// caught.push(wild_pokemon.who);
// wild_pokemon.generateWild();
// caught.push(wild_pokemon.who);
// wild_pokemon.generateWild();
// caught.push(wild_pokemon.who);
// wild_pokemon.generateWild();
// caught.push(wild_pokemon.who);
// caught.push(wild_pokemon.who);
// caught.push(wild_pokemon.who);
// caught.push(wild_pokemon.who);

};

