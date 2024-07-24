export const isPostsDataExisted = <T>(postsData: T[]) => {
  return !(postsData.length === 0);
};
