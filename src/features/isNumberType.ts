export const isNumberType = (value: unknown): boolean => {
  if (typeof value === "number") {
    return true;
  } else {
    return false;
  }
};
