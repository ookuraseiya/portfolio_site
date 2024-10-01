import { useParams } from "react-router-dom";

export const useGetCurrentPageId = () => {
  const { id } = useParams();
  const currentPageId = Number(id);

  return currentPageId;
};
