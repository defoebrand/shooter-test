import 'phaser';
import Button from '../Objects/Button'

export default class OptionsScene extends Phaser.Scene {
  constructor(){
    super('Options');
  }

  create(){
    this.model = this.sys.game.globals.model;

    this.text = this.add.text(325, 100, 'Options', { fontSize: 40 });

    this.musicButton = this.add.image(300, 250, 'checkedBox');
    this.musicText = this.add.text(325, 235, 'Music Enabled', { fontSize: 24 });

    this.soundButton = this.add.image(300, 350, 'checkedBox');
    this.soundText = this.add.text(325, 335, 'Sound Enabled', { fontSize: 24 });

    this.musicButton.setInteractive();
    this.soundButton.setInteractive();

    this.musicButton.on('pointerdown', function(){
      this.model.musicOn = !this.model.musicOn;
      this.updateAudio();
    }.bind(this));

    this.soundButton.on('pointerdown', function(){
      this.model.soundOn = !this.model.soundOn;
      this.updateAudio();
    }.bind(this));

    this.updateAudio();

    this.menuButton = new Button(this, 400, 500, 'buttonEmpty', 'buttonArrow', 'Menu', 'Title');
  }

  updateAudio(){
    if (this.model.musicOn === false){
      this.musicButton.setTexture('uncheckedBox');
      this.sys.game.globals.bgMusic.stop();
      this.model.bgMusicPlaying = false;
    } else {
      this.musicButton.setTexture('checkedBox');
      if(this.model.bgMusicPlaying === false){
        this.sys.game.globals.bgMusic.play();
        this.model.bgMusicPlaying = true;
      }
    }

    if (this.model.soundOn === false){
      this.soundButton.setTexture('uncheckedBox');
    } else {
      this.soundButton.setTexture('checkedBox');
    }
  }
};
