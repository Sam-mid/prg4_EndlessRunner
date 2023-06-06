import {Actor, CollisionType, GraphicsGroup, Vector, Random, Timer} from "excalibur";
import {Resources} from "./resources.js";
import {Scene1} from "./scene1.js";

export class Start extends Actor{
engine;
    constructor(posX, posY) {
        super({
            width: Resources.Start.width,
            height: Resources.Start.height,
        });
        this.pos = new Vector(420, 400)
        this.scale = new Vector(0.1, 0.1);
        this.graphics.use(Resources.Start.toSprite())
    }



    onInitialize(engine) {
    this.engine = engine;
        this.on('pointerup', () => {
            this.resetGame();
        });
    }

    resetGame() {
        this.engine.goToScene('scene1');
    }
}