import { Link } from 'react-router-dom';
import { Footer } from '../layouts/Footer/Footer';

export const Main = () => {
  return (
    <>
      <section className="main" data-testid="main">
        <div className="main__container">
          <h1 className="main__title">Seiya's portfolio site</h1>
          <ul className="main__wrapper">
            <li className="main__link">
              <Link to={'/about'}>about</Link>
            </li>
            <li className="main__link">
              <Link to={'/works'}>works</Link>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};
