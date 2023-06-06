import {Actor, CollisionType, GraphicsGroup, Vector, Random, Timer} from "excalibur";
import {Resources} from "./resources.js";

export class OverLogo extends Actor{

    constructor(posX, posY) {
        super({
            width: Resources.Over.width,
            height: Resources.Over.height,
        });
        this.pos = new Vector(420, 200)
        this.scale = new Vector(0.2, 0.2);
        this.graphics.use(Resources.Over.toSprite())
    }
}