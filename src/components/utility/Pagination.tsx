import { Link } from 'react-router-dom';

export const Pagination = () => {
  return (
    <>
      <section className="pagination">
        <ul className="pagination__list">
          <li className="pagination__link">
            <Link className="pagination__href" to={''}>
              &lt;
            </Link>
          </li>
          <li className="pagination__position">1 / 2</li>
          <li className="pagination__link">
            <Link className="pagination__href" to={''}>
              &gt;
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
};
