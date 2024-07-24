import { Link } from "react-router-dom";
import { BusinessType } from "../../types/BusinessType";
import { memo } from "react";

type Props = {
  post: BusinessType;
};

export const BusinessItem = memo(({ post }: Props) => {
  return (
    <Link
      className="business__card"
      to={`/businessDetail/${post.id}`}
      key={post.id}
    >
      <p className="business__card--label">プロジェクト名:</p>
      <p className="business__card--lead">{post.name}</p>
      <p className="business__card--label">開発期間:</p>
      <p className="business__card--lead">{post.period}</p>
    </Link>
  );
});
