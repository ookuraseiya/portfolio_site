import { Footer } from '../layouts/Footer/Footer';
import { Header } from '../layouts/Header/Header';
import { Pagination } from '../layouts/Pagination/Pagination';
import { BusinessType } from '../types/BusinessType';
import { Loading } from '../components/Animation/Loading';
import { isURLEnabled } from '../features/isURLEnabled';
import { useFetchPostsData } from '../hooks/useFetchPostsData';
import { getPaginationInfo } from '../features/getPaginationInfo';
import {
  ACQUISITION_CONDITION,
  API,
  BUSINESS_END_POINT,
  DOMAIN,
} from '../config/config';
import { useGetCurrentPageId } from '../hooks/useGetCurrentPageId';
import { isPostsDataExisted } from '../features/isPostsDataExisted';
import { BusinessItem } from '../layouts/BusinessItem/BusinessItem';

export const Business = () => {
  const currentPageId = useGetCurrentPageId();

  const { postsData, isLoading } = useFetchPostsData<BusinessType>(
    DOMAIN,
    BUSINESS_END_POINT,
    ACQUISITION_CONDITION,
    API,
    currentPageId
  );

  const { lastPost, firstPost, paginationNumber } = getPaginationInfo(
    currentPageId,
    postsData
  );

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <section className="business">
            <div className="business__container">
              <h1 className="business__title">Business development</h1>
              <p className="business__lead">
                これまで業務で携わってきたプロジェクトです
              </p>

              {isURLEnabled(currentPageId, paginationNumber) ||
              isPostsDataExisted<BusinessType>(postsData) ? (
                <>
                  <div className="business__wrapper">
                    {postsData.slice(firstPost, lastPost).map((post) => (
                      <BusinessItem key={post.id} post={post} />
                    ))}
                  </div>
                  <Pagination
                    currentPageId={currentPageId}
                    paginationNumber={paginationNumber}
                    pageUrl={'business'}
                  />
                </>
              ) : (
                <h1 className="business__card--error">
                  プロジェクトがありません。
                </h1>
              )}
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  );
};
