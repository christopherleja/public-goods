import React from 'react'

const About = () => {

  return (
    <div className="about-container">
      <div className="about-first about-section">
        <div className="about-textbox">
          <h1>
            We found that the best care could also be the most sustainable.
          </h1>
          <p className="about-text">We started by using organic bamboo because it grows faster and requires less water to produce than cotton or rayon fibers. It's also softer and 15% more absorbent.</p>
        </div>
      </div>
      
      <div className="about-wrapper">
      <div className="about-second about-section">
        <div className="about-second-textbox">
          <h1>No plastics or synthetics</h1>
          <p>We got rid of plastic and synthetic components that can sit in landfills for up to 800 years. Even our wrapper is 100% biodegradable.</p>
        </div>
      </div>

      <div className="about-third about-section">
        <div className="about-third-textbox">
          <h1>Designed for your body.</h1>
          <p>Feather light and ultra thin.</p>
          <p>Super soft for sensitive skin.</p>
          <p>Anti-microbial and hypoallergenic.</p>
          <p>No synthetic fibers or elemental chlorine.</p>
        </div>
      </div>
      
      </div>
    </div>
  )
}

export default About
