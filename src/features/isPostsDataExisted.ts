export const isPostsDataExisted = <T>(postsData: T[]) => {
  if (postsData.length !== 0) {
    return true;
  } else {
    return false;
  }
};
