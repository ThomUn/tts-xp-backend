/**
 * Created by Thomas on 21.03.2017.
 */

class Color {
    private red: number;
    private green: number;
    private blue: number;

    constructor(public redC?: number, public greenC?: number, public blueC?: number) {
        this.red = redC;
        this.green = greenC;
        this.blue = blueC;
    }

    getHEX() {
        return this.RGBtoHEX();
    }

    public componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    public RGBtoHEX(): string {
        return "#" + this.componentToHex(this.red) + this.componentToHex(this.green) + this.componentToHex(this.blue);
    }
}