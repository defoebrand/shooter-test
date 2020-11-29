/// <reference path="Scripts/typings/createjs/createjs.d.ts"/>
/// <reference path="Scripts/typings/easeljs/easeljs.d.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var AsukaKamikaze = (function (_super) {
    __extends(AsukaKamikaze, _super);
    function AsukaKamikaze(img, doc) {
        _super.call(this, new createjs.SpriteSheet({
            images: [img],
            frames: utils.SpriteSheet.getData(doc),
            animations: {
                run: [0, 5, true, 0.4],
                hit: [6, 8, 'dead', 0.2],
                dead: 9
            }
        }), 'run');
        this.hitCount = 0;
        this.VELOCITY = 200;
    }

    Object.defineProperty(AsukaKamikaze.prototype, "HitCount", {
        get: function () {
            return this.hitCount;
        },
        set: function (value) {
            this.hitCount = value;
        },
        enumerable: true,
        configurable: true
    });

    AsukaKamikaze.prototype.tick = function (ds) {
        this.x -= ds * this.VELOCITY;
    };
    return AsukaKamikaze;
})(createjs.Sprite);
//# sourceMappingURL=AsukaKamikaze.js.map
