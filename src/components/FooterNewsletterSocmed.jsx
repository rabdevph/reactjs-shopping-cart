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
    <div className="footer-newsletter-socmed-wrapper">
      <form className="footer-newsletter" onSubmit={handleSubmit}>
        <p className="footer-newsletter-header">Never miss a thing</p>
        <div className="footer-newsletter-input-wrapper">
          <input
            ref={inputRef}
            id="email"
            type="text"
            className="footer-newsletter-email"
            placeholder="Email"
            autoComplete="off"
          />
          <button type="submit" className="footer-newsletter-submit-button">
            <img src={arrow} alt="" />
          </button>
        </div>
      </form>
      <div className="footer-socmed">
        <div className="footer-socmed-header">Follow us on social media</div>
        <div className="footer-socmed-icons">
          <FacebookIcon />
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
};

export default FooterNewsletterSocmed;
