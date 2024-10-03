import { Link } from 'react-router-dom';
import { Footer } from '../layouts/Footer/Footer';
import { Header } from '../layouts/Header/Header';
import { PersonalType } from '../types/PersonalType';
import { Loading } from '../components/Animation/Loading';
import { useGetPostId } from '../hooks/useGetPostId';
import {
  ACQUISITION_CONDITION,
  API,
  DOMAIN,
  PERSONAL_END_POINT,
} from '../config/config';
import { useFetchPostsData } from '../hooks/useFetchPostsData';
import { isPostsDataExisted } from '../features/isPostsDataExisted';

export const PersonalDetails = () => {
  const currentPageId = useGetPostId();

  const { postsData, isLoading } = useFetchPostsData<PersonalType>(
    DOMAIN,
    PERSONAL_END_POINT,
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
          {isPostsDataExisted<PersonalType>(postsData) ? (
            <section className="personalDetails" data-testid="personalDetails">
              <div className="personalDetails__container">
                <h1 className="personalDetails__title">Details</h1>
                <p className="personalDetails__lead">
                  選択したプロダクトの詳細です
                </p>
                <ul className="personalDetails__wrapper">
                  {postsData.map((post) => (
                    <div className="personalDetails__richEditor" key={post.id}>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: post.details,
                        }}
                      ></div>
                    </div>
                  ))}
                  <div className="personalDetails__button">
                    <Link
                      to={'/personal/1'}
                      className="personalDetails__button--layout"
                    >
                      一覧に戻る
                    </Link>
                  </div>
                </ul>
              </div>
            </section>
          ) : (
            <h1 className="personal__card--error">プロダクトがありません。</h1>
          )}
          <Footer />
        </>
      )}
    </>
  );
};
