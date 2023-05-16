import '../css/style.css'
import {Actor, Engine, Physics, Vector} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import {Fish} from './fish.js'
import {Ninja} from './ninja.js'
export class Game extends Engine {

    constructor() {
        super({})
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        Physics.gravity = new Vector(0, 800)
        console.log("start de game!")

        const ninja = new Ninja()
        this.add(ninja)

        this.showDebug(true)
        this.debug.transform.showAll = true
    }
}



new Game()
