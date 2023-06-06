import {Actor, CollisionType, GraphicsGroup, Vector} from "excalibur";
import {Resources} from "./resources.js";
import groundImage from "../images/ground.jpg";
export class Ground extends Actor{

    engine

    constructor() {
        super({
           width: Resources.Ground.width,
            height: Resources.Ground.height,
            pos: new Vector(2, 500),
            vel: new Vector(-110, 0)
        });

        this.scale = new Vector(1, 1);
        this.graphics.use(Resources.Ground.toSprite())
        this.body.collisionType = CollisionType.Fixed

    }

    onPostUpdate(engine, delta) {
        if (this.pos.x < -500) {
            this.pos = new Vector(1500, 500)
        }
    }
}