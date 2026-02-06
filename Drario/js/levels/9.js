if (typeof Mario === 'undefined')
  window.Mario = {};

var nine = Mario.nine = function() {
  console.log('Level 9 - Final Challenge!');
  level = new Mario.Level({
    playerPos: [56,192],
    loader: Mario.ten,
    background: "#4B0082",
    scrolling: true,
    invincibility: [144, 192, 240],
    exit: 280,
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

  ground = [[0,68],[45,35],[110,80],[170,30],[240,85]];
  player.pos[0] = level.playerPos[0];
  player.pos[1] = level.playerPos[1];
  vX = 0;

  ground.forEach(function(loc) {
    level.putFloor(loc[0],loc[1]);
  });

  // LEVEL 9: Final Challenge - extreme difficulty precision platformer
  
  // Start - barely a platform
  level.putBrick(10, 8, null);
  level.putQBlock(11, 7, new Mario.Mushroom([176, 112]));
  
  // Section 1: One-block wide walk
  level.putBrick(20, 8, null);
  level.putBrick(21, 8, null);
  level.putBrick(22, 8, null);
  level.putBrick(23, 8, null);
  level.putBrick(24, 8, null);
  level.putQBlock(25, 7, new Mario.fireflower([400, 112]));
  
  // Section 2: Precision jumps
  level.putBrick(35, 6, null);
  level.putBrick(38, 5, null);
  level.putBrick(41, 4, null);
  level.putBrick(44, 3, null);
  level.putBrick(47, 4, null);
  level.putQBlock(50, 5, new Mario.Mushroom([800, 80]));
  
  // Section 3: Descending gauntlet
  level.putBrick(60, 9, null);
  level.putBrick(61, 8, null);
  level.putBrick(62, 7, null);
  level.putBrick(63, 6, null);
  level.putBrick(64, 5, null);
  level.putQBlock(65, 4, new Mario.fireflower([1040, 64]));
  
  // Section 4: Spike line - single blocks
  level.putBrick(75, 7, null);
  level.putBrick(77, 7, null);
  level.putBrick(79, 7, null);
  level.putBrick(81, 7, null);
  level.putBrick(83, 7, null);
  level.putBrick(85, 7, null);
  level.putQBlock(87, 6, new Mario.Mushroom([1392, 96]));
  
  // Section 5: Spiral challenge
  level.putBrick(100, 8, null);
  level.putBrick(101, 6, null);
  level.putBrick(102, 4, null);
  level.putBrick(103, 6, null);
  level.putBrick(104, 8, null);
  level.putBrick(105, 6, null);
  level.putBrick(106, 4, null);
  level.putBrick(107, 6, null);
  level.putQBlock(108, 4, new Mario.fireflower([1728, 64]));
  
  // Section 6: Ascending precision wall
  level.putBrick(120, 9, null);
  level.putBrick(121, 8, null);
  level.putBrick(122, 7, null);
  level.putBrick(123, 6, null);
  level.putBrick(124, 5, null);
  level.putBrick(125, 4, null);
  level.putBrick(126, 3, null);
  level.putBrick(127, 2, null);
  level.putQBlock(128, 1, new Mario.fireflower([2048, 16]));
  
  // Section 7: Extreme descend
  level.putBrick(140, 2, null);
  level.putBrick(141, 3, null);
  level.putBrick(142, 4, null);
  level.putBrick(143, 5, null);
  level.putBrick(144, 6, null);
  level.putBrick(145, 7, null);
  level.putBrick(146, 8, null);
  level.putBrick(147, 9, null);
  level.putQBlock(148, 10, new Mario.Mushroom([2368, 160]));
  
  // Section 8: Single block sprint
  level.putBrick(160, 8, null);
  level.putBrick(161, 8, null);
  level.putBrick(162, 8, null);
  level.putBrick(163, 8, null);
  level.putBrick(164, 8, null);
  level.putBrick(165, 8, null);
  level.putFlagpole(250);
  level.putBrick(10, 2, null);
  level.putBrick(13, 1, null);
  level.putBrick(16, 3, null);
  level.putBrick(20, 4, null);
  level.putBrick(24, 5, null);
  level.putPipe(35, 13, 2);
  level.putQBlock(60, 1, new Mario.Mushroom([960, 16]));
  level.putBrick(62, 1, null);
  level.putBrick(65, 2, null);
  level.putBrick(70, 3, null);
  level.putBrick(75, 4, null);
  level.putBrick(80, 5, null);
  level.putBrick(85, 6, null);
  level.putPipe(95, 13, 3);
  level.putQBlock(115, 3, new Mario.fireflower([1840, 48]));
  level.putBrick(117, 3, null);
  level.putBrick(120, 4, null);
  level.putBrick(125, 5, null);
  level.putBrick(130, 6, null);
  level.putBrick(135, 7, null);
  level.putPipe(145, 13, 2);
  level.putQBlock(165, 0, new Mario.Mushroom([2640, 0]));
  level.putBrick(167, 0, null);
  level.putBrick(170, 1, null);
  level.putBrick(175, 2, null);
  level.putBrick(180, 3, null);
  level.putBrick(185, 4, null);
  level.putPipe(195, 13, 3);
  level.putQBlock(220, 4, new Mario.fireflower([3520, 64]));
  level.putBrick(222, 4, null);
  level.putBrick(225, 5, null);
  level.putBrick(230, 6, null);
  level.putBrick(235, 7, null);
  level.putWall(245, 13, 1);
  level.putWall(246, 13, 2);
  level.putWall(247, 13, 3);
  level.putWall(248, 13, 4);
  level.putWall(249, 13, 5);
  level.putWall(250, 13, 6);
  level.putWall(251, 13, 7);
  level.putWall(252, 13, 8);
  level.putWall(253, 13, 9);
  level.putWall(254, 13, 10);
  level.putWall(255, 13, 9);
  level.putWall(256, 13, 8);
  level.putWall(257, 13, 7);
  level.putWall(258, 13, 6);
  level.putWall(259, 13, 5);
  level.putWall(260, 13, 4);
  level.putWall(261, 13, 3);
  level.putWall(262, 13, 2);
  level.putWall(263, 13, 1);
  level.putFlagpole(278);

  for(var i = 35; i < 280; i += 4) {
    level.putKoopa(i, 11);
    level.putGoomba(i+1, 12);
    level.putKoopa(i+2, 11);
    level.putGoomba(i+3, 12);
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
