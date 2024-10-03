import { isNumberType } from "./isNumberType";

export const isURLEnabled = (
  currentPageId: unknown,
  paginationNumber: unknown
) => {
  if (!isNumberType(currentPageId) || !isNumberType(paginationNumber)) {
    return false;
  }
  const currentPage = currentPageId as number;
  const pagination = paginationNumber as number;
  if (Number.isNaN(currentPage) || Number.isNaN(pagination)) {
    return false;
  }
  if (1 > currentPage || pagination < currentPage) {
    return false;
  }
  return true;
};
