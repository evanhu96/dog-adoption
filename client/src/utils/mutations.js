import { gql } from "@apollo/client";



const DELETE_DOG = gql`
mutation DeleteDog($id: ID!) {
  deleteDog(_id: $id) {
    _id
    breed
    name
    age
  }
}
`
const ADD_DOG = gql`
mutation Mutation($age: Int, $breed: String, $name: String) {
  addDog(age: $age, breed: $breed, name: $name) {
    _id
    breed
    name
    age
  }
}
`
export {DELETE_DOG,ADD_DOG}
