import {Actor, CollisionType, GraphicsGroup, Vector, Random, Timer} from "excalibur";
import {Resources} from "./resources.js";

export class Logo extends Actor{

    constructor(posX, posY) {
        super({
            width: Resources.Logo.width,
            height: Resources.Logo.height,
        });
        this.pos = new Vector(420, 200)
        this.scale = new Vector(0.2, 0.2);
        this.graphics.use(Resources.Logo.toSprite())
    }
}