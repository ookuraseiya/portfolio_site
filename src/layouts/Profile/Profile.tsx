export const Profile = () => {
  return (
    <>
      <section className="profile" data-testid="profile">
        <div className="profile__container">
          <h1 className="profile__title">About</h1>
          <div className="profile__wrapper">
            <div className="profile__image">
              <img
                className="profile__image--layout"
                src={"/images/profile-image.webp"}
                alt="profile image"
                height={""}
                width={""}
                loading="lazy"
              />
            </div>
            <p className="profile__text">
              初めまして大倉聖也と言います。大阪にある情報系の学部に通っている大学4年生（2024/02/16
              現在）です。現在は、中小IT企業でWeb制作・開発や社内システム開発に携わっています。最近の業務ではJavaとSpring
              Bootsを個人ではReactとTypeScriptをよく触っています。
              <br />
              <br />
              主な経歴：
              <br />
              ・2021/02 ~ 2023/06：
              <br />
              Web系のスタートアップ企業でインターン（アルバイト）入社。主にWeb制作・開発や社内システム開発に携わった。
              <br />
              ・2022/06 ~ 2024/02（今現在）：
              <br />
              中小IT企業でインターン（アルバイト）入社。主にWeb制作・開発や社内システム開発に携わった。
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
