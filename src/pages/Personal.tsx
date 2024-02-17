import { Link } from 'react-router-dom';
import { Footer } from '../components/common/Footer';
import { Header } from '../components/common/Header';
import { Pagination } from '../components/utility/Pagination';

export const Personal = () => {
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
            <Link className="personal__card" to={''}>
              <img
                className="personal__card--image"
                src={'/images/profile-image.webp'}
                alt="これまで個人で開発してきたプロダクトの画像"
              />
              <p className="personal__card--lead">プロダクト名</p>
            </Link>

            <Link className="personal__card" to={''}>
              <img
                className="personal__card--image"
                src={'/images/profile-image.webp'}
                alt="これまで個人で開発してきたプロダクトの画像"
              />
              <p className="personal__card--lead">プロダクト名</p>
            </Link>

            <Link className="personal__card" to={''}>
              <img
                className="personal__card--image"
                src={'/images/profile-image.webp'}
                alt="これまで個人で開発してきたプロダクトの画像"
              />
              <p className="personal__card--lead">プロダクト名</p>
            </Link>

            <Link className="personal__card" to={''}>
              <img
                className="personal__card--image"
                src={'/images/profile-image.webp'}
                alt="これまで個人で開発してきたプロダクトの画像"
              />
              <p className="personal__card--lead">プロダクト名</p>
            </Link>

            <Link className="personal__card" to={''}>
              <img
                className="personal__card--image"
                src={'/images/profile-image.webp'}
                alt="これまで個人で開発してきたプロダクトの画像"
              />
              <p className="personal__card--lead">プロダクト名</p>
            </Link>
          </ul>
          <Pagination />
        </div>
      </section>
      <Footer />
    </>
  );
};
