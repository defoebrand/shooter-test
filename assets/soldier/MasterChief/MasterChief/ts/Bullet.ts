/// <reference path="Scripts/typings/createjs/createjs.d.ts"/>
/// <reference path="Scripts/typings/easeljs/easeljs.d.ts"/>

class Bullet extends createjs.Bitmap {
    constructor(img: HTMLImageElement) {
        super(img);
    }   

    public tick(ds: number) {        
        this.x += ds * 1000;
    }
}