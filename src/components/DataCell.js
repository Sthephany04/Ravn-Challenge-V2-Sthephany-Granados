import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import GET_PERSONS_DATA from '../graphql/getPersonsData.graphql.js';

import SectionHeader from './SectionHeader';
import Vehicles from './Vehicles.js';

const DataCell = () => {

  function User () {
    let { id } = useParams();
    console.log(id)    
    return(id)
  }  
  
  const { loading, error, data } = useQuery(GET_PERSONS_DATA);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;  

  const dataPerson = data.allPeople.people.map(({ id, name, eyeColor, hairColor, skinColor, birthYear, vehicleConnection }) => (
    <>      
      {
      (User() === id) ?
      <>
      <SectionHeader titulo={name} />   
      <section className="generalInformation" key={id}>
        <h3>General Information</h3>
        <div className="eyeColor">
          <p>Eye Color</p>
          <p><span>{eyeColor}</span></p>          
        </div>
        <hr />
        <div className="hairColor">
          <p>Hair Color</p>
          <p><span>{hairColor}</span></p>          
        </div>
        <hr />
        <div className="skinColor">
          <p>Skin Color</p>
          <p><span>{skinColor}</span></p>          
        </div>
        <hr />
        <div className="birthYear">
          <p>Birth Year</p>
          <p><span>{birthYear}</span></p>          
        </div>
        <hr />
      </section>
      <section className="vehiclesInformation">
        <h3>Vehicles</h3>
        <Vehicles info={vehicleConnection.vehicles} />
      </section>
      </>:
      <div></div>
      }          
    </>
  ));

  return(
    <>   
      {dataPerson}
    </>
  )  
}

export default DataCell