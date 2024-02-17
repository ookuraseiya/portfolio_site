import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Footer } from '../components/common/Footer';
import { Header } from '../components/common/Header';
import { BusinessType } from '../components/utility/type/BusinessType';

export const BusinessDetails = () => {
  let { id } = useParams();
  const [posts, setPosts] = useState<BusinessType[]>([]);

  useEffect(() => {
    fetch(
      `${String(import.meta.env.VITE_MICROCMS_DOMAIN)}${String(
        import.meta.env.VITE_MICROCMS_ENDPOINT_BUSINESS
      )}`,
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
      });
  }, [id]);

  return (
    <>
      <Header />
      <section className="businessDetails">
        <div className="businessDetails__container">
          <h1 className="businessDetails__title">
            Business development details
          </h1>
          <p className="businessDetails__lead">
            選択したプロジェクトの詳細です
          </p>
          <ul className="businessDetails__wrapper">
            {posts.map((post) => (
              <div className="businessDetails__richEditor" key={post.id}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.details,
                  }}
                ></div>
              </div>
            ))}
            <div className="businessDetails__button">
              <Link
                to={'/business/1'}
                className="businessDetails__button--layout"
              >
                一覧に戻る
              </Link>
            </div>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};
