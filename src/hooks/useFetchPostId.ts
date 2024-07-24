import { useParams } from "react-router-dom";

export const useFetchPostId = () => {
  const { id } = useParams();
  const currentPostId = String(id);

  return currentPostId;
};
