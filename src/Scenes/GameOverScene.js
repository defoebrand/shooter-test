import 'phaser';
import {
  addScores
} from '../Config/leaderAPI'

let gameID = '1xojDPeOGAtIYjyuDmuv'

export default class GameOverScene extends Phaser.Scene {
  constructor(){
    super('GameOver');
  }

  create(){

    this.creditsText = this.add.text(0, 0, 'Game Over', { fontSize: '32px', fill: '#fff' });
    this.madeByText = this.add.text(0, 0, 'Thanks for Playing!', { fontSize: '26px', fill: '#fff' });
    this.scoreText = this.add.text(0, 0, `${localStorage['name']}: ${localStorage['previousScore']}`, { fontSize: '26px', fill: '#fff' });

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
      this.scoreText,
      this.zone
    );

    this.madeByText.setY(500);
    this.scoreText.setY(750);


    this.creditsTween = this.tweens.add({
      targets: this.creditsText,
      y: -100,
      ease: 'Power1',
      duration: 2500,
      delay: 500,
      onComplete: function(){
        addScores(localStorage['name'], localStorage['previousScore'], gameID)
        localStorage.setItem('previousScore', '')
        this.destroy;
      }
    });

    this.madeByTween = this.tweens.add({
      targets: this.madeByText,
      y: -300,
      ease: 'Power1',
      duration: 3000,
      delay: 1000,
      onComplete: function(){
        this.madeByTween.destroy;
      }.bind(this)
    });

    this.scoreTween = this.tweens.add({
      targets: this.scoreText,
      y: 250,
      ease: 'Power1',
      duration: 3000,
      delay: 1000,
      onComplete: function(){
        this.scoreTween.destroy;
        this.scene.start('LeaderBoard');
      }.bind(this)
    });
  }
};
