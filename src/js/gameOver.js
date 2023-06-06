import '../css/style.css'
import {Actor, Color, Engine, Physics, Vector, Label, FontUnit, Font, Scene} from "excalibur"
import {Background} from './background.js'
import {Logo} from './logo.js'
import {Start} from './startButton.js'
import {OverLogo} from "./overLogo.js";
import {Scene1} from "./Scene1.js";

export class GameOver extends Scene {

    onInitialize(engine) {

        const storedScores = JSON.parse(localStorage.getItem('scores'));

        this.game = engine

        Physics.gravity = new Vector(0, 800)
        console.log("start de game!")

        const background = new Background()
        this.add(background)

        const over = new OverLogo()
        this.add(over)

        this.score =
        this.mylabel = new Label({
            text: `Score: ${storedScores}`,
            pos: new Vector(350, 330),
            font: new Font({
                family: 'Roboto slab',
                size: 40,
                unit: FontUnit.Px,
                color: Color.White
            })
        })
        this.add(this.mylabel)

        const start = new Start()
        this.add(start)

    }
}