import { Link } from "react-router-dom";

type Props = {
  currentPageId: number;
  paginationNumber: number;
  pageUrl: string;
};

export const Pagination = ({
  currentPageId,
  paginationNumber,
  pageUrl,
}: Props) => {
  return (
    <>
      <section className="pagination" data-testid="pagination">
        <ul className="pagination__list">
          <li
            className={
              currentPageId === 1 ? "pagination__disabled" : "pagination__link"
            }
          >
            <Link
              className="pagination__href"
              to={`/${pageUrl}/${currentPageId - 1}`}
            >
              &lt;
            </Link>
          </li>
          <li className="pagination__position">
            {currentPageId} / {paginationNumber}
          </li>
          <li
            className={
              currentPageId === paginationNumber
                ? "pagination__disabled"
                : "pagination__link"
            }
          >
            <Link
              className="pagination__href"
              to={`/${pageUrl}/${currentPageId + 1}`}
            >
              &gt;
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
};
