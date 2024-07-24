import { useEffect, useState } from "react";
import { isNumberType } from "../features/isNumberType";

export const useFetchPostsData = <T>(
  domain: string,
  endPoint: string,
  acquisitionCondition: string,
  api: string,
  currentPageId: number | string
) => {
  const [postsData, setPostsData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(`${domain}${endPoint}${acquisitionCondition}`, {
      headers: {
        "X-API-KEY": api,
      },
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        if (isNumberType(currentPageId)) {
          setPostsData(data.contents);
        } else {
          setPostsData(
            data.contents.filter(
              (data: { id: string }) => data.id === currentPageId
            )
          );
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setPostsData([]);
        setIsLoading(false);
      });
  }, [domain, endPoint, acquisitionCondition, api, currentPageId]);

  return { postsData, isLoading };
};
