import 'phaser';

export default {
//DEFAULT LOADER
  // type: Phaser.AUTO,
  // parent: 'phaser-example',
  // width: 800,
  // height: 600

//SPACE SHOOTER
  // type: Phaser.WEBGL,
  // width: 800,
  // height: 600,
  // // width: 480,
  // // height: 640,
  // backgroundColor: "black",
  // physics: {
  //   default: "arcade",
  //   arcade: {
  //     gravity: { x: 0, y: 0 }
  //   }
  // },
  // scene: [
  //   // SceneMainMenu,
  //   // SceneMain,
  //   // SceneGameOver
  // ],
  // pixelArt: true,
  // roundPixels: true

  // //PLATFORM GAME
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
      default: 'arcade',
      arcade: {
          gravity: {
              y: 325,
              // x: 10
          },
          debug: false
      }
  },
  scene: {
      // preload: preload,
      // create: create,
      // update: update
  }

  //PLATFORM V2
  // type: Phaser.AUTO,
  // width: 800,
  // height: 600,
  // // width: 480,
  // // height: 640,
  // backgroundColor: "black",
  // physics: {
  //   default: "arcade",
  //   arcade: {
  //     gravity: { x: 0, y: 0 }
  //   }
  // },
  // scene: {
  //     // preload: preload,
  //     // create: create,
  //     // update: update
  // },
  // pixelArt: true,
  // roundPixels: true
};
