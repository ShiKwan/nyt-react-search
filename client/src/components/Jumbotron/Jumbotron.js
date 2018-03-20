import React from "react";
import './Jumbotron.css';
import Background from './images/New_York_Times_Logo.jpg';

var jumbotronStyle = {
  backgroundSize : `contain`,
  backgroundRepeat : `no-repeat`,
  backgroundPosition : `center`,
  height: 300,
  clear: `both`,
  backgroundImage: `url(${Background})`,
  backgroundColor: `white`
}

const Jumbotron = ({ children }) => (
  <div style={jumbotronStyle} className="jumbotron container">
    {children}
  </div>
);

export default Jumbotron;
