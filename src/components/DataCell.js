import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import GET_PERSONS_DATA from '../graphql/getPersonsData.graphql.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import SectionHeader from './SectionHeader';
import Vehicles from './Vehicles.js';

const DataCell = () => {

  function User () {
    let { id } = useParams();
    console.log(id)    
    return(id)
  }  
  
  const { loading, error, data } = useQuery(GET_PERSONS_DATA);
  
  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="errorData">Failed to Load Data</p>;  

  const dataPerson = data.allPeople.people.map(({ id, name, eyeColor, hairColor, skinColor, birthYear, vehicleConnection }) => (
    <section key={id}>      
      {
      (User() === id) ?
      <>
      <div className="headerDataCell">
        <Link to={`/`}>
          <FontAwesomeIcon className="iconLeft" icon={ faChevronLeft }/>          
        </Link>  
        <SectionHeader titulo={name} />
      </div>
      <div className="generalInformation">
        <h4>General Information</h4>
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
      </div>
      <div className="vehiclesInformation">
        <h4>Vehicles</h4>
        <Vehicles info={vehicleConnection.vehicles} />
      </div>
      </>:
      <div></div>
      }          
    </section>
  ));

  return(
    <>   
      {dataPerson}
    </>
  )  
}

export default DataCell