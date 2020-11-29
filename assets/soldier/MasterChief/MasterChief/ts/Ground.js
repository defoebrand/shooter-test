/// <reference path="Scripts/typings/createjs/createjs.d.ts"/>
/// <reference path="Scripts/typings/easeljs/easeljs.d.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Ground = (function (_super) {
    __extends(Ground, _super);
    function Ground(img, canvas) {
        _super.call(this, new createjs.Graphics());
        this.graphics.beginBitmapFill(img);
        this.graphics.drawRect(0, 0, canvas.width + img.width, img.height);
        this.y = canvas.height - img.height;
        this.img = img;
    }
    Ground.prototype.tick = function (ds) {
        this.x = (this.x - ds * 150) % this.img.width;
    };
    return Ground;
})(createjs.Shape);
//# sourceMappingURL=Ground.js.map
