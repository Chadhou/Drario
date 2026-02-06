(function() {
  if (typeof Mario === 'undefined')
    window.Mario = {};

  var Bowser = Mario.Bowser = function(pos) {
    this.direction = 1;
    this.walking = 0;
    this.idx = level.enemies.length;

    Mario.Entity.call(this, {
      pos: pos,
      sprite: level.bowserSprite,
      hitbox: [0, 0, 32, 32]
    });
  }

  Mario.Util.inherits(Bowser, Mario.Entity);

  Bowser.prototype.render = function(ctx, vX, vY) {
    if (this.direction === -1) {
      ctx.save();
      ctx.scale(-1, 1);
      this.sprite.render(ctx, -this.pos[0] - 32, this.pos[1], vX, vY);
      ctx.restore();
    } else {
      this.sprite.render(ctx, this.pos[0], this.pos[1], vX, vY);
    }
  }

  Bowser.prototype.spawn = function() {
    sounds.itemAppear.play();
  }

  Bowser.prototype.update = function(dt) {
    if (this.spawning > 0) {
      this.spawning -= dt;
      if (this.spawning <= 0) {
        this.spawning = 0;
        this.spawn();
      }
      this.pos[1] -= dt * 60;
      return;
    }

    // Bowser walking behavior
    this.walking += dt;
    this.vel[0] = this.direction * 60;

    // Random direction change
    if (this.walking > 3 + Math.random() * 2) {
      this.direction *= -1;
      this.walking = 0;
    }

    // Gravity
    this.vel[1] += 200 * dt;
    if (this.vel[1] > 150) this.vel[1] = 150;

    this.pos[0] += this.vel[0] * dt;
    this.pos[1] += this.vel[1] * dt;

    this.checkGround();
  }

  Bowser.prototype.checkGround = function() {
    // Simple ground collision - check if on floor (y > 192)
    if (this.pos[1] >= 192) {
      this.pos[1] = 192;
      this.vel[1] = 0;
    }
  }

  Bowser.prototype.checkCollisions = function() {
    this.isCollideWith(player);
  }

  Bowser.prototype.isCollideWith = function(ent) {
    if (ent instanceof Mario.Player && ent.invincibility) {
      return;
    }

    var hpos1 = [this.pos[0] + this.hitbox[0], this.pos[1] + this.hitbox[1]];
    var hpos2 = [ent.pos[0] + ent.hitbox[0], ent.pos[1] + ent.hitbox[1]];

    // Check if hitboxes overlap
    if (!(hpos1[0] > hpos2[0]+ent.hitbox[2] || (hpos1[0]+this.hitbox[2] < hpos2[0]))) {
      if (!(hpos1[1] > hpos2[1]+ent.hitbox[3] || (hpos1[1]+this.hitbox[3] < hpos2[1]))) {
        if (ent instanceof Mario.Player) {
          if (ent.vel[1] > 0) {
            // Player jumped on Bowser
            player.bounce = true;
            this.bump();
          } else {
            // Player hit from side
            ent.takeDamage();
          }
        }
      }
    }
  }

  Bowser.prototype.bump = function() {
    this.vel[1] = -100;
    // Track hit on Bowser
    level.bowserHits++;
    
    // Check if Bowser defeated (5 hits)
    if (level.bowserHits >= 5) {
      this.takeDamage();
      // Set flag to win level
      player.exiting = true;
    }
  }

  Bowser.prototype.takeDamage = function() {
    delete level.enemies[this.idx];
  }

})();
