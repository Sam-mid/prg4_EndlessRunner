import {Actor, Vector} from "excalibur";
import {Resources} from "./resources.js";
export class Fish extends Actor{

    constructor(posX, posY) {
        super();
        this.pos = new Vector(400, 300)
        this.vel = new Vector(-10, -40)
        this.graphics.use(Resources.Fish.toSprite())
    }
}