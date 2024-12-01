import './Styles.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/vetra-logo.png'

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>

function Body() {
  return (
    <>
      <div className="container">   
        <div className='container-body'>
          <div className='container-1'> 
            <div className='vetra-container-1' onClick={() => window.location.reload()}>
              <img src={Logo} alt="vetra logo" className='vetra-logo'/>
              <h2 className='vetra-title'>TRA</h2>
            </div>
          </div>
          <div className='container-2'>
            <Link to={'/about-us'}><h5 className='our-story-title'>ABOUT US</h5></Link>
            <Link to={'/services'}><h5 className='our-solutions-title'>SERVICES</h5></Link>
            <Link to={'/success-stories'}><h5 className='our-clients-title'>SUCESS STORIES</h5></Link>
            <Link to={'/'}><h5 className='our-clients-title'>JOIN OUR TEAM</h5></Link>          
          </div>
          <div className='container-3'>
            <button className='button-quote'>GET A QUOTE</button>
            <Link to={'/contact-us'}><button className='button-talk'>CONTACT US</button></Link>  
            <button className='button-menu'>MENU ↡</button>
          </div>
        </div>  
        <div className='title-container-center'>
          <h6 className='smart-title'>Innovative Solutions for Thriving Businesses.</h6>
          <h4 className='grow-title'>Grow without losing the flavor<br></br>of your moment of pause.</h4>
          <button className='contact-us-button'>LET'S CONNECT →</button>
        </div>
      </div>
    </>
  );
}

export default Body;


