if (typeof Mario === 'undefined')
  window.Mario = {};

var three = Mario.three = function() {
  console.log('Level 3 - Sky World!');
  level = new Mario.Level({
    playerPos: [56,192],
    loader: Mario.four,
    background: "#87CEEB",
    scrolling: true,
    invincibility: [144, 192, 240],
    exit: 220,
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

  ground = [[0,69],[65,95],[110,140],[170,190],[200,220]];
  player.pos[0] = level.playerPos[0];
  player.pos[1] = level.playerPos[1];
  vX = 0;

  ground.forEach(function(loc) {
    level.putFloor(loc[0],loc[1]);
  });

  // LEVEL 3: Pipe Maze - focus on alternating high/low platform sections
  
  // Section 1: Intro with mushroom
  level.putQBlock(12, 8, new Mario.Mushroom([192, 128]));
  level.putBrick(15, 8, null);
  level.putPipe(20, 13, 2);
  
  // Section 2: Alternating platforms
  level.putBrick(28, 5, null);
  level.putBrick(29, 5, null);
  level.putBrick(30, 9, null);
  level.putBrick(31, 9, null);
  level.putBrick(32, 5, null);
  level.putQBlock(33, 5, new Mario.fireflower([528, 80]));
  
  // Section 3: Pipe section
  level.putPipe(40, 13, 3);
  level.putBrick(45, 7, null);
  level.putBrick(46, 7, null);
  level.putQBlock(47, 6, new Mario.Mushroom([752, 96]));
  
  // Section 4: Wall climb
  level.putWall(55, 13, 1);
  level.putWall(56, 13, 2);
  level.putWall(57, 13, 3);
  level.putWall(58, 13, 4);
  level.putQBlock(59, 4, new Mario.fireflower([944, 64]));
  
  // Section 5: Open platform section
  level.putBrick(70, 6, null);
  level.putBrick(72, 6, null);
  level.putBrick(74, 6, null);
  level.putBrick(76, 6, null);
  level.putQBlock(78, 5, new Mario.Mushroom([1248, 80]));
  
  // Section 6: Pipe maze
  level.putPipe(85, 13, 2);
  level.putBrick(90, 8, null);
  level.putBrick(92, 6, null);
  level.putQBlock(94, 4, new Mario.fireflower([1504, 64]));
  level.putPipe(100, 13, 3);
  
  // Section 7: Double height platforms
  level.putBrick(110, 9, null);
  level.putBrick(110, 5, null);
  level.putBrick(115, 9, null);
  level.putBrick(115, 5, null);
  level.putQBlock(120, 9, new Mario.Mushroom([1920, 144]));
  level.putBrick(120, 5, null);
  
  // Section 8: Final climb
  level.putBrick(130, 8, null);
  level.putBrick(131, 7, null);
  level.putBrick(132, 6, null);
  level.putQBlock(133, 5, new Mario.fireflower([2128, 80]));
  level.putBrick(134, 6, null);
  level.putBrick(135, 7, null);
  level.putBrick(136, 8, null);
  level.putPipe(145, 13, 2);
  level.putWall(155, 13, 1);
  level.putWall(156, 13, 2);
  level.putWall(157, 13, 3);
  level.putWall(158, 13, 4);
  level.putWall(159, 13, 5);
  level.putWall(200, 13, 6);
  level.putFlagpole(214);

  level.putGoomba(40, 12);
  level.putGoomba(45, 12);
  level.putKoopa(50, 11);
  level.putGoomba(60, 12);
  level.putGoomba(65, 12);
  level.putGoomba(70, 12);
  level.putKoopa(75, 11);
  level.putGoomba(85, 12);
  level.putGoomba(90, 12);
  level.putKoopa(100, 11);
  level.putGoomba(110, 12);
  level.putGoomba(115, 12);
  level.putKoopa(125, 11);
  level.putGoomba(135, 12);
  level.putGoomba(140, 12);
  level.putKoopa(150, 11);
  level.putGoomba(160, 12);
  level.putGoomba(170, 12);
  level.putGoomba(180, 12);
  level.putKoopa(190, 11);
  level.putGoomba(200, 12);
  level.putGoomba(210, 12);

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
