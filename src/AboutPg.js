import React from 'react'; 
import AboutSec from './components/aboutComp.js';
import './App.css';


class About extends React.Component {
  render() {
    return (
      <div className="About">
        <AboutSec />
      </div>
    );
  }
}

export default About;
