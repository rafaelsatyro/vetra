import './Styles.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/vetra-logo.png'

function Body() {
  
  return (
  <>
    <div className="container">   
      <div className='container-body'>
        <div className='container-1'>
          <div className='vetra-container-1'>
            <img src={Logo} alt="vetra logo" className='vetra-logo'/>
            <h2 className='vetra-title'>TRA</h2>
          </div>
        </div>
        <div className='container-2'>
          <h5 className='our-story-title'>OUR STORY</h5>
          <h5 className='our-solutions-title'>SOLUTIONS</h5>
          <h5 className='our-clients-title'>CLIENTS</h5>
        </div>
        <div className='container-3'>
          <button className='button-quote'>GET A QUOTE</button>
          <button className='button-talk'>TALK WITH US  →</button>
        </div>
      </div>  
    </div>
  </>
  );
}

export default Body;


