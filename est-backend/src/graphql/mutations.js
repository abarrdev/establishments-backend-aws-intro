/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEstablishment = /* GraphQL */ `
  mutation CreateEstablishment(
    $input: CreateEstablishmentInput!
    $condition: ModelEstablishmentConditionInput
  ) {
    createEstablishment(input: $input, condition: $condition) {
      id
      name
      category
      open
      ratings {
        items {
          id
          overall_rating
          ratingUserId
          ratingEstablishmentId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateEstablishment = /* GraphQL */ `
  mutation UpdateEstablishment(
    $input: UpdateEstablishmentInput!
    $condition: ModelEstablishmentConditionInput
  ) {
    updateEstablishment(input: $input, condition: $condition) {
      id
      name
      category
      open
      ratings {
        items {
          id
          overall_rating
          ratingUserId
          ratingEstablishmentId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteEstablishment = /* GraphQL */ `
  mutation DeleteEstablishment(
    $input: DeleteEstablishmentInput!
    $condition: ModelEstablishmentConditionInput
  ) {
    deleteEstablishment(input: $input, condition: $condition) {
      id
      name
      category
      open
      ratings {
        items {
          id
          overall_rating
          ratingUserId
          ratingEstablishmentId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      ratings {
        items {
          id
          overall_rating
          ratingUserId
          ratingEstablishmentId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      ratings {
        items {
          id
          overall_rating
          ratingUserId
          ratingEstablishmentId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      ratings {
        items {
          id
          overall_rating
          ratingUserId
          ratingEstablishmentId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createRating = /* GraphQL */ `
  mutation CreateRating(
    $input: CreateRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    createRating(input: $input, condition: $condition) {
      id
      overall_rating
      ratingUserId
      ratingEstablishmentId
      user {
        id
        username
        ratings {
          nextToken
        }
        createdAt
        updatedAt
      }
      establishment {
        id
        name
        category
        open
        ratings {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateRating = /* GraphQL */ `
  mutation UpdateRating(
    $input: UpdateRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    updateRating(input: $input, condition: $condition) {
      id
      overall_rating
      ratingUserId
      ratingEstablishmentId
      user {
        id
        username
        ratings {
          nextToken
        }
        createdAt
        updatedAt
      }
      establishment {
        id
        name
        category
        open
        ratings {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteRating = /* GraphQL */ `
  mutation DeleteRating(
    $input: DeleteRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    deleteRating(input: $input, condition: $condition) {
      id
      overall_rating
      ratingUserId
      ratingEstablishmentId
      user {
        id
        username
        ratings {
          nextToken
        }
        createdAt
        updatedAt
      }
      establishment {
        id
        name
        category
        open
        ratings {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
