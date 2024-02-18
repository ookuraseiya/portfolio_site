import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Footer } from '../components/common/Footer';
import { Header } from '../components/common/Header';
import { Loading } from '../components/animetions/Loading';

export const Works = () => {
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <section className="works">
            <div className="works__container">
              <h1 className="works__title">Works</h1>
              <p className="works__lead">
                これまで開発してきたプロダクト達です
              </p>
              <div className="works__wrapper">
                <Link
                  className="works__card works__card--personal"
                  to={'/personal/1'}
                >
                  <div className="works__card--wrapper">
                    <h1 className="works__card--heading">
                      Personal development
                    </h1>
                    <p className="works__card--lead">
                      これまで個人で開発してきたプロダクトです
                    </p>
                  </div>
                </Link>
                <Link
                  className="works__card works__card--business"
                  to={'/business/1'}
                >
                  <div className="works__card--wrapper">
                    <h1 className="works__card--heading">
                      Business development
                    </h1>
                    <p className="works__card--lead">
                      これまで業務で開発してきたプロダクトです
                    </p>
                  </div>
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
