import { Link } from "react-router-dom";
import { Header } from "../layouts/Header/Header";
import { Footer } from "../layouts/Footer/Footer";

export const NotFoundPage = () => {
  return (
    <>
      <Header />
      <section className="notFound" data-testid="404">
        <div className="notFound__container">
          <h1 className="notFound__title">ページは存在しません</h1>
          <div className="notFound__button">
            <Link to="/" className="notFound__button--layout">
              トップページに戻る
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
