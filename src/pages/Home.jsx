import { useEffect } from 'react';

import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="home" className="flex items-center justify-center h-svh w-full">
      <div
        id="home-content-wrapper"
        className="flex items-center bg-home bg-center bg-cover bg-no-repeat h-full w-full text-white relative px-4 md:px-8 lg:px-16 "
      >
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="flex flex-col items-center gap-16 relative">
          <p className="text-center font-inter font-black text-5xl md:text-7xl">
            ELEVATE YOUR SHOPPING EXPERIECE TODAY!
          </p>
          <Link
            to="shop"
            className="border rounded text-white px-8 py-3 outline-none no-underline w-max hover:shadow-shop-link"
          >
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
