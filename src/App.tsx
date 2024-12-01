import './App.css'
import Body from './Components/Body/Body'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './Components/Pages/AboutUs/AboutUs';
import Services from './Components/Pages/Services/Services';
import ContactUs from './Components/Pages/ContactUs/ContactUs';
import SucessStories from './Components/Pages/SucessStories/SucessStories';
import Footer from './Components/Footer/Footer';

function Home() {
  return (
    <>
      <Body />
      <Footer />
    </>
  );
}

function App() {
  return ( 
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/success-stories" element={<SucessStories />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
