import FooterNewsletterSocmed from './FooterNewsletterSocmed.jsx';
import FooterLinks from './FooterLinks.jsx';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main-box">
        <FooterNewsletterSocmed />
        <FooterLinks />
      </div>
      <div className="footer-line-break"></div>
      <div className="footer-project-details">
        <div className="footer-dev-details">
          <div className="footer-dev-copyright">
            <p>&copy; 2023 rabdevph. All rights reserved.</p>
            <p>This is a sample project for demonstration purposes only.</p>
          </div>
        </div>
        <div className="footer-attribution">
          <p>
            Photo in banner by{' '}
            <a href="https://unsplash.com/@huntersrace?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Hunters Race
            </a>{' '}
            on{' '}
            <a href="https://unsplash.com/photos/hNoSCxPWYII?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
