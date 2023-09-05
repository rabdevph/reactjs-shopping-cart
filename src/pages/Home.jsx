import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="home">
      <div className="home-intro-wrapper">
        <div className="home-intro">
          <p className="home-intro-text">ELEVATE YOUR SHOPPING EXPERIECE TODAY!</p>
          <Link to="shop" className="home-shop-link">
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;

// attribution
// Photo by <a href="https://unsplash.com/@huntersrace?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Hunters Race</a> on <a href="https://unsplash.com/photos/hNoSCxPWYII?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
