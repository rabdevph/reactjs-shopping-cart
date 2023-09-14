const FooterLinks = () => {
  const listClass = 'footer-ul-links | flex flex-col gap-3 text-xs list-none';
  const listItemClass = 'footer-link | cursor-pointer';

  return (
    <div className="footer-links | hidden | md:flex md:gap-8">
      <ul className={listClass}>
        <li className="footer-links-header | font-black">ABOUT</li>
        <li className={listItemClass}>About ADDTOCART</li>
        <li className={listItemClass}>Disclaimer</li>
        <li className={listItemClass}>Privacy Policy</li>
      </ul>
      <ul className={listClass}>
        <li className="footer-links-header | font-black">CUSTOMER SERVICE</li>
        <li className={listItemClass}>Shipping Information</li>
        <li className={listItemClass}>Returns Information</li>
        <li className={listItemClass}>Order Tracking</li>
        <li className={listItemClass}>FAQs</li>
        <li className={listItemClass}>Feedback</li>
      </ul>
    </div>
  );
};

export default FooterLinks;
