import './main.css'
import interactive from '../../assets/desktop/image-interactive.jpg'
const main = () => {
  return (
    <div className='sec-1'>
      <div className="inner-container">
        <img src={interactive} alt="" className="interactive-img" />
        <div className="desc">
          <h2>The leader in interactive VR</h2>
          <p>Founded in 2011, Loop studios has been producing world-class virtual reality 
  projects for some of the best companies around the globe. Our award-winning 
  creations have transformed businesses through digital experiences that bind 
  to their brand.</p>
        </div>
      </div>
    </div>
  )
}

export default main
