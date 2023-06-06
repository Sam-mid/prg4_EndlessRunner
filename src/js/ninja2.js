import {Actor, CollisionType, GraphicsGroup, Vector, Random, Timer, range} from "excalibur";
import {Resources} from "./resources.js";
import {Enemy} from "./enemy.js";
import ninja2Image from "../images/Ninja2.png";

export class Ninja2 extends Enemy{

    constructor(posX, posY) {
        super({
        });

        this.pos = new Vector(600, 385)
        this.graphics.use(Resources.Ninja2.toSprite())

        this.random = new Random(1875)
    }

    offset

    onInitialize(engine) {
        const ninja2Image = Resources.Ninja2.toSprite()
        this.offset = ninja2Image.width
        this.on('collisionstart', (event) => this.hitSomething(event))

        this.timer = new Timer({
            fcn: () => this.spawn(engine),
            interval: 4000,
            repeats: true
        })
        engine.currentScene.add(this.timer)
        this.timer.start()
    }

    onPostUpdate(engine, delta) {
        if (this.pos.x < -this.offset) {
            this.kill()
        }
    }

    hitSomething(event) {
        event.other.kill()
    }

    spawn(engine) {
        console.log("spawn")
        const ninja2 = new Ninja2(
            this.random.integer(0, 0),
            this.random.integer(0, 1000)
        )
        engine.currentScene.add(ninja2)
    }


}

