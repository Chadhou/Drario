if (typeof Mario === 'undefined')
  window.Mario = {};

var five = Mario.five = function() {
  console.log('Level 5 - Forest!');
  level = new Mario.Level({
    playerPos: [56,192],
    loader: Mario.six,
    background: "#228B22",
    scrolling: true,
    invincibility: [144, 192, 240],
    exit: 240,
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

  ground = [[0,68],[30,65],[55,70],[90,55],[140,75],[190,60],[230,70]];
  player.pos[0] = level.playerPos[0];
  player.pos[1] = level.playerPos[1];
  vX = 0;

  ground.forEach(function(loc) {
    level.putFloor(loc[0],loc[1]);
  });

  // LEVEL 5: Forest Maze - winding vertical/horizontal paths
  
  // Start section
  level.putBrick(10, 9, null);
  level.putBrick(11, 9, null);
  level.putQBlock(12, 8, new Mario.Mushroom([192, 128]));
  
  // Zig-zag climber
  level.putBrick(18, 6, null);
  level.putBrick(19, 6, null);
  level.putBrick(20, 5, null);
  level.putBrick(21, 5, null);
  level.putBrick(22, 9, null);
  level.putBrick(23, 9, null);
  level.putQBlock(24, 8, new Mario.fireflower([384, 128]));
  
  // Spiral up
  level.putBrick(35, 8, null);
  level.putBrick(36, 7, null);
  level.putBrick(37, 6, null);
  level.putBrick(38, 5, null);
  level.putBrick(39, 5, null);
  level.putQBlock(40, 4, new Mario.Mushroom([640, 64]));
  
  // Spiral down
  level.putBrick(50, 4, null);
  level.putBrick(51, 5, null);
  level.putBrick(52, 6, null);
  level.putBrick(53, 7, null);
  level.putBrick(54, 8, null);
  level.putQBlock(55, 9, new Mario.fireflower([880, 144]));
  
  // Horizontal line jumps
  level.putBrick(65, 8, null);
  level.putBrick(67, 8, null);
  level.putBrick(69, 8, null);
  level.putBrick(71, 8, null);
  level.putBrick(73, 8, null);
  level.putQBlock(75, 7, new Mario.Mushroom([1200, 112]));
  
  // Three vertical shafts
  level.putBrick(85, 3, null);
  level.putBrick(85, 6, null);
  level.putBrick(85, 9, null);
  level.putBrick(90, 3, null);
  level.putBrick(90, 6, null);
  level.putBrick(90, 9, null);
  level.putQBlock(95, 3, new Mario.fireflower([1520, 48]));
  
  // Cross pattern
  level.putBrick(105, 5, null);
  level.putBrick(105, 9, null);
  level.putBrick(108, 7, null);
  level.putBrick(111, 5, null);
  level.putBrick(111, 9, null);
  level.putQBlock(115, 7, new Mario.Mushroom([1840, 112]));
  
  // Final climb
  level.putBrick(130, 9, null);
  level.putBrick(131, 8, null);
  level.putBrick(132, 7, null);
  level.putBrick(133, 6, null);
  level.putBrick(134, 5, null);
  level.putQBlock(135, 4, new Mario.fireflower([2160, 64]));
  level.putBrick(136, 5, null);
  level.putBrick(137, 6, null);
  level.putBrick(138, 7, null);
  level.putBrick(139, 8, null);
  
  level.putBrick(150, 9, null);
  level.putBrick(151, 9, null);
  level.putBrick(152, 9, null);
  level.putFlagpole(250);
  level.putQBlock(35, 5, new Mario.Mushroom([560, 80]));
  level.putBrick(37, 5, null);
  level.putBrick(40, 4, null);
  level.putBrick(45, 6, null);
  level.putBrick(48, 7, null);
  level.putPipe(58, 13, 2);
  level.putQBlock(75, 3, new Mario.fireflower([1200, 48]));
  level.putBrick(77, 3, null);
  level.putBrick(80, 3, null);
  level.putBrick(85, 4, null);
  level.putBrick(90, 5, null);
  level.putBrick(95, 5, null);
  level.putPipe(105, 13, 3);
  level.putQBlock(120, 4, new Mario.Bcoin([1920, 64]));
  level.putBrick(122, 4, null);
  level.putBrick(125, 5, null);
  level.putBrick(130, 6, null);
  level.putBrick(135, 6, null);
  level.putBrick(138, 6, null);
  level.putPipe(150, 13, 2);
  level.putQBlock(165, 5, new Mario.fireflower([2640, 80]));
  level.putBrick(167, 5, null);
  level.putBrick(170, 6, null);
  level.putBrick(175, 6, null);
  level.putBrick(180, 6, null);
  level.putPipe(190, 13, 2);
  level.putQBlock(210, 6, new Mario.Mushroom([3360, 96]));
  level.putBrick(212, 6, null);
  level.putBrick(215, 7, null);
  level.putWall(225, 13, 1);
  level.putWall(226, 13, 2);
  level.putWall(227, 13, 3);
  level.putWall(228, 13, 4);
  level.putWall(229, 13, 5);
  level.putWall(230, 13, 6);
  level.putWall(231, 13, 5);
  level.putWall(232, 13, 4);
  level.putWall(233, 13, 3);
  level.putWall(234, 13, 2);
  level.putWall(235, 13, 1);
  level.putFlagpole(238);

  level.putGoomba(8, 12);
  level.putGoomba(12, 12);
  level.putKoopa(40, 11);
  level.putGoomba(50, 12);
  level.putGoomba(55, 12);
  level.putGoomba(60, 12);
  level.putGoomba(65, 12);
  level.putKoopa(70, 11);
  level.putGoomba(80, 12);
  level.putGoomba(85, 12);
  level.putGoomba(90, 12);
  level.putGoomba(95, 12);
  level.putGoomba(100, 12);
  level.putKoopa(105, 11);
  level.putGoomba(125, 12);
  level.putGoomba(130, 12);
  level.putGoomba(135, 12);
  level.putGoomba(140, 12);
  level.putKoopa(145, 11);
  level.putGoomba(160, 12);
  level.putGoomba(165, 12);
  level.putGoomba(170, 12);
  level.putKoopa(175, 11);
  level.putGoomba(185, 12);
  level.putGoomba(190, 12);
  level.putGoomba(195, 12);
  level.putGoomba(200, 12);
  level.putKoopa(205, 11);
  level.putGoomba(215, 12);
  level.putGoomba(220, 12);
  level.putGoomba(225, 12);
  level.putGoomba(230, 12);
  level.putKoopa(235, 11);

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
