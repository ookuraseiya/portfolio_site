export const fetchPaginationInfo = <T>(
  currentPageId: number,
  postsData: T[]
) => {
  const POSTED_COUNT_PER_PAGE = 9;
  const lastPost = currentPageId * POSTED_COUNT_PER_PAGE;
  const firstPost = lastPost - POSTED_COUNT_PER_PAGE;
  const totalPostsData = postsData.length;
  const paginationNumber = Math.ceil(totalPostsData / POSTED_COUNT_PER_PAGE);

  return { lastPost, firstPost, paginationNumber };
};
