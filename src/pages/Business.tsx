import { Link } from 'react-router-dom';
import { Footer } from '../components/common/Footer';
import { Header } from '../components/common/Header';
import { Pagination } from '../components/utility/Pagination';

export const Business = () => {
  return (
    <>
      <Header />
      <section className="business">
        <div className="business__container">
          <h1 className="business__title">Business development</h1>
          <p className="business__lead">
            これまで業務で携わってきたプロジェクトです
          </p>
          <ul className="business__wrapper">
            <Link className="business__card" to={''}>
              <p className="business__card--label">プロジェクト名:</p>
              <p className="business__card--lead">Webサイト制作・開発</p>
              <p className="business__card--label">開発期間:</p>
              <p className="business__card--lead">2022/12 - 2023/3</p>
            </Link>

            <Link className="business__card" to={''}>
              <p className="business__card--label">プロジェクト名:</p>
              <p className="business__card--lead">Webサイト制作・開発</p>
              <p className="business__card--label">開発期間:</p>
              <p className="business__card--lead">2022/12 - 2023/3</p>
            </Link>

            <Link className="business__card" to={''}>
              <p className="business__card--label">プロジェクト名:</p>
              <p className="business__card--lead">Webサイト制作・開発</p>
              <p className="business__card--label">開発期間:</p>
              <p className="business__card--lead">2022/12 - 2023/3</p>
            </Link>

            <Link className="business__card" to={''}>
              <p className="business__card--label">プロジェクト名:</p>
              <p className="business__card--lead">Webサイト制作・開発</p>
              <p className="business__card--label">開発期間:</p>
              <p className="business__card--lead">2022/12 - 2023/3</p>
            </Link>
          </ul>
          <Pagination />
        </div>
      </section>
      <Footer />
    </>
  );
};
