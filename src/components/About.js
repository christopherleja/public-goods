import React from 'react'
import '../css/About.css'

const About = () => {

  return (
    <div className="about-container">
      <div className="about-first about-section">
        <div className="about-textbox">
          <h1 className="about-headline">
            We found that the best care could also be the most sustainable.
          </h1>
          <p className="about-text">We started by using organic bamboo because it grows faster and requires less water to produce than cotton or rayon fibers. It's also softer and 15% more absorbent.</p>
        </div>
      </div>
      
      <div className="about-wrapper">
      <div className="about-second about-section">
        <div className="about-second-textbox">
          <h1 className="about-headline">No plastics or synthetics</h1>
          <p className="about-text">
            We got rid of plastic and synthetic components that can sit in landfills for up to 800 years. Even our wrapper is 100% biodegradable.
          </p>
        </div>
      </div>

      <div className="about-third about-section">
        <div className="about-third-textbox">
          <h1 className="about-headline">Designed for your body.</h1>
          <p className="about-text">Feather light and ultra thin.</p>
          <p className="about-text">Super soft for sensitive skin.</p>
          <p className="about-text">Anti-microbial and hypoallergenic.</p>
          <p className="about-text">No synthetic fibers or elemental chlorine.</p>
        </div>
      </div>

      </div>
    </div>
  )
}

export default About
