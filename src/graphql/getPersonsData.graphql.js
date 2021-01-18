import { gql } from '@apollo/client';

const GET_PERSONS_DATA = gql`
{
	allPeople{
    people{      
        id
        name
        eyeColor
        hairColor
        skinColor
        birthYear
        homeworld{
          name
        }
        species{
          name          
        }
        vehicleConnection{
          vehicles{
            name
            model
          }
        }
      }
    }
}

`;

export default GET_PERSONS_DATA;