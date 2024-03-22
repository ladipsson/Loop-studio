import './cards.css'
import Deep from '../../assets/desktop/image-deep-earth.jpg'
import Curiosity from '../../assets/desktop/image-curiosity.jpg'
import Fish from '../../assets/desktop/image-fisheye.jpg'
import Above from '../../assets/desktop/image-from-above.jpg'
import Grid from '../../assets/desktop/image-grid.jpg'
import Night from '../../assets/desktop/image-night-arcade.jpg'
import Pocket from '../../assets/desktop/image-pocket-borealis.jpg'
import Soccer from '../../assets/desktop/image-soccer-team.jpg'

//mobile cards imports
import Modeep from '../../assets/mobile/image-deep-earth.jpg'
import Mocuriosity from '../../assets/mobile/image-curiosity.jpg'
import Mofish from '../../assets/mobile/image-fisheye.jpg'
import Moabove from '../../assets/mobile/image-from-above.jpg'
import Mogrid from '../../assets/mobile/image-grid.jpg'
import Monight from '../../assets/mobile/image-night-arcade.jpg'
import Mopocket from '../../assets/mobile/image-pocket-borealis.jpg'
import Mosoccer from '../../assets/mobile/image-soccer-team.jpg'
const Cards = () => {

  return (
    <div className="inner-chamber">
      <div className="creation">
        <h2>Our Creation</h2>
        <button className="btn">See All</button>
      </div>
      <div className="cards-list">
        <div className="imgs">
          <img src={Deep} alt="" className="cards-large" />
          <img src={Modeep} alt="" className="cards-mobile" />
          <p>DEEP EARTH</p>
        </div>
        <div className="imgs">
          <img src={Night} alt="" className="cards-large" />
          <img src={Monight} alt="" className="cards-mobile" />
          <p>NIGHT ARCADE</p>
        </div>
        <div className="imgs">
          <img src={Soccer} alt="" className="cards-large" />
          <img src={Mosoccer} alt="" className="cards-mobile" />
          <p>SOCCER TEAM VR</p>
        </div>
        <div className="imgs">
          <img src={Grid} alt="" className="cards-large" />
          <img src={Mogrid} alt="" className="cards-mobile" />
          <p>THE GRID</p>
        </div>
        <div className="imgs">
          <img src={Above} alt="" className="cards-large" />
          <img src={Moabove} alt="" className="cards-mobile" />
          <p>FROM UP ABOVE VR</p>
        </div>
        <div className="imgs">
          <img src={Pocket} alt="" className="cards-large" />
          <img src={Mopocket} alt="" className="cards-mobile" />
          <p>POCKET BOREALIS</p>
        </div>
        <div className="imgs">
          <img src={Curiosity} alt="" className="cards-large" />
          <img src={Mocuriosity} alt="" className="cards-mobile" />
          <p>THE CURIOSITY</p>
        </div>
        <div className="imgs">
          <img src={Fish} alt="" className="cards-large" />
          <img src={Mofish} alt="" className="cards-mobile" />
          <p>MAKE IT FISH EYE</p>
        </div>
        <div className="btn-mobile">
          <button className="btn-mo">See All</button>
        </div>
      </div>

    </div>
  )
}

export default Cards
