import { Link } from "react-router-dom";
import { Footer } from "../layouts/Footer/Footer";
import { Header } from "../layouts/Header/Header";

export const Works = () => {
  return (
    <>
      <Header />
      <section className="works" data-testid="works">
        <div className="works__container">
          <h1 className="works__title">Works</h1>
          <p className="works__lead">これまで開発してきたプロダクト達です</p>
          <div className="works__wrapper">
            <Link
              className="works__card works__card--personal"
              to={"/personal/1"}
            >
              <div className="works__card--wrapper">
                <h1 className="works__card--heading">Personal development</h1>
                <p className="works__card--lead">
                  これまで個人で開発してきたプロダクトです
                </p>
              </div>
            </Link>
            <Link
              className="works__card works__card--business"
              to={"/business/1"}
            >
              <div className="works__card--wrapper">
                <h1 className="works__card--heading">Business development</h1>
                <p className="works__card--lead">
                  これまで業務で携わってきたプロジェクトです
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
