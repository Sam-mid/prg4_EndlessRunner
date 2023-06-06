import {Actor, CollisionType, GraphicsGroup, Input, vec, Vector} from "excalibur";
import {Resources} from "./resources.js";
import {Enemy} from "./enemy.js"

export class Frog extends Enemy {

    constructor(posX, posY) {
        super({

        });

        this.pos = new Vector(800, 410)
        this.graphics.use(Resources.Frog.toSprite())
    }

    offset

    onInitialize(engine) {
        const frogImage = Resources.Frog.toSprite()
        this.offset = frogImage.width
        this.on('collisionstart', (event) => this.hitSomething(event))

        const group = new GraphicsGroup({
            members: [
                {
                    graphic: frogImage,
                    pos: new Vector(0, 0),
                },

            ]
        })

    }

    onPostUpdate(engine, delta) {
        if (this.pos.x < -this.offset) {
            this.pos = new Vector(800, 410)
        }

    }

    hitSomething(event) {
        event.other.kill()
    }


}

