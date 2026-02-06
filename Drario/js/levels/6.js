if (typeof Mario === 'undefined')
  window.Mario = {};

var six = Mario.six = function() {
  console.log('Level 6 - Mountain Peak!');
  level = new Mario.Level({
    playerPos: [56,192],
    loader: Mario.seven,
    background: "#9932CC",
    scrolling: true,
    invincibility: [144, 192, 240],
    exit: 250,
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
    level.putFloor(loc[0],loc[1]);
  });

  // LEVEL 6: Mountain Peak - high altitude climbing with brutal jumps
  
  // Start: get mushroom
  level.putQBlock(8, 8, new Mario.Mushroom([128, 128]));
  level.putBrick(10, 8, null);
  
  // Section 1: Steep climb
  level.putBrick(16, 7, null);
  level.putBrick(17, 6, null);
  level.putBrick(18, 5, null);
  level.putBrick(19, 4, null);
  level.putBrick(20, 3, null);
  level.putQBlock(21, 2, new Mario.fireflower([336, 32]));
  
  // Section 2: Descent with gaps
  level.putBrick(30, 3, null);
  level.putBrick(32, 4, null);
  level.putBrick(34, 5, null);
  level.putBrick(36, 6, null);
  level.putBrick(38, 7, null);
  level.putQBlock(40, 8, new Mario.Mushroom([640, 128]));
  
  // Section 3: Platform hopping
  level.putBrick(50, 6, null);
  level.putBrick(53, 6, null);
  level.putBrick(56, 6, null);
  level.putBrick(59, 6, null);
  level.putBrick(62, 6, null);
  level.putQBlock(65, 5, new Mario.fireflower([1040, 80]));
  
  // Section 4: Zigzag
  level.putBrick(75, 3, null);
  level.putBrick(76, 4, null);
  level.putBrick(77, 5, null);
  level.putBrick(78, 6, null);
  level.putBrick(79, 7, null);
  level.putBrick(80, 8, null);
  level.putQBlock(81, 9, new Mario.Mushroom([1296, 144]));
  
  // Section 5: Descending pairs
  level.putBrick(90, 5, null);
  level.putBrick(90, 8, null);
  level.putBrick(95, 4, null);
  level.putBrick(95, 7, null);
  level.putBrick(100, 3, null);
  level.putBrick(100, 6, null);
  level.putQBlock(105, 2, new Mario.fireflower([1680, 32]));
  
  // Section 6: Spike gauntlet
  level.putBrick(120, 8, null);
  level.putBrick(121, 8, null);
  level.putBrick(123, 8, null);
  level.putBrick(124, 8, null);
  level.putBrick(126, 8, null);
  level.putBrick(127, 8, null);
  level.putBrick(129, 8, null);
  level.putBrick(130, 8, null);
  level.putQBlock(132, 7, new Mario.Mushroom([2112, 112]));
  
  // Section 7: Peak climb
  level.putBrick(145, 6, null);
  level.putBrick(146, 5, null);
  level.putBrick(147, 4, null);
  level.putBrick(148, 3, null);
  level.putBrick(149, 2, null);
  level.putQBlock(150, 1, new Mario.fireflower([2400, 16]));
  
  // Section 8: Descent to exit
  level.putBrick(160, 2, null);
  level.putBrick(161, 3, null);
  level.putBrick(162, 4, null);
  level.putBrick(163, 5, null);
  level.putBrick(164, 6, null);
  level.putBrick(165, 7, null);
  level.putBrick(166, 8, null);
  
  level.putBrick(200, 9, null);
  level.putBrick(201, 9, null);
  level.putBrick(202, 9, null);
  level.putFlagpole(250);
  level.putWall(237, 13, 1);
  level.putFlagpole(248);

  for(var i = 35; i < 250; i += 10) {
    level.putGoomba(i, 12);
    level.putGoomba(i+3, 12);
    if(i % 20 === 35) level.putKoopa(i+6, 11);
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
