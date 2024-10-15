import { Link } from 'react-router-dom';
import { useScrollTop } from '../../hooks/useScrollTop';
import { usePageTracking } from '../../hooks/usePageTracking';

export const Footer = () => {
  useScrollTop();
  usePageTracking();
  return (
    <>
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
