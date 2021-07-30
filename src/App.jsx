import React, { Fragment, useState, useEffect } from 'react'

import Form from './components/Form';
import Header from './components/Header';
import Clima from './components/Weather';
import Error from './components/Error';

function App() {

  // state del form
  const [ search, saveSearch ] = useState({
    ciudad: '',
    pais: ''
  })

  const [ resultado, saveResultado ] = useState({})
  const [ consulta, saveConsulta ] = useState(false)
  const [ error, saveError ] = useState(false)

  const { ciudad, pais } = search

  useEffect( () => {
    const getAPI = async () => {
      if ( consulta ) {
        const appId = '417c858f1a61e651e059c9577b29245f'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        
        const resp = await fetch( url )
        const result = await resp.json()

        saveResultado(result)
        saveConsulta(false)

        // Detecta si hubo resultados concretos en la busqueda
        if ( resultado.cod === "404" ) {
          saveError( true )
        } else {
          saveError( false )
        }
      }
    }

    getAPI()
    // eslint-disable-next-line
  }, [consulta])
  

  let componente;
  if ( error ) {
    componente = <Error mensaje="No hay resultados" />
  } else {
    componente = <Clima resultado={ resultado } />
  }

  return (
    <Fragment>
      <Header titulo='Climapp' />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form 
                search={ search }
                saveSearch={ saveSearch }
                saveConsulta={ saveConsulta }
              />
            </div>
            <div className="col m6 s12">
              { componente }
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
