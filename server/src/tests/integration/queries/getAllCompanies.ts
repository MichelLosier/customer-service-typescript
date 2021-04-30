export const getAllCompanies = `query {
  getAllCompanies {
    errors {
      type
      message
    }
    companies {
      id
      name
      customers {
        firstName
        lastName
      }
    }
  }
}`;
