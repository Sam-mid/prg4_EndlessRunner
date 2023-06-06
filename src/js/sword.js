import {Actor, CollisionType, GraphicsGroup, Vector, Random, Timer} from "excalibur";
import {Resources} from "./resources.js";
import {Ninja} from "./ninja.js";

export class Sword extends Actor{

    engine

    constructor(posX, posY) {
        super({
            width: Resources.Sword.width,
            height: Resources.Sword.height,
        });
        this.pos = new Vector(100, 300)
        this.rotation = new Vector(20, 0),
        this.vel = new Vector(0, 0)
        this.scale = new Vector(10, 10);
        this.body.collisionType = CollisionType.Active
        this.body.useGravity = true
        this.graphics.use(Resources.Sword.toSprite())
    }

    damage(){
        console.log("100 damage")
    }

}
