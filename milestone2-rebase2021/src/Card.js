import React from 'react';
import './Card.css'

const Card = ({ name, image, level, type, atk, def, race, attribute, desc}) => {
    return (
        <div className='card-container'>
            <div className='card-row'>
                <div className='card'>
                    <img src={image} alt='card' />
                    <h1>{name}</h1>
                </div>
                <div className='card-data'>
                    <p className='card-level'>Level: {level}</p>
                    <p className='card-type'>Type: {type}</p>
                    <p className='card-atk'>Attack: {atk}</p>
                    <p className='card-def'>Defense: {def}</p>
                    <p className='card-race'>Race: {race}</p>
                    <p className='card-attribute'>Attribute: {attribute}</p>
                </div>
                <div className='card-desc'>
                    <p className='card-desc'>Description: {desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
