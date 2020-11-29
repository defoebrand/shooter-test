/// <reference path="Scripts/typings/createjs/createjs.d.ts"/>
/// <reference path="Scripts/typings/easeljs/easeljs.d.ts"/>

class MasterChief extends createjs.Sprite {
    constructor(img: HTMLImageElement, doc: XMLDocument) {
        super(new createjs.SpriteSheet({
            images: [img],
            frames: utils.SpriteSheet.getData(doc),
            animations:
            {
                stand: 0,
                fire:
                {
                    frames: 1,
                    next: 'stand',
                    speed: 0.8
                },
                run: [2, 11, true, 0.5],
                crouch: 15
            }
        }), 'stand');        
    } 
} 