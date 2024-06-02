
import React from 'react';
import './App.css';
// import logo from './logo.png'; // Replace with your logo path
//  import placeholderImage from './placeholder-image.jpg'; // Replace with your placeholder image path

// import { Container, Typography, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
// import CheckIcon from '@mui/icons-material/Check';
// import image1 from '../public/image1'
const Navbar = () => {
  
  return (
    
    <div className="App">
      <nav className="navbar">
        {/* <img src={image1} alt="ReedCenter Logo" style={{ height: '40px' }} /> */}
        <div className='pages'>
          <a href="#home">Home</a>
          <a href="#event">Event</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
          <a href="#reserve-spot" className="reserve-spot">Reserve Spot</a>
         
        </div>
      </nav>
      <div className="container">
        <div className="content">
          <h1>Medical practice in the United States</h1>
          <p>Meet our team of highly skilled physicians, ready to provide personalized care and tailored treatment options for your medical needs in the United States.</p>
          {/* <img src='./public/image1.jpg' alt="Medical Practice" style={{ width: '100%', borderRadius: '10px' }} /> */}
        </div>
        <div className="form-container">
          <h2>Register Free Webinar</h2>
          <form>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Work Email Address" />
            <select>
              <option>Marketing</option>
              <option>Sales</option>
              <option>IT</option>
              <option>HR</option>
            </select>
            <input type="text" placeholder="Your Company's Industry" />
            <select>
              <option>Banking</option>
              <option>Healthcare</option>
              <option>Education</option>
              <option>Finance</option>
            </select>

            <input type="text" placeholder="Country" />
            <div className="form-group checkbox">
            <input type='checkbox' id='agreement'/>
            <label id="agreement">By selecting our webinar, you agree to receive information and updates.</label>
          
            </div>
            <button type="submit">Register Now</button>
          </form>
        </div>
       
        </div>
    
      

  <div className="app">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,85.3C672,75,768,85,864,80C960,75,1056,53,1152,85.3C1248,117,1344,203,1392,245.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
  <div className="webinar-container">

      <h1>About Webinar</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form by injected humour or randomised words which don't look even slightly believable.
        </p>
        <p>
          Fought it cross eyes asleep snatch norm rum sure, Morth Vell pheeduck Sit integer vivamus et Phas stique non curabitur quis ut magna sit.
        </p>
        <div className="webinar-features">
          <div className="column">
            <p>Give demos async with voice-over screen recording</p>
            <p>Collaborate on ideas 7x faster</p>
            <p>  annotations to give even better understanding</p>
          </div>
          <div className="column">
            <p>Give demos async with voice-over screen recording</p>
            <p>Collaborate on ideas 7x faster</p>
            <p>Use annotations to give even better understanding</p>
          </div>
        </div>
      </div>
      </div>
    
     
   
    
    {/* </div> */}
    <div class="wave-heading">
      <h1>What's The Highlight of Our Webinars
        
      </h1>
    </div>
</div>
    
);
}

export default Navbar;
