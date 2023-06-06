import {Actor, CollisionType, GraphicsGroup, Vector} from "excalibur";
import {Resources} from "./resources.js";
export class Background extends Actor{

    constructor() {
        super({
            pos: new Vector(300, 300)
        });

        this.scale = new Vector(1, 1);
        this.graphics.use(Resources.Background.toSprite())
    }

    offset

    onInitialize(engine){
        const backgroundImage = Resources.Background.toSprite()
        this.offset = backgroundImage.width

        const group = new GraphicsGroup({
            members: [
                {
                    graphic: backgroundImage,
                    pos: new Vector(0, 0),
                },
                {
                    graphic: backgroundImage,
                    pos: new Vector(backgroundImage.width, 0),
                }
            ]
        })

        this.graphics.anchor = new Vector(0,0)
        this.graphics.add(group)
        this.pos = new Vector(0, 0)
        this.vel = new Vector(-60, 0)
    }

    onPostUpdate(engine, delta) {
        if (this.pos.x < -this.offset) {
            this.pos = new Vector(0, 0)
        }
    }
}

