if (typeof Mario === 'undefined')
  window.Mario = {};

var seven = Mario.seven = function() {
  console.log('Level 7 - Castle Approach!');
  level = new Mario.Level({
    playerPos: [56,192],
    loader: Mario.eight,
    background: "#8B4513",
    scrolling: true,
    invincibility: [144, 192, 240],
    exit: 260,
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

  ground = [[0,69],[35,52],[80,75],[140,45],[200,80],[250,68]];
  player.pos[0] = level.playerPos[0];
  player.pos[1] = level.playerPos[1];
  vX = 0;

  ground.forEach(function(loc) {
    level.putFloor(loc[0],loc[1]);
  });

  // LEVEL 7: Castle Approach - alternating walls and open sections
  
  // Start
  level.putBrick(10, 8, null);
  level.putBrick(11, 8, null);
  level.putQBlock(12, 7, new Mario.Mushroom([192, 112]));
  
  // Tower 1
  level.putWall(20, 13, 1);
  level.putWall(21, 13, 2);
  level.putWall(22, 13, 3);
  level.putWall(23, 13, 4);
  level.putWall(24, 13, 5);
  level.putQBlock(25, 5, new Mario.fireflower([400, 80]));
  
  // Gap section
  level.putBrick(35, 7, null);
  level.putBrick(37, 7, null);
  level.putBrick(39, 7, null);
  level.putBrick(41, 7, null);
  level.putQBlock(43, 6, new Mario.Mushroom([688, 96]));
  
  // Tower 2  
  level.putWall(55, 13, 1);
  level.putWall(56, 13, 2);
  level.putWall(57, 13, 3);
  level.putWall(58, 13, 4);
  level.putWall(59, 13, 5);
  level.putWall(60, 13, 6);
  level.putQBlock(61, 6, new Mario.fireflower([976, 96]));
  
  // Open bridge
  level.putBrick(75, 7, null);
  level.putBrick(76, 7, null);
  level.putBrick(77, 7, null);
  level.putBrick(78, 7, null);
  level.putBrick(79, 7, null);
  level.putQBlock(80, 6, new Mario.Mushroom([1280, 96]));
  
  // Tower 3
  level.putWall(90, 13, 1);
  level.putWall(91, 13, 2);
  level.putWall(92, 13, 3);
  level.putWall(93, 13, 4);
  level.putWall(94, 13, 5);
  level.putWall(95, 13, 4);
  level.putWall(96, 13, 3);
  level.putQBlock(97, 3, new Mario.fireflower([1552, 48]));
  
  // Jumping section
  level.putBrick(110, 8, null);
  level.putBrick(113, 7, null);
  level.putBrick(116, 6, null);
  level.putBrick(119, 5, null);
  level.putQBlock(122, 4, new Mario.Mushroom([1952, 64]));
  
  // Final tower
  level.putWall(135, 13, 1);
  level.putWall(136, 13, 2);
  level.putWall(137, 13, 3);
  level.putWall(138, 13, 4);
  level.putWall(139, 13, 5);
  level.putWall(140, 13, 6);
  level.putWall(141, 13, 7);
  level.putQBlock(142, 7, new Mario.fireflower([2272, 112]));
  
  level.putBrick(155, 9, null);
  level.putBrick(156, 9, null);
  level.putBrick(157, 9, null);
  level.putFlagpole(240);
  level.putBrick(10, 4, null);
  level.putBrick(13, 5, null);
  level.putBrick(16, 6, null);
  level.putBrick(19, 7, null);
  level.putPipe(30, 13, 2);
  level.putQBlock(50, 3, new Mario.Mushroom([800, 48]));
  level.putBrick(52, 3, null);
  level.putBrick(55, 4, null);
  level.putBrick(60, 5, null);
  level.putBrick(65, 6, null);
  level.putBrick(70, 7, null);
  level.putPipe(80, 13, 3);
  level.putQBlock(100, 5, new Mario.fireflower([1600, 80]));
  level.putBrick(102, 5, null);
  level.putBrick(105, 6, null);
  level.putBrick(110, 6, null);
  level.putBrick(115, 7, null);
  level.putBrick(120, 7, null);
  level.putPipe(130, 13, 2);
  level.putQBlock(155, 2, new Mario.Mushroom([2480, 32]));
  level.putBrick(157, 2, null);
  level.putBrick(160, 3, null);
  level.putBrick(165, 4, null);
  level.putBrick(170, 5, null);
  level.putBrick(175, 6, null);
  level.putBrick(180, 7, null);
  level.putPipe(190, 13, 3);
  level.putQBlock(210, 5, new Mario.fireflower([3360, 80]));
  level.putBrick(212, 5, null);
  level.putBrick(215, 6, null);
  level.putBrick(220, 6, null);
  level.putBrick(225, 7, null);
  level.putWall(235, 13, 1);
  level.putWall(236, 13, 2);
  level.putWall(237, 13, 3);
  level.putWall(238, 13, 4);
  level.putWall(239, 13, 5);
  level.putWall(240, 13, 6);
  level.putWall(241, 13, 7);
  level.putWall(242, 13, 8);
  level.putWall(243, 13, 7);
  level.putWall(244, 13, 6);
  level.putWall(245, 13, 5);
  level.putWall(246, 13, 4);
  level.putWall(247, 13, 3);
  level.putWall(248, 13, 2);
  level.putWall(249, 13, 1);
  level.putFlagpole(258);

  for(var i = 35; i < 260; i += 8) {
    level.putGoomba(i, 12);
    level.putKoopa(i+3, 11);
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
