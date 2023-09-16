import FooterNewsletterSocmed from './FooterNewsletterSocmed.jsx';
import FooterLinks from './FooterLinks.jsx';

const Footer = () => {
  return (
    <footer className="footer | bg-black text-white | md:flex md:flex-col md:items-center">
      <div className="footer-main-box | flex flex-col items-center justify-center gap-8 p-8 text-base | md:flex-row md:justify-between md:gap-0 md:w-full md:px-8 | lg:px-16">
        <FooterNewsletterSocmed />
        <FooterLinks />
      </div>

      <div className="footer-line-break | bg-neutral-700 h-px w-full"></div>

      <div className="footer-project-details | flex flex-col items-center p-8 gap-8 text-xs text-gray-500 | md:flex-row md:justify-between md:w-full | lg:px-16">
        <div className="footer-dev-details | flex flex-col items-center | md:items-start">
          <p>&copy; 2023 rabdevph. All rights reserved.</p>
          <p className="text-center">This is a sample project for demonstration purposes only.</p>
        </div>
        <div className="attribution | flex flex-col items-center | md:items-end">
          <p>
            Photo in banner by{' '}
            <a
              href="https://unsplash.com/@huntersrace?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              className="text-white font-bold no-underline"
            >
              Hunters Race
            </a>{' '}
            on{' '}
            <a
              href="https://unsplash.com/photos/hNoSCxPWYII?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              className="text-white font-bold no-underline"
            >
              Unsplash
            </a>
          </p>
          <p>
            Empty cart icon created by{' '}
            <a
              href="https://www.flaticon.com/free-icons/empty-cart"
              className="text-white font-bold no-underline"
            >
              kerismaker - Flaticon
            </a>{' '}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
