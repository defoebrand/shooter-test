import 'phaser';

export default class CreditsScene extends Phaser.Scene {
  constructor(){
    super('Credits');
  }

  preload(){}
  create(){
    this.creditsText = this.add.text(0, 0, 'Credits', { fontSize: '32px', fill: '#fff' });
    this.madeByText = this.add.text(0, 0, 'Created By: Brandon', { fontSize: '26px', fill: '#fff' });
    this.plugText = this.add.text(0, 0, 'www.defoebrand.com', { fontSize: '28px', fill: '#fff' });
    this.zone = this.add.zone(800/2, 600/2);
    // this.zone = this.add.zone(config.width/2, config.height/2, config.width, config,height);

    Phaser.Display.Align.In.Center(
      this.creditsText,
      this.zone
    );

    Phaser.Display.Align.In.Center(
      this.madeByText,
      this.zone
    );

    Phaser.Display.Align.In.Center(
      this.plugText,
      this.zone
    );

    this.madeByText.setY(750);

    this.plugText.setY(1000);

    this.creditsTween = this.tweens.add({
      targets: this.creditsText,
      y: -100,
      ease: 'Power1',
      duration: 2500,
      delay: 1000,
      onComplete: function(){
        this.destroy;
      }
    });

    this.madeByTween = this.tweens.add({
      targets: this.madeByText,
      y: -300,
      ease: 'Power1',
      duration: 5750,
      delay: 1000,
      onComplete: function(){
        this.madeByTween.destroy;
        // this.scene.start('Title');
      }.bind(this)
    });

    this.plugTween = this.tweens.add({
      targets: this.plugText,
      y: 600/2,
      ease: 'Power1',
      duration: 10000,
      delay: 250,
      onComplete: function(){
        this.plugTween.destroy;
        this.scene.start('Title');
      }.bind(this)
    });
  }
};
