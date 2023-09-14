import { useRef } from 'react';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import arrow from '../assets/images/arrow.svg';

const FooterNewsletterSocmed = () => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    inputRef.current.value = '';
  };

  return (
    <div className="footer-newsletter-socmed-wrapper | flex flex-col gap-8 w-max">
      <form
        className="footer-newsletter | flex flex-col items-center gap-4 | md:items-start md:gap-5"
        onSubmit={handleSubmit}
      >
        <p className="footer-newsletter-header | font-inter font-black text-xl | md:text-2xl">
          Never miss a thing
        </p>
        <div className="footer-newsletter-input-wrapper | flex border border-solid border-white rounded px-6 py-4 w-80 |  md:items-center  ">
          <input
            ref={inputRef}
            id="email"
            type="text"
            className="footer-newsletter-email | bg-transparent border-none text-white font-opensans text-sm outline-none w-full"
            placeholder="Email"
            autoComplete="off"
          />

          <button
            type="submit"
            className="footer-newsletter-submit-button | bg-transparent flex items-center justify-center border-none outline-none"
          >
            <img src={arrow} alt="" />
          </button>
        </div>
      </form>

      <div className="footer-socmed | flex flex-col items-center justify-center gap-4 | md:items-start">
        <p className="footer-socmed-header | text-gray-200 text-sm">Follow us on social media</p>
        <div className="footer-socmed-icons | flex gap-3">
          <FacebookIcon />
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
};

export default FooterNewsletterSocmed;
