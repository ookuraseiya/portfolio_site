import { Link } from "react-router-dom";
import { memo } from "react";
import { PersonalType } from "../../types/PersonalType";

type Props = {
  post: PersonalType;
};

export const PersonalItem = memo(({ post }: Props) => {
  return (
    <Link
      className="personal__card"
      to={`/personalDetail/${post.id}`}
      key={post.id}
    >
      <img
        className="personal__card--image"
        src={post.image.url}
        alt="これまで個人で開発してきたプロダクトの画像"
        height={""}
        width={""}
        loading="lazy"
      />
      <p className="personal__card--lead">{post.name}</p>
    </Link>
  );
});
