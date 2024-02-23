import { Link } from 'react-router-dom';
import { ScrollTop } from '../utility/ScrollTop';

export const Footer = () => {
  return (
    <>
      <ScrollTop />
      <footer className="footer" data-testid="footer">
        <div className="footer__container">
          <ul className="footer__wrapper">
            <li className="footer__link footer__link--unHover">
              © 2024 Seiya's portfolio site
            </li>
            <li className="footer__link">
              <Link to={'https://github.com/ookuraseiya'}>github</Link>
            </li>
            <li className="footer__link">
              <Link to={'mailto:seiya.ookura@gmail.com?'}>contact</Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
