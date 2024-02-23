export const Judge = (id: number | any, paginationNumber: number) => {
  if (1 > Number(id) || paginationNumber < Number(id) || isNaN(Number(id))) {
    return false;
  } else {
    return true;
  }
};
