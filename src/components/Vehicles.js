import React from 'react'

const Vehicles = ({info}) => {

  if (info.length > 0) {
    return info.map(({ name }) => (
      <section className="vehiclesInformation">      
        <p>{name}</p>
        <hr />
      </section>
    ))
  } else {
    return (
      <section className="vehiclesInformation"> 
        <p>No tiene Vehiculos</p>
        <hr />
      </section>
    )
  }
}

export default Vehicles