/// <reference path="Scripts/typings/createjs/createjs.d.ts"/>
/// <reference path="Scripts/typings/easeljs/easeljs.d.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Explosion = (function (_super) {
    __extends(Explosion, _super);
    function Explosion(img) {
        _super.call(this, new createjs.SpriteSheet({
            images: [img],
            frames: { width: 96, height: 96 },
            animations: { explode: [0, 19, false, 0.5] }
        }), 'explode');
    }
    Object.defineProperty(Explosion.prototype, "LastFrame", {
        get: function () {
            return 19;
        },
        enumerable: true,
        configurable: true
    });
    return Explosion;
})(createjs.Sprite);
//# sourceMappingURL=Explosion.js.map
