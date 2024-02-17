import { Link } from 'react-router-dom';
import { Footer } from '../components/common/Footer';
import { Header } from '../components/common/Header';

export const BusinessDetails = () => {
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
            {/* ここにリッチエディタが入る */}
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};
