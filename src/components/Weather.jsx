import React from 'react';
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const P = styled.p`
    font-size: 1.5rem !important;
`;
const PW = styled.p`
    font-size: 4rem !important;
    font-weight: bold;
`;

const Clima = ({ resultado }) => {

    // Extraer los datos del state
    const { name, main } = resultado

    if (!name) return null;

    // Grados Kelvin
    const kelvin = 273.15;

    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>Clima de { name } es: </h2>
                <PW>{ parseFloat( main.temp - kelvin, 10 ).toFixed(2) } <span> &#x2103; </span> </PW>
                <P>Temperatura Máxima: 
                    { parseFloat( main.temp_max - kelvin, 10 ).toFixed(2) } <span> &#x2103; </span> </P>
                <P>Temperatura Mínima: 
                    { parseFloat( main.temp_min - kelvin, 10 ).toFixed(2) } <span> &#x2103; </span> </P>
            </div>
        </div>
     );
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default Clima;