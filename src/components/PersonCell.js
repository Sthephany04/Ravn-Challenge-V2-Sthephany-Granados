import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import GET_PERSONS_DATA from '../graphql/getPersonsData.graphql.js';

const PersonCell = () => {
  const { loading, error, data } = useQuery(GET_PERSONS_DATA);
  
  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="errorData">Failed to Load Data</p>;
    
  return data.allPeople.people.map(({ id, name, homeworld, species }) => (
    <section key={id} >     
      <div className="peopleStarWars">
        <div className="namePeople">
          <p>
            {name}
          </p>
          <small>
          {species ? species.name : 'Human'} from {homeworld.name} 
          </small>          
        </div>
        <div>
          <Link to={`/data/${id}`}>
            <FontAwesomeIcon className="iconRight" icon={ faChevronRight }/>          
          </Link>                   
        </div>
      </div>
      <hr />
    </section>
  ));
}

export default PersonCell