import { Link } from 'react-router-dom';

type PaginationProps = {
  id: number;
  currentPage: number;
  paginationNumber: number;
  pageUrl: string;
};

export const Pagination = ({
  id,
  currentPage,
  paginationNumber,
  pageUrl,
}: PaginationProps) => {
  return (
    <>
      <section className="pagination">
        <ul className="pagination__list">
          <li
            className={id === 1 ? 'pagination__disabled' : 'pagination__link'}
          >
            <Link className="pagination__href" to={`/${pageUrl}/${id - 1}`}>
              &lt;
            </Link>
          </li>
          <li className="pagination__position">
            {currentPage} / {paginationNumber}
          </li>
          <li
            className={
              id === paginationNumber
                ? 'pagination__disabled'
                : 'pagination__link'
            }
          >
            <Link className="pagination__href" to={`/${pageUrl}/${id + 1}`}>
              &gt;
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
};
