import {Actor, CollisionType, GraphicsGroup, Vector, Random, Timer} from "excalibur";
import {Resources} from "./resources.js";
import * as random from "excalibur";

export class Enemy extends Actor {

    engine

    constructor(posX, posY) {
        super({
            width: Resources.Enemy.width,
            height: Resources.Enemy.height
        });

        this.scale = new Vector(0.1, 0.1);
        this.vel = new Vector(-110, 0)
        this.body.collisionType = CollisionType.Fixed
        this.body.useGravity = true
        this.random = new Random(1337)
    }



}

