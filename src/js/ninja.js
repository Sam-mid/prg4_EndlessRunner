import {Actor,  SpriteSheet, CollisionType, Input, vec, Animation, Vector, range} from "excalibur";
import {Resources} from "./resources.js";
import {Sword} from "./sword.js"
export class Ninja extends Actor {

    Instanceof;

    engine
    weapon

    constructor(posX, posY) {
        super({
            width: Resources.Ninja.width,
            height: Resources.Ninja.height
        });
        this.pos = new Vector(100, 300)
        this.vel = new Vector(0, 0)
        this.scale = new Vector(0.1, 0.1);
        this.body.collisionType = CollisionType.Active
        this.body.useGravity = true
        this.graphics.use(Resources.Ninja.toSprite())
        this.weapon = new Sword()
    }


    onInitialize(engine){
        this.engine = engine
        this.on("postupdate", ()=>this.resetPosition())
    }

    resetPosition(){
        this.engine.updateScore()
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
        this.vel = this.vel.add(new vec( 0, -500))
    }

    fall(){
        this.vel = this.vel.add(new vec(0, 80))
    }



    /*
    collisionCheck(collisionEvent, collisionString){
        console.log(collisionEvent)

        if (collisionEvent.other Instanceof Ground){
            if(collisionString === 'start'){
                this.isGrounded = true
            }
            else if (collisionString === 'end'){
                this.isGrounded = false
            }
        }
    }
*/


}

