import 'phaser';
import Button from '../Objects/Button'

export default class CharacterSelectScene extends Phaser.Scene {
  constructor() {
    super('CharacterSelect');
  }

  preload() {
    this.load.image('logo', 'src/assets/logo.png');
  }

  create() {
    this.model = this.sys.game.globals.model;

    let soldierButton = this.add.sprite(800/2, (600/2)-125, 'buttonEmpty').setInteractive();
    let soldierText = this.add.text(800/2, (600/2)-125, 'Soldier', { fontSize: '32px', fill: '#fff' });
    Phaser.Display.Align.In.Center(soldierText, soldierButton);

    soldierButton.on('pointerup', function(){
      localStorage['playerSelection'] = 'soldier'
      // this.model.playerSelection = 'soldier'
      this.scene.start('Game');
    }.bind(this));

    soldierButton.on('pointerover', function(){
      soldierButton.setTexture('soldierChar');
    }.bind(this));

    soldierButton.on('pointerout', function(){
      soldierButton.setTexture('buttonEmpty');
    }.bind(this));

    let alienButton = this.add.sprite(800/2, (600/2)-50, 'buttonEmpty').setInteractive();
    let alienText = this.add.text(800/2, (600/2)-50, 'Alien', { fontSize: '32px', fill: '#fff' });
    Phaser.Display.Align.In.Center(alienText, alienButton);

    alienButton.on('pointerdown', function(){
      localStorage['playerSelection'] = 'alien'
      // this.model.playerSelection = 'alien';
      this.scene.start('Game');
    }.bind(this));

    alienButton.on('pointerover', function(){
      alienButton.setTexture('alienChar');
    }.bind(this));

    alienButton.on('pointerout', function(){
      alienButton.setTexture('buttonEmpty');
    }.bind(this));

    let angryGuyButton = this.add.sprite(800/2, (600/2)+25, 'buttonEmpty').setInteractive();
    let angryGuyText = this.add.text(800/2, (600/2)+25, 'Angry Guy', { fontSize: '32px', fill: '#fff' });
    Phaser.Display.Align.In.Center(angryGuyText, angryGuyButton);

    angryGuyButton.on('pointerup', function(){
      localStorage['playerSelection'] = 'angryGuy'
      this.scene.start('Game');
    }.bind(this));

    angryGuyButton.on('pointerover', function(){
      angryGuyButton.setTexture('angryGuyChar');
    }.bind(this));

    angryGuyButton.on('pointerout', function(){
      angryGuyButton.setTexture('buttonEmpty');
    }.bind(this));

    let genieButton = this.add.sprite(800/2, (600/2)+100, 'buttonEmpty').setInteractive();
    let genieText = this.add.text(800/2, (600/2)+100, 'Genie', { fontSize: '32px', fill: '#fff' });
    Phaser.Display.Align.In.Center(genieText, genieButton);

    genieButton.on('pointerup', function(){
      localStorage['playerSelection'] = 'genie'
      this.scene.start('Game');
    }.bind(this));

    genieButton.on('pointerover', function(){
      genieButton.setTexture('genieChar');
    }.bind(this));

    genieButton.on('pointerout', function(){
      genieButton.setTexture('buttonEmpty');
    }.bind(this));

  }
};
