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

export const filterCondition = (companyId: number) => {
  return {
    AND: [
      {
        companyId: companyId,
      },
    ],
  };
};
