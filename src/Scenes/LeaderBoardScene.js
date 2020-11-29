import 'phaser';
import {
  createGame,
  addScores,
  getScores
} from '../Config/leaderAPI'

let gameID = '1xojDPeOGAtIYjyuDmuv'


export default class LeaderBoardScene extends Phaser.Scene {
  constructor() {
    super('LeaderBoard');
  }

  preload() {
    // createGame('AVP-Shooter-test')

  }

  create(){
    getScores(gameID, this)

  }
  update(){

  }
};
