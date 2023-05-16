import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import fishImage from '../images/fish.png'
import ninjaImage from '../images/ninja.png'


const Resources = {
    Fish: new ImageSource(fishImage),
    Ninja: new ImageSource(ninjaImage),
}
const ResourceLoader = new Loader([Resources.Fish, Resources.Ninja, Resources.runSprites])

export { Resources, ResourceLoader }