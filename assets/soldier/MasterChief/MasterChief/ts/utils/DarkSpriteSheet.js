var utils;
(function (utils) {
    var DarkSpriteSheet = (function () {
        function DarkSpriteSheet() {
        }
        DarkSpriteSheet.getData = function (doc) {
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
        };
        return DarkSpriteSheet;
    })();
    utils.DarkSpriteSheet = DarkSpriteSheet;
})(utils || (utils = {}));
//# sourceMappingURL=DarkSpriteSheet.js.map
