/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEstablishment = /* GraphQL */ `
  query GetEstablishment($id: ID!) {
    getEstablishment(id: $id) {
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
export const listEstablishments = /* GraphQL */ `
  query ListEstablishments(
    $filter: ModelEstablishmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEstablishments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        ratings {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRating = /* GraphQL */ `
  query GetRating($id: ID!) {
    getRating(id: $id) {
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
export const listRatings = /* GraphQL */ `
  query ListRatings(
    $filter: ModelRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        overall_rating
        ratingUserId
        ratingEstablishmentId
        user {
          id
          username
          createdAt
          updatedAt
        }
        establishment {
          id
          name
          category
          open
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
