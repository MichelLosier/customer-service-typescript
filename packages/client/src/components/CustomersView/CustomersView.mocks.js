export const mockCustomerService = (mockResponse) => {
  return {
    getCustomers: async () => {
      return Promise.resolve(mockResponse);
    },
  };
};

export const mockCustomers = [
  {
    firstName: "John",
    lastName: "Keats",
    company: {
      name: "Puppy Co.",
    },
  },
  {
    firstName: "Lila",
    lastName: "Bloom",
    company: {
      name: "Kitty Co.",
    },
  },
];

export const mockCompanies = [
  {
    name: "Puppy Co.",
  },
  {
    name: "Kitty Co.",
  },
];

export const mockGetCustomersResponse = {
  data: {
    getAllCompanies: {
      companies: [...mockCompanies],
    },
    searchCustomers: {
      customers: [...mockCustomers],
      errors: null,
    },
  },
};

export const mockGetCustomersResponseWithQueryError = {
  data: null,
  errors: [{ message: "Something bad happened with the query" }],
};

export const mockGetCustomersResponseWithSearchError = {
  data: {
    getAllCompanies: {
      companies: [...mockCompanies],
    },
    searchCustomers: {
      customers: [],
      errors: [{ message: "Something bad happened with the search" }],
    },
  },
};
