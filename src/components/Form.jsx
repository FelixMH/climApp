import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Error from './Error'

const Form = ({ search, saveSearch, saveConsulta }) => {

    

    const [ error, saveError ] = useState(false)

    // Extraer ciudad y país
    const { ciudad, pais } = search

    // funcion que coloca el state con sus datos proporcionados.

    const handleChange = e => {
        //  actualizar state
        saveSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    // cuando el usuario de click al boton
    const handleSubmit = e => {
        e.preventDefault()

        // validar form
        if ( ciudad.trim() === '' || pais.trim() === '' ) {
            saveError(true)
            return;
        }

        saveError(false)

        saveConsulta(true)

        // pasar al componente principal

    }

    return ( 
        <form onSubmit={ handleSubmit } >

            { error ? <Error mensaje="Ambos campos son obligatorios" /> : null }

            <div className="input-field col s12">
                <input type="text" name="ciudad" id="ciudad" value={ ciudad } onChange={ handleChange } />
                <label htmlFor="ciudad"> Ciudad: </label>
            </div>

            <div className="input-field col s12">
                <select name="pais" id="pais" value={ pais } onChange={ handleChange } >
                    <option value="">-- Seleccione un país --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">País</label>
            </div>

            <div className="input-field col s12">
                <button 
                    type="submit"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4">Buscar clima</button>
            </div>
        </form>
     );
}

Form.propTypes = {
    search: PropTypes.object.isRequired,
    saveSearch: PropTypes.func.isRequired,
    saveConsulta: PropTypes.func.isRequired
}
 
export default Form;