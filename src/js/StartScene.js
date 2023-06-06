import '../css/style.css'
import {Actor, Color, Engine, Physics, Vector, Label, FontUnit, Font, Scene} from "excalibur"
import {Background} from './background.js'
import {Logo} from './logo.js'
import {Start} from './startButton.js'

export class StartScene extends Scene {

    onInitialize(engine) {

        this.game = engine

        Physics.gravity = new Vector(0, 800)
        console.log("start de game!")

        const background = new Background()
        this.add(background)

        const logo = new Logo()
        this.add(logo)

        const start = new Start()
        this.add(start)

    }
}