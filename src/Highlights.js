import React from 'react';
import './App.css';
//  import image1 from '../public/images/image1.jpg'
// import image1 from "../public/"
// import {logo} from './Images/image1.jpg';
const Highlights = () => {
  return (
    <>
    <div className="App">
    <div>
    <nav className="navbar">
        <div style={{width:'30%'}}></div>
        {/* <img src={image1} alt="ReedCenter Logo" style={{ height: '40px' }} /> */}
        <div className='pages'>
          <a href="#home">Home</a>
          <a href="#event">Event</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
          <a href="#reserve-spot" className="reserve-spot">Reserve Spot</a>
         
        </div>
      </nav>

    </div>
    <div className="container">
    <div className="content">
          <h1>Medical practice in the United States</h1>
          <p>Meet our team of highly skilled physicians, ready to provide personalized care and tailored treatment options for your medical needs in the United States.</p>
          <img
  src='https://media.istockphoto.com/id/184312646/photo/nurse-and-senior-patient-talking-in-hospital-room.jpg?s=612x612&w=0&k=20&c=UObV7rHfWKNyDT9AMiHhIgw6vjfQuyCfhxShelOMztY='  
  alt="Medical team providing personalized care"
  style={{
    width: '80%',
    height: '60vh',
    maxHeight: 'none',
    borderRadius: '10px',
    objectFit: 'cover',
    objectPosition: 'center 20%',
    display: 'block',
    marginBottom: '20px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
    imageRendering: 'auto'
  }}
/>
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
    
    <div className="webinar-container">
  <div className='web-pare'>
    <div className='wave'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="red" fill-opacity="1" d="M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,85.3C672,75,768,85,864,80C960,75,1056,53,1152,85.3C1248,117,1344,203,1392,245.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
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
        <p>annotations to give even better understanding</p>
      </div>
      <div className="column">
        <p>Give demos async with voice-over screen recording</p>
        <p>Collaborate on ideas 7x faster</p>
        <p>Use annotations to give even better understanding</p>
      </div>
    </div>
  </div>
</div>
</div>
    </>
    
  );
};

export default Highlights;
