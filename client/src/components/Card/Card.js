import React from 'react';

const Card = props => (
    <div style={{ height: 300, clear: "both" }} className="card">
        <img className="card-img-top" src={props.image} alt={props.title} />
        <div className='card-body'>
            <h5 className='card-title'>{props.title}</h5>
            <span>{props.date}</span>
            <p className='card-text'>
                {props.teaser}
            </p>
            <a href={props.link} className='card-link'>Read more</a>
            
        </div>
    </div>
);

export default Card;
