import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import {Fish} from './fish.js'
export class Game extends Engine {

    constructor() {
        super({ })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")
        const fish = new Fish()
        this.add(fish)
    }
}

new Game()
