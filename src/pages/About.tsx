import { Footer } from '../components/common/Footer';
import { Header } from '../components/common/Header';
import { Profile } from '../components/common/Profile';
import { Skill } from '../components/common/Skill';

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
