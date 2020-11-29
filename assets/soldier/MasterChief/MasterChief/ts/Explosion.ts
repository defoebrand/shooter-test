/// <reference path="Scripts/typings/createjs/createjs.d.ts"/>
/// <reference path="Scripts/typings/easeljs/easeljs.d.ts"/>

class Explosion extends createjs.Sprite {    

    constructor(img: HTMLImageElement) {
        super(new createjs.SpriteSheet({
            images: [img],
            frames: { width:96, height:96 },
            animations: { explode: [0, 19, false, 0.5] }
        }), 'explode');        
    }

    public get LastFrame(): number {
        return 19;
    } 

} 