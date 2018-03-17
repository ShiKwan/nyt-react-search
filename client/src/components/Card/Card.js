import React from 'react';

const Card = props => (
    <div style={{ height: 300, clear: "both" }} className="card">
        <img className="card-img-top" src="/" alt="Card image cap" />
        <div className='card-body'>
            <h5 className='card-title'>Title</h5>
            <p className='card-text'>
                description
            </p>
            <a href='/' className='card-link'>Hyperlink</a>
            
        </div>
    </div>
);

export default Card;
