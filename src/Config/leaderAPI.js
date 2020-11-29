// import 'phaser'
   // createGame(title.value)

// let gameID = undefined

const createGame = (input) => {
   // console.log(input)
 // URL (required), options (optional)
 fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
    mode: 'cors',
    method: 'post',
    body: JSON.stringify({
        name: input
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
}).then(function(response) {
       response.json().then((data) => {
         // // game.innerHTML = data.result
         // const gameArr = data.result.split(' ')
         // gameID = gameArr.splice((gameArr.indexOf('ID:')+1), 1)[0]

         console.log(data)

         // gameContainer.textContent = gameID
      })
   }).catch(function(err) {
      console.log(err)
   });
}



   // addScores(playerName.value, playerScore.value, gameID)

const addScores = (name, score, id) => {
 // URL (required), options (optional)
 fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`, {
    mode: 'cors',
    method: 'post',
    body: JSON.stringify({
        user: name,
        score: score
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
}).then(function(response) {
       response.json().then((data) => {
         console.log(data)
      })
   }).catch(function(err) {
      console.log(err)
      console.log('missing input')
   });
}


 // getScores(gameID)

const getScores = (id, game) => {
 // URL (required), options (optional)
 fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`, {
    mode: 'cors',
}).then(function(response) {
       response.json().then((data) => {
         console.log(data.result)

         data.result.sort((a, b) => {
             return b.score - a.score;
         }).slice(0, 10).forEach((player, ind) => {
               game.leaderScreen = game.add.zone(800/2, 100 + (ind * 100));
               //
               game.previousScoreText = game.add.text(0, 0, `${player.user}: ${player.score}`, { fontSize: '32px', fill: '#fff' });

               Phaser.Display.Align.In.Center(game.previousScoreText, game.leaderScreen);

               game.previousScoreTween = game.tweens.add({
                  targets: game.previousScoreText,
                  y: -1000 + (ind * 100),
                  ease: 'Power1',
                  duration: 7500,
                  delay: 1500,
                  onComplete: function(){
                     game.previousScoreTween.destroy;
                    game.scene.start('Credits');
                 }.bind(game)
               });


         });

      })
   }).catch(function(err) {
      console.log(err)
   });
}

export {
   createGame,
   addScores,
   getScores
}
