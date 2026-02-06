if (typeof Mario === 'undefined')
  window.Mario = {};

var eight = Mario.eight = function() {
  console.log('Level 8 - Castle Interior!');
  level = new Mario.Level({
    playerPos: [56,192],
    loader: Mario.nine,
    background: "#696969",
    scrolling: true,
    invincibility: [144, 192, 240],
    exit: 270,
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

  ground = [[0,68],[50,40],[120,85],[180,35],[240,80]];
  player.pos[0] = level.playerPos[0];
  player.pos[1] = level.playerPos[1];
  vX = 0;

  ground.forEach(function(loc) {
    level.putFloor(loc[0],loc[1]);
  });

  // LEVEL 8: Castle Interior - narrow corridor platforming nightmare
  
  // Start
  level.putBrick(10, 8, null);
  level.putQBlock(11, 7, new Mario.Mushroom([176, 112]));
  level.putBrick(12, 8, null);
  
  // Narrow vertical ascent
  level.putBrick(20, 7, null);
  level.putBrick(21, 6, null);
  level.putBrick(22, 5, null);
  level.putBrick(23, 4, null);
  level.putBrick(24, 3, null);
  level.putQBlock(25, 2, new Mario.fireflower([400, 32]));
  
  // Narrow horizontal corridor
  level.putBrick(35, 6, null);
  level.putBrick(36, 6, null);
  level.putBrick(37, 6, null);
  level.putBrick(38, 6, null);
  level.putBrick(39, 6, null);
  level.putQBlock(40, 5, new Mario.Mushroom([640, 80]));
  
  // Down narrow shaft
  level.putBrick(50, 5, null);
  level.putBrick(51, 6, null);
  level.putBrick(52, 7, null);
  level.putBrick(53, 8, null);
  level.putQBlock(54, 9, new Mario.fireflower([864, 144]));
  
  // Side scrolling section - tight platforms
  level.putBrick(65, 5, null);
  level.putBrick(68, 5, null);
  level.putBrick(71, 5, null);
  level.putBrick(74, 5, null);
  level.putBrick(77, 5, null);
  level.putQBlock(80, 4, new Mario.Mushroom([1280, 64]));
  
  // Vertical chamber
  level.putBrick(90, 3, null);
  level.putBrick(90, 7, null);
  level.putBrick(95, 3, null);
  level.putBrick(95, 7, null);
  level.putBrick(100, 3, null);
  level.putBrick(100, 7, null);
  level.putQBlock(105, 5, new Mario.fireflower([1680, 80]));
  
  // Narrow maze
  level.putBrick(118, 8, null);
  level.putBrick(119, 8, null);
  level.putBrick(120, 4, null);
  level.putBrick(121, 4, null);
  level.putBrick(124, 8, null);
  level.putBrick(125, 8, null);
  level.putBrick(126, 4, null);
  level.putBrick(127, 4, null);
  level.putQBlock(130, 6, new Mario.Mushroom([2080, 96]));
  
  // Tight final corridor
  level.putBrick(145, 7, null);
  level.putBrick(145, 3, null);
  level.putBrick(148, 7, null);
  level.putBrick(148, 3, null);
  level.putBrick(151, 7, null);
  level.putBrick(151, 3, null);
  level.putBrick(154, 7, null);
  level.putBrick(154, 3, null);
  level.putQBlock(157, 5, new Mario.fireflower([2512, 80]));
  
  // Exit
  level.putBrick(170, 8, null);
  level.putBrick(171, 8, null);
  level.putBrick(172, 8, null);
  level.putFlagpole(240);
  level.putBrick(12, 3, null);
  level.putBrick(15, 2, null);
  level.putBrick(18, 4, null);
  level.putBrick(22, 5, null);
  level.putPipe(32, 13, 2);
  level.putQBlock(60, 2, new Mario.Mushroom([960, 32]));
  level.putBrick(62, 2, null);
  level.putBrick(65, 3, null);
  level.putBrick(70, 4, null);
  level.putBrick(75, 5, null);
  level.putBrick(80, 6, null);
  level.putPipe(90, 13, 3);
  level.putQBlock(110, 4, new Mario.fireflower([1760, 64]));
  level.putBrick(112, 4, null);
  level.putBrick(115, 5, null);
  level.putBrick(120, 6, null);
  level.putBrick(125, 7, null);
  level.putBrick(130, 7, null);
  level.putPipe(140, 13, 2);
  level.putQBlock(165, 1, new Mario.Mushroom([2640, 16]));
  level.putBrick(167, 1, null);
  level.putBrick(170, 2, null);
  level.putBrick(175, 3, null);
  level.putBrick(180, 4, null);
  level.putBrick(185, 5, null);
  level.putPipe(195, 13, 3);
  level.putQBlock(215, 5, new Mario.fireflower([3440, 80]));
  level.putBrick(217, 5, null);
  level.putBrick(220, 6, null);
  level.putBrick(225, 7, null);
  level.putWall(240, 13, 1);
  level.putWall(241, 13, 2);
  level.putWall(242, 13, 3);
  level.putWall(243, 13, 4);
  level.putWall(244, 13, 5);
  level.putWall(245, 13, 6);
  level.putWall(246, 13, 7);
  level.putWall(247, 13, 8);
  level.putWall(248, 13, 9);
  level.putWall(249, 13, 8);
  level.putWall(250, 13, 7);
  level.putWall(251, 13, 6);
  level.putWall(252, 13, 5);
  level.putWall(253, 13, 4);
  level.putWall(254, 13, 3);
  level.putWall(255, 13, 2);
  level.putWall(256, 13, 1);
  level.putFlagpole(268);

  for(var i = 35; i < 270; i += 6) {
    level.putKoopa(i, 11);
    level.putGoomba(i+2, 12);
    level.putGoomba(i+4, 12);
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
