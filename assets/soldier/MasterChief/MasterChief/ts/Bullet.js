/// <reference path="Scripts/typings/createjs/createjs.d.ts"/>
/// <reference path="Scripts/typings/easeljs/easeljs.d.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Bullet = (function (_super) {
    __extends(Bullet, _super);
    function Bullet(img) {
        _super.call(this, img);
    }
    Bullet.prototype.tick = function (ds) {
        this.x += ds * 1000;
    };
    return Bullet;
})(createjs.Bitmap);
//# sourceMappingURL=Bullet.js.map
