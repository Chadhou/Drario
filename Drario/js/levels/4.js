if (typeof Mario === 'undefined')
  window.Mario = {};

var four = Mario.four = function() {
  console.log('Level 4 - Lava Zone!');
  level = new Mario.Level({
    playerPos: [56,192],
    loader: Mario.five,
    background: "#CC5500",
    scrolling: true,
    invincibility: [144, 192, 240],
    exit: 230,
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

  ground = [[0,70],[50,85],[120,140],[190,210]];
  player.pos[0] = level.playerPos[0];
  player.pos[1] = level.playerPos[1];
  vX = 0;

  ground.forEach(function(loc) {
    level.putFloor(loc[0],loc[1]);
  });

  // LEVEL 4: Lava Fortress - tight platforming challenges over gaps
  
  level.putBrick(10, 9, null);
  level.putBrick(11, 9, null);
  level.putQBlock(12, 8, new Mario.Mushroom([192, 128]));
  
  // Narrow gaps - must time jumps
  level.putBrick(20, 9, null);
  level.putBrick(22, 9, null);
  level.putBrick(24, 9, null);
  level.putBrick(26, 9, null);
  level.putQBlock(28, 8, new Mario.fireflower([448, 128]));
  level.putBrick(30, 9, null);
  
  // Rising mountain
  level.putBrick(38, 8, null);
  level.putBrick(39, 7, null);
  level.putBrick(40, 6, null);
  level.putBrick(41, 5, null);
  level.putQBlock(42, 4, new Mario.Mushroom([672, 64]));
  level.putBrick(43, 5, null);
  level.putBrick(44, 6, null);
  level.putBrick(45, 7, null);
  level.putBrick(46, 8, null);
  
  // Wide gap section
  level.putBrick(55, 8, null);
  level.putBrick(56, 8, null);
  level.putBrick(62, 8, null);
  level.putBrick(63, 8, null);
  level.putQBlock(64, 7, new Mario.fireflower([1024, 112]));
  
  // Staggered climb
  level.putBrick(75, 5, null);
  level.putBrick(80, 6, null);
  level.putBrick(85, 7, null);
  level.putBrick(90, 8, null);
  level.putQBlock(95, 9, new Mario.Mushroom([1520, 144]));
  
  // Descent challenge
  level.putBrick(105, 7, null);
  level.putBrick(106, 7, null);
  level.putBrick(107, 7, null);
  level.putBrick(110, 6, null);
  level.putBrick(113, 5, null);
  level.putQBlock(116, 4, new Mario.fireflower([1856, 64]));
  
  // Tight gauntlet
  level.putBrick(130, 9, null);
  level.putBrick(131, 9, null);
  level.putBrick(133, 9, null);
  level.putBrick(135, 9, null);
  level.putBrick(137, 9, null);
  level.putBrick(139, 9, null);
  level.putQBlock(141, 8, new Mario.Mushroom([2256, 128]));
  
  // Tower climbs
  level.putBrick(155, 8, null);
  level.putBrick(155, 5, null);
  level.putBrick(160, 8, null);
  level.putBrick(160, 5, null);
  level.putBrick(165, 8, null);
  level.putBrick(165, 5, null);
  level.putQBlock(170, 8, new Mario.fireflower([2720, 128]));
  level.putBrick(170, 5, null);
  
  level.putBrick(195, 9, null);
  level.putBrick(196, 9, null);
  level.putBrick(197, 9, null);
  level.putBrick(198, 9, null);
  level.putFlagpole(228);

  level.putGoomba(40, 12);
  level.putGoomba(45, 12);
  level.putKoopa(50, 11);
  level.putGoomba(60, 12);
  level.putGoomba(65, 12);
  level.putGoomba(70, 12);
  level.putGoomba(75, 12);
  level.putKoopa(80, 11);
  level.putGoomba(100, 12);
  level.putGoomba(105, 12);
  level.putGoomba(110, 12);
  level.putKoopa(115, 11);
  level.putGoomba(130, 12);
  level.putGoomba(140, 12);
  level.putKoopa(150, 11);
  level.putGoomba(165, 12);
  level.putGoomba(170, 12);
  level.putGoomba(175, 12);
  level.putGoomba(180, 12);
  level.putKoopa(185, 11);
  level.putGoomba(200, 12);
  level.putGoomba(210, 12);
  level.putGoomba(215, 12);
  level.putKoopa(220, 11);

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
