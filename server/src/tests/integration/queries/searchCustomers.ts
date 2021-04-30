export const searchCustomers = `query {
  searchCustomers {
    customers {
      firstName
      lastName
    }
  }
}`;

export const searchCustomersWithCompany = `query {
  searchCustomers {
    customers {
      firstName
      lastName
      company {
        name
      }
    }
  }
}`;

export const searchCustomersFullDepth = `query {
  searchCustomers {
    customers {
      firstName
      lastName
      company {
        name
        customers {
          firstName
          company {
            name
          }
        }
      }
    }
  }
}`;

export const searchCustomersByName = `query($name: String!) {
  searchCustomers(criteria: {name: $name}) {
    customers {
      firstName
      lastName
    }
  }
}`;

export const searchCustomersFilteredByCompany = `query($companyId: ID!) {
  searchCustomers( criteria: { 
      filter: { 
        companyId: $companyId
      } 
    }
  ) 
  {
    customers {
      firstName
      lastName
      company {
        id
        name
      }
    }
  }
}`;

export const searchCustomersByNameAndFilteredByCompany = `query($name: String!, $companyId: ID!) {
  searchCustomers( criteria: { 
      name: $name
      filter: { 
        companyId: $companyId
      } 
    }
  ) 
  {
    customers {
      firstName
      lastName
      company {
        id
        name
      }
    }
  }
}`;
