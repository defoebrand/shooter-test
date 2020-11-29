/// <reference path="Scripts/typings/createjs/createjs.d.ts"/>
/// <reference path="Scripts/typings/easeljs/easeljs.d.ts"/>

class AsukaKamikaze extends createjs.Sprite {
    private hitCount: number = 0;
    
    constructor(img: HTMLImageElement, doc: XMLDocument) {
        super(new createjs.SpriteSheet({
            images: [img],
            frames: utils.SpriteSheet.getData(doc),
            animations:
            {
                run: [0, 5, true, 0.4],
                hit: [6, 8, 'dead', 0.2],
                dead: 9
            }
        }), 'run');        
    }    

    public set HitCount(value: number) {
        this.hitCount = value;        
    }
    
    public get HitCount(): number {
        return this.hitCount;
    }

    private VELOCITY: number = 200;

    public tick(ds: number) {        
        this.x -= ds * this.VELOCITY;
    }     
       
} 