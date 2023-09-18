import { Outlet } from 'react-router-dom';

const Content = () => {
  return (
    <main id="content">
      <Outlet />
    </main>
  );
};

export default Content;
