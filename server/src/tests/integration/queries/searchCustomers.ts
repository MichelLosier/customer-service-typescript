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
