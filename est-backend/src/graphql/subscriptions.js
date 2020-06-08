/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEstablishment = /* GraphQL */ `
  subscription OnCreateEstablishment {
    onCreateEstablishment {
      id
      name
      category
      open
      ratings {
        items {
          id
          overall_rating
          ratingUserID
          ratingEstablishmentID
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
export const onUpdateEstablishment = /* GraphQL */ `
  subscription OnUpdateEstablishment {
    onUpdateEstablishment {
      id
      name
      category
      open
      ratings {
        items {
          id
          overall_rating
          ratingUserID
          ratingEstablishmentID
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
export const onDeleteEstablishment = /* GraphQL */ `
  subscription OnDeleteEstablishment {
    onDeleteEstablishment {
      id
      name
      category
      open
      ratings {
        items {
          id
          overall_rating
          ratingUserID
          ratingEstablishmentID
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      username
      ratings {
        items {
          id
          overall_rating
          ratingUserID
          ratingEstablishmentID
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      username
      ratings {
        items {
          id
          overall_rating
          ratingUserID
          ratingEstablishmentID
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      username
      ratings {
        items {
          id
          overall_rating
          ratingUserID
          ratingEstablishmentID
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
export const onCreateRating = /* GraphQL */ `
  subscription OnCreateRating {
    onCreateRating {
      id
      overall_rating
      ratingUserID
      ratingEstablishmentID
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
export const onUpdateRating = /* GraphQL */ `
  subscription OnUpdateRating {
    onUpdateRating {
      id
      overall_rating
      ratingUserID
      ratingEstablishmentID
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
export const onDeleteRating = /* GraphQL */ `
  subscription OnDeleteRating {
    onDeleteRating {
      id
      overall_rating
      ratingUserID
      ratingEstablishmentID
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