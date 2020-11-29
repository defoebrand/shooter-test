/// <reference path="Scripts/typings/createjs/createjs.d.ts"/>
/// <reference path="Scripts/typings/easeljs/easeljs.d.ts"/>

class Ground extends createjs.Shape {

    private img: HTMLImageElement;    

    constructor(img: HTMLImageElement, canvas: HTMLCanvasElement) {
        super(new createjs.Graphics());
        this.graphics.beginBitmapFill(img);
        this.graphics.drawRect(0, 0, canvas.width + img.width, img.height);
        this.y = canvas.height - img.height;
        this.img = img;
    }        

    public tick(ds: number) {        
        this.x = (this.x - ds * 150) % this.img.width;
    }
}