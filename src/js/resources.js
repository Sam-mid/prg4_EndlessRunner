import {ImageSource, Sound, Resource, Loader, Rectangle} from 'excalibur'
import fishImage from '../images/fish.png'
import ninjaImage from '../images/ninja.png'
import groundImage from '../images/ground.jpg'
import backgroundImage from '../images/background.jpg'
import enemyImage from '../images/enemy.png'
import frogImage from '../images/frog.png'
import swordImage from '../images/sword.png'
import ninja2Image from '../images/Ninja2.png'
import logoImage from '../images/logo.png'
import startImage from '../images/startGame.png'
import overImage from '../images/gameOver.png'

const Resources = {
    Fish: new ImageSource(fishImage),
    Ninja: new ImageSource(ninjaImage),
    Ground: new ImageSource((groundImage)),
    Background: new ImageSource(backgroundImage),
    Enemy: new ImageSource(enemyImage),
    Frog: new ImageSource(frogImage),
    Sword: new ImageSource(swordImage),
    Ninja2: new ImageSource(ninja2Image),
    Logo: new ImageSource(logoImage),
    Start: new ImageSource(startImage),
    Over: new ImageSource(overImage)
}
const ResourceLoader = new Loader([Resources.Fish, Resources.Ninja, Resources.Ground, Resources.Background, Resources.Enemy, Resources.Frog, Resources.Sword, Resources.Ninja2, Resources.Logo, Resources.Start, Resources.Over])

export { Resources, ResourceLoader }