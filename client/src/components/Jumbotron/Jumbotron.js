import React from "react";
import './Jumbotron.css';
import Background from './images/nyt_banner.png';

var jumbotronStyle = {
  backgroundSize : `contain`,
  backgroundRepeat : `no-repeat`,
  backgroundPosition : `center`,
  height: 500,
  clear: `both`,
  backgroundImage: `url(${Background})`
}

const Jumbotron = ({ children }) => (
  <div style={jumbotronStyle} className="jumbotron container">
    {children}
  </div>
);

export default Jumbotron;
