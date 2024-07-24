import { useParams } from "react-router-dom";

export const useFetchCurrentPageId = () => {
  const { id } = useParams();
  const currentPageId = Number(id);

  return currentPageId;
};
