import React from 'react';

const Country = (props) => {

    const {name,capital}=props.country;
    
    return (

        <div>
            <h4>This is {name}</h4>
            <p>Capital is {capital} </p>
        </div>

    );
};

export default Country;