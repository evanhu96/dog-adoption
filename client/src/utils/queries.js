import { gql } from '@apollo/client';

export const QUERY_TECH = gql`
  query tech {
    tech {
      _id
      name
    }
  }
`;

export const QUERY_MATCHUPS = gql`
  query matchups($_id: String) {
    matchups(_id: $_id) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;
export const GET_DOGS = gql`
query getDogs(
  $breed: String
) {
  dogsByBreed(
    breed: $breed
  ) {
    id
    breed
    name
    age
    imgLink

  }
}
`;
 export const GET_ALL_DOGS = gql`
 query allDogs{
  dogs{
    id
    breed
    name
    age
  }
 }
 `

 

export const GET_BREEDS = gql`
query getBreeds(
  $exercise: [String]
  $category: [String]
  $grooming: [String]
  $homeSize: [String]
) {
  facetSearch(
    exercise: $exercise
    category: $category
    grooming: $grooming
    homeSize: $homeSize
  ) {
    id
    breed
    imgLink
  }
}
`;
export const  GET_BREED= gql`
  query getBreed($breed:String) {
    breed(breed:$breed) {
      id
      imgLink
      breed
      category
      size
      exercise
      homeSize
      grooming
      coat
      sheds
      lifeSpan
    }
  }
`;
