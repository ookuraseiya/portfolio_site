import { useParams } from "react-router-dom";

export const useGetPostId = () => {
  const { id } = useParams();
  const currentPostId = String(id);

  return currentPostId;
};
