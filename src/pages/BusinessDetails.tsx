import { Link } from 'react-router-dom';
import { Footer } from '../layouts/Footer/Footer';
import { Header } from '../layouts/Header/Header';
import { BusinessType } from '../types/BusinessType';
import { Loading } from '../components/Animation/Loading';
import { useFetchPostId } from '../hooks/useFetchPostId';
import { useFetchPostsData } from '../hooks/useFetchPostsData';
import {
  ACQUISITION_CONDITION,
  API,
  BUSINESS_END_POINT,
  DOMAIN,
} from '../config/config';

export const BusinessDetails = () => {
  const currentPageId = useFetchPostId();

  const { postsData, isLoading } = useFetchPostsData<BusinessType>(
    DOMAIN,
    BUSINESS_END_POINT,
    ACQUISITION_CONDITION,
    API,
    currentPageId
  );

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <section className="businessDetails" data-testid="businessDetals">
            <div className="businessDetails__container">
              <h1 className="businessDetails__title">Details</h1>
              <p className="businessDetails__lead">
                選択したプロジェクトの詳細です
              </p>
              <div className="businessDetails__wrapper">
                {postsData.map((post) => (
                  <div className="businessDetails__richEditor" key={post.id}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: post.details,
                      }}
                    ></div>
                  </div>
                ))}
              </div>
              <div className="businessDetails__button">
                <Link
                  to={'/business/1'}
                  className="businessDetails__button--layout"
                >
                  一覧に戻る
                </Link>
              </div>
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  );
};
