/*
import '../css/style.css'
import {Actor, Color, Engine, Physics, Vector, Label, FontUnit, Font, Scene} from "excalibur"
import {Resources, ResourceLoader} from '../resources.js'
import {Ninja} from '../ninja.js'
import {Ground} from '../ground.js'
import {Background} from '../background.js'
import {Ground2} from "../ground2.js";
import {Enemy} from "../enemy.js"
import {Frog} from "../frog.js"
import {Ninja2} from "../ninja2.js"
import {Sword} from "../sword.js"
import {Game} from "../game.js"

export class Scene1 extends Actor {

    constructor() {
        super({})
        this.start(ResourceLoader).then(() => this.startGame())
        this.updateScore()

    }

    score
    mylabel
    Game

    startGame(sceneKey, scene) {

        Physics.gravity = new Vector(0, 800)
        console.log("start de game!")

        const background = new Background()
        this.add(background)

        const ground = new Ground()
        this.add(ground)

        const ground2 = new Ground2()
        this.add(ground2)

        const ninja = new Ninja()
        this.add(ninja)

        const frog = new Frog()
        this.add(frog)

        const ninja2 = new Ninja2()
        this.add(ninja2)

        this.score = 0
        this.mylabel = new Label({
            text: `Score: ${this.score}`,
            pos: new Vector(550, 100),
            font: new Font({
                family: 'Roboto slab',
                size: 40,
                unit: FontUnit.Px,
                color: Color.Black
            })
        })
        this.add(this.mylabel)

    }

    updateScore() {
        this.score++
        this.mylabel.text = `Score: ${this.score}`
    }


    onInitialize(engine) {
        this.game = engine
    }

    onActivate(ctx) {
        console.log("the scene has started!")
    }

    gameOver() {
        this.game.goToScene('gameover')
    }
}

new Game()
*/
