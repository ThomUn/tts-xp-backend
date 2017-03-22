/**
 * Created by Thomas on 21.03.2017.
 */
"use strict";
var Color = (function () {
    function Color(redC, greenC, blueC) {
        this.redC = redC;
        this.greenC = greenC;
        this.blueC = blueC;
        this.red = redC;
        this.green = greenC;
        this.blue = blueC;
    }
    Color.prototype.getHEX = function () {
        return this.RGBtoHEX();
    };
    Color.prototype.componentToHex = function (c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    };
    Color.prototype.RGBtoHEX = function () {
        return "#" + this.componentToHex(this.red) + this.componentToHex(this.green) + this.componentToHex(this.blue);
    };
    return Color;
}());
exports.Color = Color;
