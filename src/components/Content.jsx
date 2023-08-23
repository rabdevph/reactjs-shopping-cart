import { Outlet } from 'react-router-dom';

const Content = () => {
  return (
    <main className="content common-pd">
      <Outlet />
    </main>
  );
};

export default Content;
