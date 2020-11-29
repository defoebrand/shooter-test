import 'phaser';

export default class PreloaderScene extends Phaser.Scene {
  constructor(){
    super('Preloader');
  }

  preload(){
    this.add.image(400, 300, 'logo');

    let progressBar = this.add.graphics();
    let progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    let width = this.cameras.main.width;
    let height = this.cameras.main.height;
    let loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff'
      }
    });
    loadingText.setOrigin(0.5, 0.5);

    let percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    percentText.setOrigin(0.5, 0.5);

    let assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    assetText.setOrigin(0.5, 0.5);

    this.load.on('progress', function(value){
      percentText.setText(parseInt(value * 100) + '%');
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    this.load.on('fileprogress', function (file) {
      assetText.setText('Loading asset: ' + file.key);
    });
    this.load.on('complete', function () {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    }.bind(this));

    this.timedEvent = this.time.delayedCall(500, this.ready, [], this);

    this.load.image('blueButton1', 'src/assets/blue_button02.jpeg');
    this.load.image('blueButton2', 'src/assets/blue_button03.jpeg');
    this.load.image('buttonArrow', 'src/assets/buttonArrow.png');
    this.load.image('buttonEmpty', 'src/assets/buttonEmpty.png');
    this.load.image('phaserLogo', 'src/assets/logo2.png');
    this.load.image('uncheckedBox', 'src/assets/uncheckedBox.png');
    this.load.image('checkedBox', 'src/assets/checkedBox.png');
    this.load.image('soldierChar', 'src/assets/soldierSelect.png');
    this.load.image('alienChar', 'src/assets/alienSelect.png');
    this.load.image('angryGuyChar', 'src/assets/angryGuySelect.png');
    this.load.image('genieChar', 'src/assets/genieSelect.png');
    this.load.audio('bgMusic', ['src/assets/Dafunk - Hardcore Power (We Believe In Goa - Remix).m4a']);
  }


  create(){
  }

  init () {
    this.readyCount = 0;
  }

  ready () {
    // this.scene.start('Title');
    this.readyCount++;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
};
