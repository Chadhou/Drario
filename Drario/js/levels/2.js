if (typeof Mario === 'undefined')
  window.Mario = {};

var two = Mario.two = function() {
  console.log('Level 2 - Underground Caves!');
  level = new Mario.Level({
    playerPos: [56,192],
    loader: Mario.two,
    background: "#4a4a4a",
    scrolling: true,
    invincibility: [144, 192, 240],
    exit: 204,
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
  ground = [[0,69],[71,86],[89,153],[155,212]];
  player.pos[0] = level.playerPos[0];
  player.pos[1] = level.playerPos[1];
  vX = 0;

  ground.forEach(function(loc) {
    level.putFloor(loc[0],loc[1]);
  });

  // No scenery for underground cave theme - just open cave
  // Remove clouds and hills for cave feel

  threeBushes = [11,59,106];
  threeBushes.forEach(function(bush) {
    level.putThreeBush(bush, 12);
  });

  //interactable terrain - Level 2 (Underground Cave)
  // Section 1: Starting area with simple climb
  level.putBrick(10, 8, null);
  level.putBrick(11, 7, null);
  level.putBrick(12, 6, null);
  level.putQBlock(13, 5, new Mario.Mushroom([208, 80]));
  level.putBrick(14, 6, null);
  level.putBrick(15, 7, null);
  level.putBrick(16, 8, null);

  // Section 2: Underground cavern with platform jumps
  level.putPipe(20, 13, 2);
  level.putBrick(23, 10, null);
  level.putBrick(24, 10, null);
  level.putBrick(25, 9, null);
  level.putBrick(26, 8, null);
  level.putQBlock(27, 7, new Mario.fireflower([432, 112]));
  
  // Section 3: Platform maze
  level.putBrick(33, 6, null);
  level.putBrick(34, 6, null);
  level.putBrick(35, 6, null);
  level.putQBlock(36, 6, new Mario.Bcoin([576, 96]));
  level.putBrick(37, 7, null);
  level.putBrick(38, 8, null);
  level.putPipe(40, 13, 3);
  
  // Section 4: Descending platforms
  level.putBrick(45, 7, null);
  level.putBrick(46, 8, null);
  level.putBrick(47, 9, null);
  level.putQBlock(48, 10, new Mario.Bcoin([768, 160]));
  
  // Section 5: Wide open area with multiple platforms
  level.putBrick(55, 11, null);
  level.putBrick(56, 11, null);
  level.putBrick(57, 10, null);
  level.putBrick(58, 9, null);
  level.putBrick(59, 8, null);
  level.putQBlock(60, 7, new Mario.Mushroom([960, 112]));
  level.putBrick(61, 8, null);
  level.putBrick(62, 9, null);
  level.putBrick(63, 10, null);
  level.putBrick(64, 11, null);
  level.putBrick(65, 11, null);
  level.putPipe(70, 13, 4);
  
  // Section 6: Ascending challenge
  level.putBrick(78, 10, null);
  level.putBrick(79, 9, null);
  level.putBrick(80, 8, null);
  level.putBrick(81, 7, null);
  level.putQBlock(82, 6, new Mario.fireflower([1312, 96]));
  level.putBrick(83, 7, null);
  level.putBrick(84, 8, null);
  level.putBrick(85, 9, null);
  level.putBrick(86, 10, null);
  
  // Section 7: Final cavern with mushroom reward
  level.putBrick(92, 7, null);
  level.putBrick(93, 7, null);
  level.putBrick(94, 7, null);
  level.putQBlock(95, 6, new Mario.Mushroom([1520, 96]));
  level.putBrick(96, 7, null);
  level.putPipe(100, 13, 2);
  
  // Section 8: Jump challenge with coins
  level.putBrick(107, 9, null);
  level.putQBlock(109, 9, new Mario.Bcoin([1744, 144]));
  level.putBrick(111, 9, null);
  level.putQBlock(113, 9, new Mario.Bcoin([1808, 144]));
  level.putBrick(115, 9, null);
  level.putQBlock(117, 9, new Mario.Bcoin([1872, 144]));
  level.putBrick(119, 9, null);
  
  // Section 9: Final ascent
  level.putBrick(125, 8, null);
  level.putBrick(126, 7, null);
  level.putBrick(127, 6, null);
  level.putQBlock(128, 5, new Mario.fireflower([2048, 80]));
  level.putBrick(129, 6, null);
  level.putBrick(130, 7, null);
  level.putBrick(131, 8, null);
  level.putPipe(135, 13, 3);
  
  // Final stretch to exit
  level.putBrick(145, 9, null);
  level.putBrick(146, 9, null);
  level.putBrick(147, 8, null);
  level.putBrick(148, 7, null);
  level.putFlagpole(200);

  //and enemies - Underground cave theme
  level.putGoomba(35, 11);
  level.putGoomba(37, 11);
  level.putKoopa(42, 10);
  level.putGoomba(45, 10);
  level.putKoopa(55, 8);
  level.putGoomba(60, 8);
  level.putGoomba(70, 9);
  level.putKoopa(75, 9);
  level.putGoomba(85, 12);
  level.putGoomba(90, 12);
  level.putKoopa(95, 12);
  level.putGoomba(105, 8);
  level.putGoomba(110, 10);
  level.putKoopa(120, 12);
  level.putGoomba(130, 11);
  level.putGoomba(135, 9);
  level.putKoopa(140, 10);
  level.putGoomba(150, 8);
  level.putKoopa(155, 12);
  level.putGoomba(160, 10);
  level.putGoomba(165, 10);
  level.putKoopa(170, 10);
  level.putGoomba(175, 9);
  level.putGoomba(180, 8);
  level.putKoopa(185, 12);
  level.putGoomba(195, 10);
  level.putGoomba(198, 9);

  music.underground.pause();
  music.overworld.play();
  
  // Reset player state for new level
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
