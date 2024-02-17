import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Footer } from '../components/common/Footer';
import { Header } from '../components/common/Header';
import { Pagination } from '../components/utility/Pagination';
import { PersonalType } from '../components/utility/type/PersonalType';

export const Personal = () => {
  let { id } = useParams();
  const [posts, setPosts] = useState<PersonalType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

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
        setPosts(data.contents);
      });
  }, []);

  useEffect(() => {
    setCurrentPage(Number(id));
  }, [id]);

  const PER_PAGE: number = 9;
  const lastPost: number = currentPage * PER_PAGE;
  const firstPost: number = lastPost - PER_PAGE;
  const totalPosts: number = posts.length;
  const paginationNumber: number = Math.ceil(totalPosts / PER_PAGE);

  const judge = () => {
    if (1 > Number(id) || paginationNumber < Number(id) || isNaN(Number(id))) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      <Header />
      <section className="personal">
        <div className="personal__container">
          <h1 className="personal__title">Personal development</h1>
          <p className="personal__lead">
            これまで個人で開発してきたプロダクトです
          </p>
          <ul className="personal__wrapper">
            {judge() ? (
              <>
                {posts.slice(firstPost, lastPost).map((post) => (
                  <Link
                    className="personal__card"
                    to={`/personalDetail/${post.id}`}
                    key={post.id}
                  >
                    <img
                      className="personal__card--image"
                      src={post.image.url}
                      alt="これまで個人で開発してきたプロダクトの画像"
                    />
                    <p className="personal__card--lead">{post.name}</p>
                  </Link>
                ))}
              </>
            ) : (
              <h1 className="personal__card--error">
                プロダクトがありません。
              </h1>
            )}
          </ul>
          <Pagination
            id={Number(id)}
            currentPage={currentPage}
            paginationNumber={paginationNumber}
            pageUrl={'personal'}
          />
        </div>
      </section>
      <Footer />
    </>
  );
};
