import { Link } from 'react-router-dom';
import { Footer } from '../components/common/Footer';
import { Header } from '../components/common/Header';

export const PersonalDetails = () => {
  return (
    <>
      <Header />
      <section className="personalDetails">
        <div className="personalDetails__container">
          <h1 className="personalDetails__title">
            Personal development details
          </h1>
          <p className="personalDetails__lead">選択したプロダクトの詳細です</p>
          <ul className="personalDetails__wrapper">
            {/* ここにリッチエディタが入る */}
            <div className="personalDetails__button">
              <Link to={'/'} className="personalDetails__button--layout">
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
