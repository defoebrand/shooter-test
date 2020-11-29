module utils {

    export class SpriteSheet {
                
        static getData(doc: XMLDocument): any[] {           
            var sprites = doc.getElementsByTagName('spr');
            var frames = [];
            for (var i = 0; i < sprites.length; i++) {
                var x = parseInt(sprites.item(i).attributes.getNamedItem('x').value);
                var y = parseInt(sprites.item(i).attributes.getNamedItem('y').value);
                var w = parseInt(sprites.item(i).attributes.getNamedItem('w').value);
                var h = parseInt(sprites.item(i).attributes.getNamedItem('h').value);

                frames.push([x, y, w, h]);
            }

            return frames;
        }

    } 

}