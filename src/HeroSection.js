import React from 'react';
// import './Hero.css'
import './About.css'
import './App.css'
const HeroSection = () => {
    
  
  return (
  <>
  <div className="App">
    <div>
    <nav className="navbar">
        <div style={{width:'100%'}}></div>
        <img style={{ height: '45px',borderRadius:"5px",marginLeft:"80px",backgroundPosition:'center',backgroundRepeat:'no-repeat'}} src="https://st.depositphotos.com/2274151/4951/v/450/depositphotos_49516715-stock-illustration-webinar-green-3d-realistic-square.jpg" alt="ReedCenter Logo" />
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
  src='https://zaggocare.org/wp-content/uploads/2016/07/photo-of-a-nurse-leaning-over-a-patient-from-behind-with-a-warm-greeting-canva-new.png'  alt="Medical team providing personalized care"
  style={{
    width: '100%',
    maxWidth: '700px',
    height: 'auto',
    borderRadius: '10px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat:'no-repeat',
    display: 'block',
    marginBottom: '20px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
    imageRendering: 'auto',
    position: 'relative',
    zIndex: '2'
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
    </div>
 
    <section className='banner'>

              <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,288L60,250.7C120,213,240,139,360,101.3C480,64,600,64,720,74.7C840,85,960,107,1080,144C1200,181,1320,235,1380,261.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
 
              <div className="webinar-container">
  <div className='web-pare'>
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
        <p>Annotations to give even better understanding</p>
      </div>
      <div className="column">
        <p>Give demos async with voice-over screen recording</p>
        <p>Collaborate on ideas 7x faster</p>
        <p>Use annotations to give even better understanding</p>
      </div>
    </div>
 
  </div>

  {/* <svg className='wave2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(98 ,160,74)" fill-opacity="1" d="M0,288L60,250.7C120,213,240,139,360,101.3C480,64,600,64,720,74.7C840,85,960,107,1080,144C1200,181,1320,235,1380,261.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
  <h1>hello word</h1></svg> */}
<svg  style={{ padding:"10px"}}width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="rgb(110, 165, 88)" />
      <stop offset="12.5%" stop-color="hwb(101 33% 39%)" />
      <stop offset="25%" stop-color="hsl(100, 32%, 49%)" />
      <stop offset="37.5%" stop-color="rgb(111, 165, 81)" />
      <stop offset="50%" stop-color="rgb(102, 165, 74)" />
      <stop offset="62.5%" stop-color="rgb(89, 143, 63)" />
      <stop offset="75%" stop-color="rgb(77, 124, 54)" />
      <stop offset="87.5%" stop-color="rgb(64, 104, 45)" />
      <stop offset="100%" stop-color="rgb(51, 83, 36)" />
    </linearGradient>
  </defs>
  <path d="M 0,600 L 0,225 C 125.86666666666667,188.2 251.73333333333335,151.39999999999998 407,138 C 562.2666666666667,124.60000000000001 746.9333333333334,134.6 924,153 C 1101.0666666666666,171.4 1270.5333333333333,198.2 1440,225 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0"></path>
</svg>



<section  >
   {/* <svg className='wave3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,288L60,250.7C120,213,240,139,360,101.3C480,64,600,64,720,74.7C840,85,960,107,1080,144C1200,181,1320,235,1380,261.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg> */}
   <svg style={{position:'absolute', zIndex:'1',top:'20px'}} width="100%" className='wav-abso' height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="2%" y1="63%" x2="98%" y2="37%"><stop offset="5%" stop-color="#000000"></stop><stop offset="95%" stop-color="#8ED1FC"></stop></linearGradient></defs><path d="M 0,600 L 0,225 C 125.86666666666667,188.2 251.73333333333335,151.39999999999998 407,138 C 562.2666666666667,124.60000000000001 746.9333333333334,134.6 924,153 C 1101.0666666666666,171.4 1270.5333333333333,198.2 1440,225 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="white" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
 </section>
 <div style={{position:"relative"}}>
  <h1 style={{position:"absolute",zIndex:'1',bottom:'930px',left:'400px',color:'white'}}>What's The Highlights <br/>Of our Webinars</h1>
 </div>
</div>
<div>

</div>
<section class="testimonials">
        <h2>Read what our customers say</h2>
        <p class="intro">UX eum est autem saepe, quis metendi exercittionem dolores labore nisi ut aliquip in ea commodi consequatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <div class="testimonial-container">
            <div class="testimonial">
                <img style={{width:"50px",height:"50px"}}src="https://img.freepik.com/premium-photo/thoughtful-man-contemplating-problem_810293-4432.jpg?w=740" alt="Cleta Kimbola"/>
                <div class="text">
                    <h3>Cleta Kimbola</h3>
                    <p class="role">CEO Company</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
            </div>
            <div class="testimonial green">
                <img style={{width:"50px",height:"50px"}}src="https://img.freepik.com/premium-photo/thoughtful-man-contemplating-problem_810293-4432.jpg?w=740" alt="Frank Kinney"/>
                <div class="text">
                    <h3>Frank Kinney</h3>
                    <p class="role">Developer</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
            </div>
            <div class="testimonial">
                <img style={{width:"50px",height:"50px"}}src="https://img.freepik.com/premium-photo/thoughtful-man-contemplating-problem_810293-4432.jpg?w=740" alt="Nick Perry"/>
                <div class="text">
                    <h3>Nick Perry</h3>
                    <p class="role">Manager</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
            </div>
            <div class="testimonial green">
                <img style={{width:"50px",height:"50px"}}src="https://img.freepik.com/premium-photo/thoughtful-man-contemplating-problem_810293-4432.jpg?w=740" alt="Fiona Kinney"/>
                <div class="text">
                    <h3>Fiona Kinney</h3>
                    <p class="role">Manager</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
            </div>
        </div>
    </section>
<footer>
  <div class="footer-container">
    <div class="footer-section about">
      <h2>Reed Center & Hospitalization</h2>
      <p>Providing top-quality healthcare and hospital services. Our dedicated team is here to ensure the best possible experience for our patients.</p>
    </div>
    <div class="footer-section links">
      <h2>Quick Links</h2>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Departments</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">FAQ</a></li>
      </ul>
    </div>
    <div class="footer-section contact">
      <h2>Contact Us</h2>
      <ul>
        <li><i class="fas fa-map-marker-alt"></i> 123 Healthcare Dr, Cityville, State</li>
        <li><i class="fas fa-phone"></i> +1 (555) 123-4567</li>
        <li><i class="fas fa-envelope"></i> info@reedcenter.com</li>
      </ul>
    </div>
    <div class="footer-section social">
      <h2>Follow Us</h2>
      <div class="social-icons">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-linkedin-in"></i></a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    &copy; 2024 Reed Center & Hospitalization. All rights reserved.
  </div>
</footer>


                </section>
                

  </>
  );
};

export default HeroSection;
