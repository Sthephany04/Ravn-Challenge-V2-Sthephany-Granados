import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import GET_PERSONS_DATA from '../graphql/getPersonsData.graphql.js';

const PersonCell = () => {
  const { loading, error, data } = useQuery(GET_PERSONS_DATA);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    
  return data.allPeople.people.map(({ id, name, homeworld, species }) => (
    <>     
      <section className="peopleStarWars" key={id}>
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
      </section>
      <hr />
    </>
  ));
}

export default PersonCell