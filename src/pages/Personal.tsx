import { Footer } from '../layouts/Footer/Footer';
import { Header } from '../layouts/Header/Header';
import { Pagination } from '../layouts/Pagination/Pagination';
import { PersonalType } from '../types/PersonalType';
import { Loading } from '../components/Animation/Loading';
import { isURLEnabled } from '../features/isURLEnabled';
import { useFetchPostsData } from '../hooks/useFetchPostsData';
import { fetchPaginationInfo } from '../features/fetchPaginationInfo';
import {
  ACQUISITION_CONDITION,
  API,
  DOMAIN,
  PERSONAL_END_POINT,
} from '../constants/api';
import { useFetchCurrentPageId } from '../hooks/useFetchCurrentPageId';
import { isPostsDataExisted } from '../features/isPostsDataExisted';
import { PersonalItem } from '../layouts/PersonalItem/PersonalItem';

export const Personal = () => {
  const currentPageId = useFetchCurrentPageId();

  const { postsData, isLoading } = useFetchPostsData<PersonalType>(
    DOMAIN,
    PERSONAL_END_POINT,
    ACQUISITION_CONDITION,
    API,
    currentPageId
  );

  const { lastPost, firstPost, paginationNumber } = fetchPaginationInfo(
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
          <section className="personal">
            <div className="personal__container">
              <h1 className="personal__title">Personal development</h1>
              <p className="personal__lead">
                これまで個人で開発してきたプロダクトです
              </p>
              {isURLEnabled(currentPageId, paginationNumber) ||
              isPostsDataExisted<PersonalType>(postsData) ? (
                <>
                  <article className="personal__wrapper">
                    {postsData.slice(firstPost, lastPost).map((post) => (
                      <PersonalItem post={post} />
                    ))}
                  </article>
                  <Pagination
                    currentPageId={currentPageId}
                    paginationNumber={paginationNumber}
                    pageUrl={'personal'}
                  />
                </>
              ) : (
                <h1 className="personal__card--error">
                  プロダクトがありません。
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
