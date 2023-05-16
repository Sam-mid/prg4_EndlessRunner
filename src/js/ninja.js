import {Actor,  SpriteSheet, CollisionType, Input, vec, Animation, Vector, range} from "excalibur";
import {Resources} from "./resources.js";
export class Ninja extends Actor {
    constructor(posX, posY) {
        super();
        this.pos = new Vector(100, 500)
        this.vel = new Vector(0, 0)
        this.scale = new Vector(0.1, 0.1);
        this.body.collisionType = CollisionType.Active
        this.body.useGravity = true
        this.graphics.use(Resources.Ninja.toSprite())

    }

    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Input.Keys.Space)) {
            this.jump()
        }

        if (engine.input.keyboard.wasReleased(Input.Keys.Space)) {
            this.fall()
        }
    }

    jump(){
        console.log("jump")
        this.vel = this.vel.add(new vec( 0, -800))
    }

    fall(){
        this.vel = this.vel.add(new vec(0, 80))
    }

}


export class Player extends Actor {
    constructor() {
        super();
        // de player heeft zelf de hele spritesheet omdat er maar 1 player is
        const runSheet = SpriteSheet.fromImageSource({
            image: Resources.Player,
            grid: { rows: 1, columns: 21, spriteWidth: 96, spriteHeight: 96 },
        });
        // test of alle sprites er zijn
        console.log(runSheet.sprites);

        const idle = runSheet.sprites[0]; // geen animatie
        const runLeft = Animation.fromSpriteSheet(runSheet, range(1, 10), 80);
        const runRight = Animation.fromSpriteSheet(runSheet, range(11, 20), 80);

        this.graphics.add("idle", idle);
        this.graphics.add("runleft", runLeft);
        this.graphics.add("runright", runRight);

        this.graphics.use(idle);
    }
    onInitialize(engine) {
        this.pos = new Vector(400, 200);
        this.vel = new Vector(0, 0);
    }
    onPreUpdate(engine) {
        let xspeed = 0;
        this.graphics.use("idle");

        if (
            engine.input.keyboard.isHeld(Input.Keys.A) ||
            engine.input.keyboard.isHeld(Input.Keys.Left)
        ) {
            xspeed = -300;
            this.graphics.use("runleft");
        }
        if (
            engine.input.keyboard.isHeld(Input.Keys.D) ||
            engine.input.keyboard.isHeld(Input.Keys.Right)
        ) {
            xspeed = 300;
            this.graphics.use("runright");
        }

        this.vel = new Vector(xspeed, 0);
    }
}