import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Footer } from '../components/common/Footer';
import { Header } from '../components/common/Header';
import { Pagination } from '../components/utility/Pagination';
import { BusinessType } from '../components/utility/type/BusinessType';
import { Loading } from '../components/animetions/Loading';

export const Business = () => {
  let { id } = useParams();
  const [posts, setPosts] = useState<BusinessType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(
      `${String(import.meta.env.VITE_MICROCMS_DOMAIN)}${String(
        import.meta.env.VITE_MICROCMS_ENDPOINT_BUSINESS
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
          <section className="business">
            <div className="business__container">
              <h1 className="business__title">Business development</h1>
              <p className="business__lead">
                これまで業務で携わってきたプロジェクトです
              </p>
              <ul className="business__wrapper">
                {judge() ? (
                  <>
                    {posts.slice(firstPost, lastPost).map((post) => (
                      <Link
                        className="business__card"
                        to={`/businessDetail/${post.id}`}
                        key={post.id}
                      >
                        <p className="business__card--label">プロジェクト名:</p>
                        <p className="business__card--lead">{post.name}</p>
                        <p className="business__card--label">開発期間:</p>
                        <p className="business__card--lead">{post.period}</p>
                      </Link>
                    ))}
                  </>
                ) : (
                  <h1 className="business__card--error">
                    プロジェクトがありません。
                  </h1>
                )}
              </ul>
              <Pagination
                id={Number(id)}
                currentPage={currentPage}
                paginationNumber={paginationNumber}
                pageUrl={'business'}
              />
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  );
};
