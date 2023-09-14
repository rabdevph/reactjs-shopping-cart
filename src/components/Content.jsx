import { Outlet } from 'react-router-dom';

const Content = () => {
  return (
    <main className="content | flex justify-center">
      <Outlet />
    </main>
  );
};

export default Content;
