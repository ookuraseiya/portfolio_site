import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Footer } from '../components/common/Footer';
import { Header } from '../components/common/Header';
import { Pagination } from '../components/utility/Pagination';
import { PersonalType } from '../components/utility/type/PersonalType';
import { Loading } from '../components/animetions/Loading';

export const Personal = () => {
  let { id } = useParams();
  const [posts, setPosts] = useState<PersonalType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
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
        setPosts(data.contents);
        setLoading(false);
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
      {loading ? (
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
              {/* judge() が true の場合に表示 */}
              {judge() && (
                <>
                  <ul className="personal__wrapper">
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
                          height={''}
                          width={''}
                          loading="lazy"
                        />
                        <p className="personal__card--lead">{post.name}</p>
                      </Link>
                    ))}
                  </ul>
                  <Pagination
                    id={Number(id)}
                    currentPage={currentPage}
                    paginationNumber={paginationNumber}
                    pageUrl={'personal'}
                  />
                </>
              )}

              {/* judge() が false の場合に表示 */}
              {!judge() && (
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
