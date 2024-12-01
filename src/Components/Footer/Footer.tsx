import './Styles.css'
import idea from '../../assets/idea.png'
import rocket from '../../assets/rocket.png'
import plan from '../../assets/plan.png'

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>

function Footer() {
  return (
    <>  
    <div className='container-page'>
      <div className='section-1'>
        <div className='content-1'>
          <div className='logo-content-1'>
            <img src={idea} alt="idea" className='idea-logo' />
          </div>
          <div className='container-content-1'>
            <h2 className='container-title'>DREAM WITH US</h2>
            <p className='p-title'>Understand what we can add to your business</p>
          </div>
        </div>
      </div>

      <div className='section-2'>
        <div className='content-2'>
          <div className='logo-content-2'>
            <img src={plan} alt="idea" className='idea-logo' />
          </div>
          <div className='container-content-2'>
              <h2 className='container-title-2'>BUILD STRATEGIES</h2>
              <p className='p-title-2'>We will develop something specific and unique for your business</p>
          </div>
        </div>
      </div>

      <div className='section-3'>
        <div className='content-3'>
          <div className='logo-content-3'>
            <img src={rocket} alt="idea" className='idea-logo' />
          </div>
          <div className='container-content-3'>
            <h2 className='container-title-3'>DO THE V</h2>
            <p className='p-title-3'>Grow exponentially and dominate the market with VETRA solutions</p>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default Footer;
