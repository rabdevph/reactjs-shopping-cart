import '../assets/loader.css';

const Loader = ({ text }) => {
  return (
    <div className="loader">
      <p className="loader-text">{text}</p>
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;
