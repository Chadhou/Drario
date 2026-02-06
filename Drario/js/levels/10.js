if (typeof Mario === 'undefined')
  window.Mario = {};

var ten = Mario.ten = function() {
  console.log('Level 10 - ULTIMATE GAUNTLET!!!');
  level = new Mario.Level({
    playerPos: [56,192],
    loader: Mario.ten,
    background: "#9c0000",
    scrolling: true,
    invincibility: [144, 192, 240],
    exit: 300,
    floorSprite:  new Mario.Sprite('sprites/tiles.png', [0,0],[16,16],0),
    cloudSprite:  new Mario.Sprite('sprites/tiles.png', [0,320],[48,32],0),
    wallSprite: new Mario.Sprite('sprites/tiles.png', [0, 16],[16,16],0),
    brickSprite: new Mario.Sprite('sprites/tiles.png', [16, 0], [16,16], 0),
    brickBounceSprite: new Mario.Sprite('sprites/tiles.png',[32,0],[16,16],0),
    rubbleSprite: function () {
      return new Mario.Sprite('sprites/items.png', [64,0], [8,8], 3, [0,1])
    },
    ublockSprite: new Mario.Sprite('sprites/tiles.png', [48, 0], [16,16],0),
    superShroomSprite: new Mario.Sprite('sprites/items.png', [0,0], [16,16], 0),
    fireFlowerSprite: new Mario.Sprite('sprites/items.png', [0,32], [16,16], 20, [0,1,2,3]),
    starSprite: new Mario.Sprite('sprites/items.png', [0,48], [16,16], 20, [0,1,2,3]),
    pipeLEndSprite: new Mario.Sprite('sprites/tiles.png', [0, 128], [16,16], 0),
    pipeREndSprite: new Mario.Sprite('sprites/tiles.png', [16, 128], [16,16], 0),
    pipeLMidSprite: new Mario.Sprite('sprites/tiles.png', [0, 144], [16,16], 0),
    pipeRMidSprite: new Mario.Sprite('sprites/tiles.png', [16, 144], [16,16], 0),
    pipeUpMid: new Mario.Sprite('sprites/tiles.png', [0, 144], [32,16], 0),
    pipeSideMid: new Mario.Sprite('sprites/tiles.png', [48, 128], [16,32], 0),
    pipeLeft: new Mario.Sprite('sprites/tiles.png', [32, 128], [16,32], 0),
    pipeTop: new Mario.Sprite('sprites/tiles.png', [0, 128], [32,16], 0),
    qblockSprite: new Mario.Sprite('sprites/tiles.png', [384, 0], [16,16], 8, [0,0,0,0,1,2,1]),
    bcoinSprite: function() {
      return new Mario.Sprite('sprites/items.png', [0,112],[16,16], 20,[0,1,2,3]);
    },
    cloudSprites:[
      new Mario.Sprite('sprites/tiles.png', [0,320],[16,32],0),
      new Mario.Sprite('sprites/tiles.png', [16,320],[16,32],0),
      new Mario.Sprite('sprites/tiles.png', [32,320],[16,32],0)
    ],
    hillSprites: [
      new Mario.Sprite('sprites/tiles.png', [128,128],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [144,128],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [160,128],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [128,144],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [144,144],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [160,144],[16,16],0)
    ],
    bushSprite: new Mario.Sprite('sprites/tiles.png', [176, 144], [48, 16], 0),
    bushSprites: [
     new Mario.Sprite('sprites/tiles.png', [176,144], [16,16],0),
     new Mario.Sprite('sprites/tiles.png', [192,144], [16,16],0),
     new Mario.Sprite('sprites/tiles.png', [208,144], [16,16],0)],
    goombaSprite: function() {
      return new Mario.Sprite('sprites/enemy.png', [0, 16], [16,16], 3, [0,1]);
    },
    koopaSprite: function() {
      return new Mario.Sprite('sprites/enemy.png', [96,0], [16,32], 2, [0,1]);
    },
    flagPoleSprites: [
      new Mario.Sprite('sprites/tiles.png', [256, 128], [16,16], 0),
      new Mario.Sprite('sprites/tiles.png', [256, 144], [16,16], 0),
      new Mario.Sprite('sprites/items.png', [128, 32], [16,16], 0)
    ]
  });

  ground = [[0, 300]];
  player.pos[0] = level.playerPos[0];
  player.pos[1] = level.playerPos[1];
  vX = 0;

  ground.forEach(function(loc) {
    level.putFloor(loc[0], loc[1]);
  });

  // Insanely hard gauntlet with narrow platforms and dense enemy spawning
  
  // Section 1: Narrow spike gauntlet
  level.putBrick(15, 9, null);
  level.putBrick(16, 9, null);
  level.putBrick(18, 9, null);
  level.putBrick(19, 9, null);
  level.putBrick(21, 9, null);
  level.putBrick(22, 9, null);
  level.putBrick(24, 9, null);
  level.putBrick(25, 9, null);
  level.putBrick(27, 9, null);
  level.putBrick(28, 9, null);
  
  // Section 2: Ascending stairs with enemies everywhere
  level.putBrick(32, 8, null);
  level.putBrick(33, 8, null);
  level.putBrick(34, 7, null);
  level.putBrick(35, 7, null);
  level.putBrick(36, 6, null);
  level.putBrick(37, 6, null);
  level.putBrick(38, 5, null);
  level.putBrick(39, 5, null);
  level.putQBlock(40, 4, new Mario.fireflower([640, 64]));
  
  // Section 3: Jump challenge gauntlet
  level.putBrick(45, 8, null);
  level.putBrick(47, 7, null);
  level.putBrick(49, 6, null);
  level.putBrick(51, 5, null);
  level.putBrick(53, 4, null);
  level.putBrick(55, 3, null);
  level.putBrick(57, 4, null);
  level.putBrick(59, 5, null);
  level.putBrick(61, 6, null);
  level.putBrick(63, 7, null);
  level.putBrick(65, 8, null);
  
  // Section 4: Platform maze
  level.putBrick(70, 6, null);
  level.putBrick(71, 6, null);
  level.putBrick(75, 5, null);
  level.putBrick(76, 5, null);
  level.putBrick(80, 4, null);
  level.putBrick(81, 4, null);
  level.putQBlock(85, 3, new Mario.Mushroom([1360, 48]));
  level.putBrick(90, 4, null);
  level.putBrick(91, 4, null);
  
  // Section 5: Narrow bridge of death
  level.putBrick(100, 7, null);
  level.putBrick(101, 7, null);
  level.putBrick(102, 7, null);
  level.putBrick(103, 7, null);
  level.putBrick(104, 7, null);
  level.putBrick(105, 7, null);
  level.putBrick(106, 7, null);
  level.putBrick(107, 7, null);
  level.putBrick(108, 7, null);
  level.putBrick(109, 7, null);
  
  // Section 6: Crazy jumps
  level.putBrick(115, 8, null);
  level.putBrick(118, 6, null);
  level.putBrick(121, 4, null);
  level.putBrick(124, 2, null);
  level.putBrick(127, 4, null);
  level.putBrick(130, 6, null);
  level.putBrick(133, 8, null);
  
  // Section 7: Dense platform section
  level.putBrick(140, 5, null);
  level.putBrick(141, 5, null);
  level.putBrick(143, 4, null);
  level.putBrick(144, 4, null);
  level.putBrick(146, 3, null);
  level.putBrick(147, 3, null);
  level.putBrick(149, 2, null);
  level.putBrick(150, 2, null);
  level.putQBlock(152, 1, new Mario.fireflower([2432, 16]));
  
  // Section 8: Final descent with tricky platforming
  level.putBrick(160, 2, null);
  level.putBrick(161, 2, null);
  level.putBrick(163, 3, null);
  level.putBrick(164, 3, null);
  level.putBrick(166, 4, null);
  level.putBrick(167, 4, null);
  level.putBrick(169, 5, null);
  level.putBrick(170, 5, null);
  level.putBrick(172, 6, null);
  level.putBrick(173, 6, null);
  
  // Section 9: Sprint to finish
  level.putBrick(180, 8, null);
  level.putBrick(181, 8, null);
  level.putBrick(182, 8, null);
  level.putBrick(183, 8, null);
  level.putBrick(184, 8, null);
  level.putBrick(185, 8, null);
  level.putBrick(186, 7, null);
  level.putBrick(187, 7, null);
  level.putBrick(188, 6, null);
  level.putBrick(189, 6, null);
  level.putFlagpole(200);
  
  // MASSIVE ENEMY GAUNTLET - UNRELENTING
  // Spawn enemies everywhere, constantly
  for(var i = 20; i <= 200; i++) {
    if(i % 2 === 0) {
      level.putGoomba(i, 12);
      level.putGoomba(i+1, 12);
    }
    if(i % 3 === 0) {
      level.putKoopa(i, 11);
    }
    if(i % 5 === 0) {
      level.putGoomba(i, 10);
    }
  }

  music.underground.pause();
  music.overworld.play();
  
  player.exiting = false;
  player.flagging = false;
  player.piping = false;
  player.dying = false;
  player.noInput = false;
  player.vel = [0, 0];
  player.acc = [0, 0];
  player.jumping = 0;
  player.sprite.size = player.power===0 ? [16,16] : [16,32];
};
