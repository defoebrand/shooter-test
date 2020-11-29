import 'phaser';
import {PlayableCharacter, EnemyCharacter} from '../Characters/characters'
import {Bomb, Bullet} from '../Objects/artillery'

var player;
var enemy;
var newEnemy;
var enemies;
var bombs;
var platforms;
var ground;
var cursors;
var score = 0;
var gameOver = false;
var scoreText;
var bullet;
var lastDirection = 'right';
let spacebar;
var characterSelection;
var enemySelection;
var round = 0;
var gunHeight;
var enemyGunHeight;
var enemyBullet;
var timerDelay = 0;
var timerText;
var time = 500;
var enemyImage = `${enemySelection}Left`;
var direction = 'left';
var bullets;


function chasePlayer(){
  this.physics.moveToObject(enemy, player, 150);
}

function shootRight(player, game, character, gunHeight){
    bullet = game.physics.add.sprite(player.x+25, player.y-gunHeight, `${character}Bullet`).setVelocityX(500);

  return bullet;
}
function shootLeft(player, game, character, gunHeight){
  bullet = game.physics.add.sprite(player.x-25, player.y-gunHeight, `${character}Bullet`).setVelocityX(-500);

return bullet;
}

function destroyEnemies(player, enemy) {
   var explosion = this.physics.add.sprite(enemy.x, enemy.y, `${enemySelection}Explosion`);
   explosion.anims.play('playerExplosion');
   explosion.body.setAllowGravity(false);
   explosion.setVelocityX(50);
   bullet.disableBody(true, true);
   var explosionTimer = this.time.delayedCall(300, kill, [explosion, ''], this);

   enemy.setActive(false).setVisible(false)
   this.physics.world.disableBody(enemy);
   enemies.remove(enemy)

   round += 1;
   score += 10;
   scoreText.setText('Score: ' + score);
   time = 1500;
}

function hitBomb(player, bomb) {
   this.physics.pause();
   player.setTint(0xff0000);
   player.anims.play('turn');
   bomb.anims.play('enemyExplosion');
   gameOver = true;
   var timer = this.time.delayedCall(1500, sceneGameOver, [], this);
}

function sceneGameOver(){
  localStorage.setItem('previousScore', score);
   this.scene.start('GameOver');
}

function gameReset(){
   this.physics.pause();
   player.setTint(0xff0000);
   player.anims.play('turn');
   gameOver = true;
   var timer = this.time.delayedCall(1500, sceneGameOver, [], this);
}

function explode(bullet, object){
   bullet.anims.play('playerExplosion')
   var timer = this.time.delayedCall(300, kill, [bullet, ''], this);
}
function destroy(bullet, object){
   var explosion = bullet.anims.play('playerExplosion')
   var explosionTimer = this.time.delayedCall(300, kill, [bullet, object], this);
}
function kill(bullet, object){
   bullet.disableBody(true, true);
   if(object){
     object.anims.play('playerExplosion');
     object.setActive(false).setVisible(false)
     bombs.remove(object)
     this.physics.world.disableBody(object);
   }
}


export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

 preload() {
   characterSelection = localStorage['playerSelection'];

   if(characterSelection === 'soldier'){
     enemySelection = 'alien'
     gunHeight = 18;
     enemyGunHeight = 0
   } else if (characterSelection === 'alien'){
     enemySelection = 'soldier'
     gunHeight = 0;
     enemyGunHeight = 18;
   } else {
     enemySelection = 'alien'
     gunHeight = 0;
     enemyGunHeight = 0;
   }

        this.load.image('sky', 'src/assets/sky.png');
        this.load.image('ground', 'src/assets/ground.png');
        this.load.image('platform', 'src/assets/platform.png');
        this.load.image('bomb', 'src/assets/bomb.png');
        this.load.spritesheet('soldierBullet', 'src/assets/soldierBullet.png', {
              frameWidth: 10,
              frameHeight: 15
        });
        this.load.spritesheet('alienBullet', 'src/assets/alienBullet.png', {
              frameWidth: 10,
              frameHeight: 15
        });
        this.load.spritesheet('angryGuyBullet', 'src/assets/soldierBullet.png', {
              frameWidth: 10,
              frameHeight: 15
        });
        this.load.spritesheet('genieBullet', 'src/assets/genieBullet.png', {
              frameWidth: 10,
              frameHeight: 15
        });
        this.load.spritesheet('soldierBulletExplosion', 'src/assets/soldierExplosion.png', {
          frameWidth: 31,
          frameHeight: 40
        });
        this.load.spritesheet('alienBulletExplosion', 'src/assets/alienExplosion.png', {
          frameWidth: 31,
          frameHeight: 40
        });
        this.load.spritesheet('angryGuyBulletExplosion', 'src/assets/soldierExplosion.png', {
          frameWidth: 31,
          frameHeight: 40
        });
        this.load.spritesheet('genieBulletExplosion', 'src/assets/genieExplosion.png', {
          frameWidth: 31,
          frameHeight: 40
        });
        this.load.spritesheet('soldier', 'src/assets/soldierDudeSm.png', {
          frameWidth: 39,
          frameHeight: 50
        });
        this.load.spritesheet('alien', 'src/assets/alienDudeSm.png', {
            frameWidth: 31,
            frameHeight: 50
        });
        this.load.spritesheet('angryGuy', 'src/assets/angryGuy.png', {
          frameWidth: 40,
          frameHeight: 50
        });
        this.load.spritesheet('genie', 'src/assets/genie.png', {
          frameWidth: 32,
          frameHeight: 50
        });
        this.load.spritesheet('soldierLeft', 'src/assets/soldierDudeSmLEFT.png', {
          frameWidth: 39,
          frameHeight: 50
        });
        this.load.spritesheet('alienLeft', 'src/assets/alienDudeSmLEFT.png', {
          frameWidth: 31,
          frameHeight: 50
        });
        this.load.spritesheet('angryGuyLeft', 'src/assets/angryGuyLeft.png', {
          frameWidth: 40,
          frameHeight: 50
        });
        this.load.spritesheet('genieLeft', 'src/assets/genieLeft.png', {
          frameWidth: 32,
          frameHeight: 50
        });
        this.load.spritesheet('soldierShoot', 'src/assets/soldierShoot.png', {
          frameWidth: 56,
          frameHeight: 50
        });
        this.load.spritesheet('alienShoot', 'src/assets/alienShoot.png', {
          frameWidth: 38,
          frameHeight: 50
        });
        this.load.spritesheet('angryGuyShoot', 'src/assets/angryGuy.png', {
          frameWidth: 40,
          frameHeight: 50
        });
        this.load.spritesheet('genieShoot', 'src/assets/genie.png', {
          frameWidth: 32,
          frameHeight: 50
        });
        this.load.spritesheet('soldierShootLeft', 'src/assets/soldierShootLeft.png', {
          frameWidth: 56,
          frameHeight: 50
        });
        this.load.spritesheet('alienShootLeft', 'src/assets/alienShootLeft.png', {
          frameWidth: 38,
          frameHeight: 50
        });
        this.load.spritesheet('angryGuyShootLeft', 'src/assets/angryGuyLeft.png', {
          frameWidth: 40,
          frameHeight: 50
        });
        this.load.spritesheet('genieShootLeft', 'src/assets/genieLeft.png', {
          frameWidth: 32,
          frameHeight: 50
        });
        this.load.spritesheet('soldierJump', 'src/assets/soldierJump.png', {
          frameWidth: 32,
          frameHeight: 50
        });
        this.load.spritesheet('alienJump', 'src/assets/alienJump.png', {
          frameWidth: 32,
          frameHeight: 50
        });
        this.load.spritesheet('angryGuyJump', 'src/assets/angryGuyJump.png', {
          frameWidth: 33,
          frameHeight: 50
        });
        this.load.spritesheet('genieJump', 'src/assets/genie.png', {
          frameWidth: 32,
          frameHeight: 50
        });
        this.load.spritesheet('soldierJumpLeft', 'src/assets/soldierJumpLEFT.png', {
          frameWidth: 32,
          frameHeight: 50
        });
        this.load.spritesheet('alienJumpLeft', 'src/assets/alienJumpLEFT.png', {
          frameWidth: 32,
          frameHeight: 50
        });
        this.load.spritesheet('angryGuyJumpLeft', 'src/assets/angryGuyJumpLeft.png', {
          frameWidth: 33,
          frameHeight: 50
        });
        this.load.spritesheet('genieJumpLeft', 'src/assets/genieLeft.png', {
          frameWidth: 32,
          frameHeight: 50
        });
    }

     create() {
        this.add.image(400, 300, 'sky');

        platforms = this.physics.add.staticGroup();
        ground = this.physics.add.staticGroup();

        ground.create(400, 568, 'ground').setScale(3).refreshBody();

        // platforms.create(400, 568, 'ground').setScale(3).refreshBody();

        for(let i = 0; i < Phaser.Math.Between(1,3); i++){
          platforms.create(Phaser.Math.Between(0,800), Phaser.Math.Between(200,400), 'platform');
        }


        // platforms.create(600, 400, 'ground');
        // platforms.create(50, 250, 'ground');
        // platforms.create(750, 220, 'ground');




        player = new PlayableCharacter(this, 100, 475, `${characterSelection}`);
        this.physics.add.collider(player, platforms);
        this.physics.add.collider(player, ground);
        this.physics.add.overlap(player, enemies, gameReset, null, this);
          // this.physics.add.collider(bullet, bullet);

        // This makes the camera follow the character
        // this.cameras.main.setSize(800,1200);
        // this.cameras.main.setBounds(0,0,this.GAME_WIDTH,this.GAME_HEIGHT);
        // this.cameras.main.startFollow(player, true);

        enemies = this.physics.add.group();
        this.physics.add.collider(enemies, ground, chasePlayer, null, this);        this.physics.add.collider(enemies, platforms, chasePlayer, null, this);

        enemy = new EnemyCharacter(this, 375, 100, enemyImage)
        enemies.add(enemy)

        bombs = this.physics.add.group();
        this.physics.add.collider(bombs, platforms);
        this.physics.add.collider(bombs, ground);
        this.physics.add.collider(player, bombs, hitBomb, null, this);

        scoreText = this.add.text(16, 16, 'Score: 0', {
          fontSize: '32px',
          fill: '#000'
        });
        timerText = this.add.text(650, 16, 'Time: 0', {
          fontSize: '22px',
          fill: '#000'
        });

        this.anims.create({
          key: 'left',
          frames: this.anims.generateFrameNumbers(`${characterSelection}Left`, {
            start: 10,
            end: 1
          }),
          frameRate: 10,
          repeat: -1
        });
        this.anims.create({
          key: 'turn',
          frames: [{
            key: `${characterSelection}`,
            frame: 0
          }],
          frameRate: 20,
        });
        this.anims.create({
          key: 'right',
          frames: this.anims.generateFrameNumbers(`${characterSelection}`, {
            start: 1,
            end: 10
          }),
          frameRate: 10,
          repeat: -1
        });
        this.anims.create({
          key: 'jump',
          frames: [{
            key: `${characterSelection}Jump`,
            frame: 0
          }],
          frameRate: 20,
        });
        this.anims.create({
          key: 'jumpLeft',
          frames: [{
            key: `${characterSelection}JumpLeft`,
            frame: 0
          }],
          frameRate: 20,
        });
        this.anims.create({
          key: 'shoot',
          frames: [{
            key: `${characterSelection}Shoot`,
            frame: 4
          }],
          frameRate: 20,
        });
        this.anims.create({
          key: 'shootLeft',
          frames: [{
            key: `${characterSelection}ShootLeft`,
            frame: 4
          }],
          frameRate: 20,
        });
        this.anims.create({
          key: 'playerExplosion',
          frames: this.anims.generateFrameNumbers(`${characterSelection}BulletExplosion`, {
            start: 0,
            end: 3
          }),
          frameRate: 10,
          repeat: -1
        });
        this.anims.create({
          key: 'enemyExplosion',
          frames: this.anims.generateFrameNumbers(`${characterSelection}BulletExplosion`, {
            start: 0,
            end: 3
          }),
          frameRate: 10,
          repeat: -1
        });
        this.anims.create({
          key: 'enemyShoot',
          frames: [{
            key: `${enemySelection}Shoot`,
            frame: 4
          }],
          frameRate: 20,
        });
        this.anims.create({
          key: 'enemyShootLeft',
          frames: [{
            key: `${enemySelection}ShootLeft`,
            frame: 4
          }],
          frameRate: 20,
        });
        this.anims.create({
          key: 'enemyExplosion',
          frames: this.anims.generateFrameNumbers(`${enemySelection}BulletExplosion`, {
            start: 0,
            end: 3
          }),
          frameRate: 10,
          repeat: -1
        });

        cursors = this.input.keyboard.createCursorKeys();
        spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        //  Some enemies to destroy, 12 in total, evenly spaced 70 pixels apart along the x axis
        // enemies = this.physics.add.group({
        //     key: 'enemy',
        //     repeat: 5,
        //     setXY: {
        //         x: 200,
        //         y: 0,
        //         stepX: 100
        //     }
        // });
        // enemies.children.iterate(function(child) {
        //
        //     //  Give each star a slightly different bounce
        //     child.body.setBounceY(0.2);
        //
        // });
        bullets = this.physics.add.group({
            allowGravity:false,
        });
        this.physics.add.collider(bullets, enemies, destroyEnemies, null, this);
        this.physics.add.collider(bullets, platforms,  explode, null, this);
        this.physics.add.collider(bullets, bombs, destroy, null, this);
    }

     update() {
        if (gameOver) {
            return;
        }


        timerDelay++
        time--

        timerText.setText('Time: ' + (time/100).toFixed(0) + ' s')

        if((enemy.x - player.x) >= 0){
          enemy.anims.play('enemyShootLeft')
          direction = 'left';
        } else {
          enemy.anims.play('enemyShoot')
          direction = 'right'
        }


        if (time === 0){
          var gameOverTimer = this.time.delayedCall(1, gameReset, [], this);
          var outOfTime = this.add.text(275, 250, 'Out Of Time!', {
              fontSize: '27px',
              fill: '#9a0202'
          });
          time++
        }


        if(timerDelay % 100 === 0 ){
          enemyBullet = new Bullet(this, enemy.x, enemy.y-enemyGunHeight, `${enemySelection}Bullet`, direction)
          this.physics.add.collider(enemyBullet, player, gameReset, null, this);
        }


        if (cursors.left.isDown) {
            player.body.setVelocityX(-160);
            player.anims.play('left', true);
            lastDirection = 'left'
        } else if (cursors.right.isDown) {
            player.body.setVelocityX(160);
            player.anims.play('right', true);
            lastDirection = 'right'
        } else {
            player.body.setVelocityX(0);
            player.anims.play(`${lastDirection}`);
        }

        if (cursors.up.isDown){
          if (lastDirection === 'left') {
            player.anims.play('jumpLeft', true);
          } else {
            player.anims.play('jump', true);
          }

          if (player.body.touching.down) {
            player.body.setVelocityY(-330);
          }
        }

      if (cursors.space.isDown){
        if(lastDirection === 'left'){
           player.anims.play('shootLeft', true);
           if(Phaser.Input.Keyboard.JustDown(spacebar)){
             bullet = shootLeft(player, this, characterSelection, gunHeight)
             bullets.add(bullet)
             bullet.setVelocity(-300, 0);
           }
        } else {
           player.anims.play('shoot', true);
          if(Phaser.Input.Keyboard.JustDown(spacebar)){
            bullet = shootRight(player, this, characterSelection, gunHeight)
            bullets.add(bullet)
            bullet.setVelocity(300, 0);
          }
        }

        var bulletPhaseOut = this.time.delayedCall(2250, kill, [bullet, ''], this);

      }
      if (enemies.countActive(true) === 0) {
        if((enemy.x - player.x) >= 0){
          enemyImage = `${enemySelection}`
        }

        if(round % 2 === 0){
          platforms.children.iterate(function(child) {
            child.disableBody(true, true);
          });

          for(let i = 0; i < Phaser.Math.Between(1,3); i++){
            platforms.create(Phaser.Math.Between(0,800), Phaser.Math.Between(200,400), 'platform');
          }
        }

        // for(let i = 0; i < round; i++){
          enemy = new EnemyCharacter(this, (5 + (Phaser.Math.Between(0, 99)) * (round % 8)), Phaser.Math.Between(50, 475),  enemyImage)
          enemies.add(enemy)
          // }


          var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

          var bomb = new Bomb(this, x, 16, 'bomb')
          bombs.add(bomb)
          bomb.body.setVelocity(Phaser.Math.Between(-200, 200), 20);
          bomb.body.setBounce(1);
          bomb.body.setCollideWorldBounds(true);
          bomb.body.setAllowGravity = false;
      }
    }


};
