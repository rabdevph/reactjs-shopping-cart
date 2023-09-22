import { Link } from 'react-router-dom';

import notFound from '../assets/images/error-404.png';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 h-screen w-full">
      <img src={notFound} alt="" className="h-64 w-auto" />
      <p className="font-medium font-rubik text-2xl">PAGE NOT FOUND</p>
      <Link to="/" className="bg-emerald-500 text-white px-4 py-2 text-sm">
        Go to our home page
      </Link>
    </div>
  );
};

export default NotFound;

// attribution
// <a href="https://www.flaticon.com/free-icons/error-404" title="error 404 icons">Error 404 icons created by Valueinvestor - Flaticon</a>
