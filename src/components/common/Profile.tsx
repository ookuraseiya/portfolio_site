export const Profile = () => {
  return (
    <>
      <section className="profile">
        <div className="profile__container">
          <h1 className="profile__title">About</h1>
          <div className="profile__wrapper">
            <div className="profile__image">
              <img
                className="profile__image--layout"
                src={'/images/profile-image.webp'}
                alt="profile image"
              />
            </div>
            <p className="profile__text">
              　初めましてせいーやです。本名は大倉聖也と言います。大阪工業大学
              情報科学部
              ネットワークデザイン学科に在籍している大学4年生（2024/02/16
              現在）です。現在は、中小IT企業でWeb制作・開発や社内システム開発に携わっています。最近の業務ではjavaとSpring
              Bootsを個人ではReactとTypeScrptをよく触っています。
              <br />
              <br />
              主な経歴です：
              <br />
              ・2021/02 ~ 2023/06：
              <br />
              Web系のスタートアップ企業でアルバイト入社。主にWeb制作・開発や社内システム開発に携わった。
              <br />
              ・2022/06 ~ 2024/02（今現在）：
              <br />
              中小IT企業でアルバイト入社。主にWeb制作・開発や社内システム開発に携わった。
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
