import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Footer } from '../components/common/Footer';
import { Header } from '../components/common/Header';
import { PersonalType } from '../components/utility/type/PersonalType';
import { Loading } from '../components/animetions/Loading';

export const PersonalDetails = () => {
  let { id } = useParams();
  const [posts, setPosts] = useState<PersonalType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(
      `${String(import.meta.env.VITE_MICROCMS_DOMAIN)}${String(
        import.meta.env.VITE_MICROCMS_ENDPOINT_PERSONAL
      )}?limit=100&orders=-publishedAt`,
      {
        headers: {
          'X-API-KEY': String(import.meta.env.VITE_MICROCMS_API_KEY),
        },
        method: 'GET',
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setPosts(
          data.contents.filter((data: { id: string }) => data.id === String(id))
        );
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <section className="personalDetails">
            <div className="personalDetails__container">
              <h1 className="personalDetails__title">
                Personal development details
              </h1>
              <p className="personalDetails__lead">
                選択したプロダクトの詳細です
              </p>
              <ul className="personalDetails__wrapper">
                {posts.map((post) => (
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
          <Footer />
        </>
      )}
    </>
  );
};
