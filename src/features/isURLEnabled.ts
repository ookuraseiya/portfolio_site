export const isURLEnabled = (
  currentPageId: number,
  paginationNumber: number
) => {
  if (
    1 > currentPageId ||
    paginationNumber < currentPageId ||
    isNaN(currentPageId)
  ) {
    return false;
  } else {
    return true;
  }
};
