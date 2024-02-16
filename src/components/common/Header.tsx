import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <ul className="header__wrapper">
            <li className="header__link">
              <Link to={'/'}>home</Link>
            </li>
            <li className="header__link">
              <Link to={'/about'}>about</Link>
            </li>
            <li className="header__link">
              <Link to={'/works'}>works</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};
