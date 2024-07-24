import { Footer } from "../layouts/Footer/Footer";
import { Header } from "../layouts/Header/Header";
import { Profile } from "../layouts/Profile/Profile";
import { Skill } from "../layouts/Skill/Skill";

export const About = () => {
  return (
    <>
      <Header />
      <section className="about" data-testid="about">
        <div className="about__container">
          <Profile />
          <Skill />
        </div>
      </section>
      <Footer />
    </>
  );
};
