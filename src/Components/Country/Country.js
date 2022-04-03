import React from 'react';
import './Country.css';

const Country = (props) => {

    const {name,capital,flag}=props.country;
    
    return (

        <div className='bg-style'>
            <img src={flag} alt='country-flag'/>
            <h4>This is {name}</h4>
            <p>Capital is <strong>{capital} </strong></p>
        </div>

    );
};

export default Country;