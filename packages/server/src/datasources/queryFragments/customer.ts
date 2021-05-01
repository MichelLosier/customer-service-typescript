export const nameMatchCondition = (name: string) => {
  return {
    OR: [
      {
        firstName: {
          contains: name,
          mode: "insensitive",
        },
      },
      {
        lastName: {
          contains: name,
          mode: "insensitive",
        },
      },
    ],
  };
};

export const filterCondition = (companyName: string) => {
  return {
    AND: [
      {
        company: {
          name: {
            contains: companyName,
            mode: "insensitive",
          },
        },
      },
    ],
  };
};
