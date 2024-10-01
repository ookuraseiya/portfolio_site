import { isNumberType } from "./isNumberType";

export const isURLEnabled = (
  currentPageId: number,
  paginationNumber: number
) => {
  if (
    1 > currentPageId ||
    paginationNumber < currentPageId ||
    isNumberType(currentPageId)
  ) {
    return false;
  } else {
    return true;
  }
};
