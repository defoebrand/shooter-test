import 'phaser';
import config from './Config/config';
import Model from './Model'
import GameScene from './Scenes/GameScene';
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';
import OptionsScene from './Scenes/OptionsScene';
import CreditsScene from './Scenes/CreditsScene';
import GameOverScene from './Scenes/GameOverScene';
import CharacterSelectScene from './Scenes/CharacterSelectScene';
import LeaderBoardScene from './Scenes/LeaderBoardScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    const model = new Model();
    this.globals = { model, bgMusic: null };
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('CharacterSelect', CharacterSelectScene);
    this.scene.add('Game', GameScene);
    this.scene.add('GameOver', GameOverScene);
    this.scene.add('LeaderBoard', LeaderBoardScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Options', OptionsScene);

    this.scene.start('Boot');
  }
}

const body = document.querySelector('body');

const nameForm = document.createElement('div')
nameForm.classList.add('nameForm');

const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.placeholder = 'Please Enter Your Name to Save Your Score...';
nameForm.appendChild(nameInput)

const submit = document.createElement('input')
submit.type = 'submit';
submit.id = 'submit'
nameForm.appendChild(submit)

submit.onclick = () => {
  localStorage.setItem('name', nameInput.value)
  body.removeChild(nameForm)
  body.removeChild(submit)
}

if(!localStorage['name']){
  body.appendChild(nameForm)
  // body.appendChild(submit)
}



window.game = new Game();
