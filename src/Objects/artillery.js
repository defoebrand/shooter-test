import 'phaser'

export class Bomb extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, key, type){
      super(scene, x, y, key);
      this.scene = scene;
      this.x = x;
      this.y = y;
      this.scene.physics.world.enableBody(this, 0);
      this.scene.add.existing(this);

    }
}
export class Bullet extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, key, direction){
      super(scene, x, y, key);
      this.scene = scene;
      this.x = x;
      this.y = y;
      this.scene.physics.world.enableBody(this, 0);
      this.scene.add.existing(this);
      // // this.body.setVelocity(Phaser.Math.Between(-200, 200), 20);
      if (direction === 'left'){
          this.body.setVelocity(-300, 0);
      } else {
        this.body.setVelocity(300, 0);
      }
      // this.body.setVelocity(20, 20)
      // this.body.setBounce(1);
      // this.body.setCollideWorldBounds(true);
      this.body.allowGravity = false;
      // this.body.setAngle(200)
    }
}
