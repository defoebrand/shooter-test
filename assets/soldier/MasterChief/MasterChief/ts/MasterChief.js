/// <reference path="Scripts/typings/createjs/createjs.d.ts"/>
/// <reference path="Scripts/typings/easeljs/easeljs.d.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var MasterChief = (function (_super) {
    __extends(MasterChief, _super);
    function MasterChief(img, doc) {
        _super.call(this, new createjs.SpriteSheet({
            images: [img],
            frames: utils.SpriteSheet.getData(doc),
            animations: {
                stand: 0,
                fire: {
                    frames: 1,
                    next: 'stand',
                    speed: 0.8
                },
                run: [2, 11, true, 0.5],
                crouch: 15
            }
        }), 'stand');
    }
    return MasterChief;
})(createjs.Sprite);
//# sourceMappingURL=MasterChief.js.map
