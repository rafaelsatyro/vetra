import './Styles.css'

function Header() {
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
  return (
  <>   
    <div className='main-container'>
        <div className='container'>
            <div className='namespace'>
                <div className='vetra-hover'>
                    <p className='vetra-name'>V</p>
                    <p className='vetra-letter'>E</p>
                    <p className='vetra-name-2'>TRA</p>
                    <p className='vetra-letter'>.</p>
                </div>
                <img className='hover-image' src='../../../assets/VETRA-LOGO.png' alt='Imagem Hover'></img>
                
            </div>
            <div className='optionspace'>
                <p>SERVICES</p>
                <p>OUR CLIENTS</p>
                <p>QUOTE</p>

            </div>
        </div>
    </div>
  </>
  );
}

export default Header;