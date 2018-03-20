import React from "react";
import './Jumbotron.css';
import Background from './images/nyt_banner.png';

var jumbotronStyle = {
  backgroundSize : `cover`,
  backgroundRepeat : `no-repeat`,
  backgroundPosition : `center`,
  height: 300,
  clear: `both`,
  backgroundImage: `url(${Background})`
}

const Jumbotron = ({ children }) => (
  <div style={jumbotronStyle} className="jumbotron">
    {children}
  </div>
);

export default Jumbotron;
