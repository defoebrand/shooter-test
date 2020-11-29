import 'phaser'

export class PlayableCharacter extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, key, type){
      super(scene, x, y, key);
      this.scene = scene;
      this.x = x;
      this.y = y;
      this.scene.add.existing(this);
      this.scene.physics.world.enableBody(this, 0);
      this.body.setBounce(0.2);
      this.body.setCollideWorldBounds(true);

    }
}

export class EnemyCharacter extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, key, type){
      super(scene, x, y, key);
      this.scene = scene;
      this.x = x;
      this.y = y;
      this.scene.add.existing(this);
      this.scene.physics.world.enableBody(this, 0);
      this.body.setBounce(0.2);
      this.body.setCollideWorldBounds(true);
      this.body.setAllowGravity(true);

      this.setInteractive();
      this.on('pointerdown',this.clickMe,this);
    }

    clickMe() {
        this.alpha-=.1;
    }

}

//
//
// private target?: Phaser.GameObjects.Components.Transform
//
// 	constructor(scene: Phaser.Scene, x: number, y: number, texture: string)
// 	{
// 		super(scene, x, y, texture)
// 	}
//
// 	setTarget(target: Phaser.GameObjects.Components.Transform)
// 	{
// 		this.target = target
// 	}
//
// 	update(t: number, dt: number)
// 	{
// 		if (!this.target)
// 		{
// 			return
// 		}
//
// 		const tx = this.target.x
// 		const ty = this.target.y
//
// 		const x = this.x
// 		const y = this.y
//
// 		const rotation = Phaser.Math.Angle.Between(x, y, tx, ty)
// 		this.setRotation(rotation)
// 	}
