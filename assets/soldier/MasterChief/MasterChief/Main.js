/// <reference path="Scripts/typings/createjs/createjs.d.ts"/>
/// <reference path="Scripts/typings/easeljs/easeljs.d.ts"/>
/// <reference path="Scripts/typings/preloadjs/preloadjs.d.ts"/>
/// <reference path="Scripts/typings/soundjs/soundjs.d.ts"/>
var Main = (function () {
    function Main(canvas) {
        var _this = this;
        this.canvas = canvas;
        this.stage = new createjs.Stage(canvas);

        this.manifest = [
            { src: 'assets/imgs/AsukaKamikazeSpriteSheet.png', id: 'asuka' },
            { src: 'assets/imgs/Background.png', id: 'background' },
            { src: 'assets/imgs/Bullet.png', id: 'bullet' },
            { src: 'assets/imgs/ExplosionSprite.png', id: 'explosion' },
            { src: 'assets/imgs/ground.png', id: 'ground' },
            { src: 'assets/imgs/MasterChiefSpriteSheet.png', id: 'masterChief' },
            { src: 'assets/sounds/Glock_17.mp3', id: 'glock' },
            { src: 'assets/sounds/Bomb_Exploding.mp3', id: 'explosion' }
        ];

        this.queue = new createjs.LoadQueue(false);
        this.queue.installPlugin(createjs.Sound);
        this.queue.on('complete', function (e) {
            _this.onLoadComplete(e);
        });
        this.queue.loadManifest(this.manifest);
    }
    Main.prototype.onLoadComplete = function (e) {
        var _this = this;
        // Set background.
        this.background = new createjs.Bitmap(this.queue.getResult('background'));

        // Set ground.
        var groundImg = this.queue.getResult('ground');
        this.ground = new createjs.Shape();
        this.ground.graphics.beginBitmapFill(groundImg).drawRect(0, 0, this.canvas.width + groundImg.width, groundImg.height);
        this.ground.y = this.canvas.height - groundImg.height;

        this.stage.addChild(this.background, this.ground);

        createjs.Ticker.setFPS(30);
        createjs.Ticker.on('tick', function (e) {
            _this.tick(e);
        });
    };

    Main.prototype.tick = function (e) {
        this.stage.update();
    };
    return Main;
})();

window.addEventListener('load', function () {
    var canvas = document.getElementById('gameCanvas');
    var main = new Main(canvas);
});
//# sourceMappingURL=Main.js.map
