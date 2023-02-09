import { gql } from "@apollo/client";

export const CREATE_MATCHUP = gql`
  mutation createMatchup($tech1: String!, $tech2: String!) {
    createMatchup(tech1: $tech1, tech2: $tech2) {
      _id
      tech1
      tech2
    }
  }
`;

export const CREATE_VOTE = gql`
  mutation createVote($_id: String!, $techNum: Int!) {
    createVote(_id: $_id, techNum: $techNum) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;

const DELETE_DOG = gql`
mutation($id:ID!) {
    deleteDog(id: $id){
        id
        breed
        name
        age
    }
}
`
const ADD_DOG = gql`
mutation($breed:String, $name: String, $age: Int) {
    addDog(breed: $breed name :$name age: $age){
        id
        breed
        name
        age
    }
}
`
export {DELETE_DOG,ADD_DOG}
