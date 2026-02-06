var requestAnimFrame = (function(){
  return window.requestAnimationFrame       ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function(callback){
      window.setTimeout(callback, 1000 / 60);
    };
})();

//create the canvas
var canvas;
var ctx;
var updateables = [];
var fireballs = [];
var player;

function initializeCanvas() {
  canvas = document.createElement("canvas");
  ctx = canvas.getContext('2d');
  canvas.width = 762;
  canvas.height = 720;
  ctx.scale(3,3);
  document.body.appendChild(canvas);
}

//we might have to get the size and calculate the scaling
//but this method should let us make it however big.
//Cool!
//TODO: Automatically scale the game to work and look good on widescreen.
//TODO: fiddling with scaled sprites looks BETTER, but not perfect. Hmm.

//viewport
var vX = 0,
    vY = 0,
    vWidth = 256,
    vHeight = 240;

//load our images
resources.load([
  'sprites/player.png',
  'sprites/enemy.png',
  'sprites/tiles.png',
  'sprites/playerl.png',
  'sprites/items.png',
  'sprites/enemyr.png',
]);

resources.onReady(init);
var level;
var sounds;
var music;

//initialize
var lastTime;
function init() {
  music = {
    overworld: new Audio('sounds/aboveground_bgm.ogg'),
    underground: new Audio('sounds/underground_bgm.ogg'),
    clear: new Audio('sounds/stage_clear.wav'),
    death: new Audio('sounds/mariodie.wav')
  };
  sounds = {
    smallJump: new Audio('sounds/jump-small.wav'),
    bigJump: new Audio('sounds/jump-super.wav'),
    breakBlock: new Audio('sounds/breakblock.wav'),
    bump: new Audio('sounds/bump.wav'),
    coin: new Audio('sounds/coin.wav'),
    fireball: new Audio('sounds/fireball.wav'),
    flagpole: new Audio('sounds/flagpole.wav'),
    kick: new Audio('sounds/kick.wav'),
    pipe: new Audio('sounds/pipe.wav'),
    itemAppear: new Audio('sounds/itemAppear.wav'),
    powerup: new Audio('sounds/powerup.wav'),
    stomp: new Audio('sounds/stomp.wav')
  };
  
  // Set up level select buttons
  document.getElementById('level1Button').addEventListener('click', function() {
    console.log('Level 1 clicked, Mario.oneone:', Mario.oneone);
    startLevel(Mario.oneone);
  });
  document.getElementById('level2Button').addEventListener('click', function() {
    console.log('Level 2 clicked, Mario.two:', Mario.two);
    startLevel(Mario.two);
  });
  document.getElementById('level3Button').addEventListener('click', function() {
    console.log('Level 3 clicked, Mario.three:', Mario.three);
    startLevel(Mario.three);
  });
  document.getElementById('level4Button').addEventListener('click', function() {
    console.log('Level 4 clicked, Mario.four:', Mario.four);
    startLevel(Mario.four);
  });
  document.getElementById('level5Button').addEventListener('click', function() {
    console.log('Level 5 clicked, Mario.five:', Mario.five);
    startLevel(Mario.five);
  });
  document.getElementById('level6Button').addEventListener('click', function() {
    console.log('Level 6 clicked, Mario.six:', Mario.six);
    startLevel(Mario.six);
  });
  document.getElementById('level7Button').addEventListener('click', function() {
    console.log('Level 7 clicked, Mario.seven:', Mario.seven);
    startLevel(Mario.seven);
  });
  document.getElementById('level8Button').addEventListener('click', function() {
    console.log('Level 8 clicked, Mario.eight:', Mario.eight);
    startLevel(Mario.eight);
  });
  document.getElementById('level9Button').addEventListener('click', function() {
    console.log('Level 9 clicked, Mario.nine:', Mario.nine);
    startLevel(Mario.nine);
  });
  document.getElementById('level10Button').addEventListener('click', function() {
    console.log('BOSS LEVEL clicked, Mario.ten:', Mario.ten);
    startLevel(Mario.ten);
  });
}

var gameStarted = false;

function startLevel(levelFunction) {
  console.log('startLevel called with:', levelFunction);
  
  // Initialize canvas and player on first start
  if (!gameStarted) {
    initializeCanvas();
    player = new Mario.Player([0,0]);
    gameStarted = true;
  }
  
  // Reset game state for new level
  updateables = [];
  fireballs = [];
  vX = 0;
  vY = 0;
  gameTime = 0;
  
  // Hide level select menu
  document.getElementById('levelSelect').classList.add('hidden');
  
  // Load the selected level
  try {
    levelFunction();
    console.log('Level loaded, level object:', level);
  } catch(e) {
    console.error('Error loading level:', e);
    return;
  }
  
  lastTime = Date.now();
  
  // Start the game loop if not already running
  if (!window.gameLoopRunning) {
    window.gameLoopRunning = true;
    main();
  }
}

var gameTime = 0;
// track previous Z state for press toggles
var _zPrev = false;

//set up the game loop
function main() {
  var now = Date.now();
  var dt = (now - lastTime) / 1000.0;

  update(dt);
  render();

  lastTime = now;
  requestAnimFrame(main);
}

function update(dt) {
  gameTime += dt;

  handleInput(dt);
  updateEntities(dt, gameTime);

  checkCollisions();
}

function handleInput(dt) {
  if (player.piping || player.dying || player.noInput) return; //don't accept input

  if (input.isDown('RUN')){
    player.run();
  } else {
    player.noRun();
  }
  if (input.isDown('JUMP')) {
    player.jump();
  } else {
    //we need this to handle the timing for how long you hold it
    player.noJump();
  }

  // Flying: set flying state from 'P' key (hold-to-fly)
  if (input.isDown('P')) {
    player.flying = true;
    // when flying, cancel jump hold behavior
    player.noJump();
  } else {
    player.flying = false;
  }

  if (input.isDown('DOWN')) {
    player.crouch();
  } else {
    player.noCrouch();
  }

  if (input.isDown('LEFT')) { // 'd' or left arrow
    player.moveLeft();
  }
  else if (input.isDown('RIGHT')) { // 'k' or right arrow
    player.moveRight();
  } else {
    player.noWalk();
  }

  // Shoot fireball while holding 'A' (uses player.shoot limits)
  if (input.isDown('A')) {
    player.shoot();
  }

  // Z behavior: supporting both hold-to-invincible and press-to-toggle
  var zDown = input.isDown('Z');

  // Edge: on key press (down now, up previously) toggle persistent invincibility
  if (zDown && !_zPrev) {
    player.invincibilityToggle = !player.invincibilityToggle;
    if (player.invincibilityToggle) {
      // persistent invincibility until toggled off
      player.invincibility = 6000;
    } else {
      player.invincibility = 0;
    }
  }

  // While Z is held, also give short invincibility (hold-to-be-invincible)
  if (zDown) {
    player.invincibility = Math.max(player.invincibility, 10);
  } else {
    // only clear hold-based invincibility when not toggled on
    if (!player.invincibilityToggle) {
      if (player.invincibility > 0) player.invincibility = 0;
    }
  }

  _zPrev = zDown;
}

//update all the moving stuff
function updateEntities(dt, gameTime) {
  player.update(dt, vX);
  updateables.forEach (function(ent) {
    ent.update(dt, gameTime);
  });

  //This should stop the jump when he switches sides on the flag.
  if (player.exiting) {
    if (player.pos[0] > vX + 96)
      vX = player.pos[0] - 96
  }else if (level.scrolling && player.pos[0] > vX + 80) {
    vX = player.pos[0] - 80;
  }

  // Boundary clamps: prevent player leaving the playable area
  // left bound already handled in player.update, ensure top bound
  if (player.pos[1] < 0) {
    player.pos[1] = 0;
    player.vel[1] = Math.max(0, player.vel[1]);
  }
  // right bound: if level.exit is defined, prevent passing it
  if (typeof level.exit !== 'undefined' && level.exit !== null) {
    var maxX = level.exit * 16;
    if (player.pos[0] > maxX) {
      player.pos[0] = maxX;
      player.vel[0] = Math.min(0, player.vel[0]);
    }
  }

  if (player.powering.length !== 0 || player.dying) { return; }
  level.items.forEach (function(ent) {
    ent.update(dt);
  });

  level.enemies.forEach (function(ent) {
    ent.update(dt, vX);
  });

  fireballs.forEach(function(fireball) {
    fireball.update(dt);
  });
  level.pipes.forEach (function(pipe) {
    pipe.update(dt);
  });
}

//scan for collisions
function checkCollisions() {
  if (player.powering.length !== 0 || player.dying) { return; }
  player.checkCollisions();

  //Apparently for each will just skip indices where things were deleted.
  level.items.forEach(function(item) {
    item.checkCollisions();
  });
  level.enemies.forEach (function(ent) {
    ent.checkCollisions();
  });
  fireballs.forEach(function(fireball){
    fireball.checkCollisions();
  });
  level.pipes.forEach (function(pipe) {
    pipe.checkCollisions();
  });
}

//draw the game!
function render() {
  updateables = [];
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = level.background;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  //scenery gets drawn first to get layering right.
  for(var i = 0; i < 15; i++) {
    for (var j = Math.floor(vX / 16) - 1; j < Math.floor(vX / 16) + 20; j++){
      if (level.scenery[i][j]) {
        renderEntity(level.scenery[i][j]);
      }
    }
  }

  //then items
  level.items.forEach (function (item) {
    renderEntity(item);
  });

  level.enemies.forEach (function(enemy) {
    renderEntity(enemy);
  });



  fireballs.forEach(function(fireball) {
    renderEntity(fireball);
  })

  //then we draw every static object.
  for(var i = 0; i < 15; i++) {
    for (var j = Math.floor(vX / 16) - 1; j < Math.floor(vX / 16) + 20; j++){
      if (level.statics[i][j]) {
        renderEntity(level.statics[i][j]);
      }
      if (level.blocks[i][j]) {
        renderEntity(level.blocks[i][j]);
        updateables.push(level.blocks[i][j]);
      }
    }
  }

  //then the player
  // draw the player normally; keep fully visible while Z is held
  if (player.invincibility % 2 === 0 || input.isDown('Z')) {
    renderEntity(player);
  }

  //Mario goes INTO pipes, so naturally they go after.
  level.pipes.forEach (function(pipe) {
    renderEntity(pipe);
  });
}

function renderEntity(entity) {
  entity.render(ctx, vX, vY);
}
