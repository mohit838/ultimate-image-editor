import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';
import NotFound from '../common/NotFound';
import Home from '../components/Home/Home';

const Layout = () => {
  return (
    <>
      <div className='flex flex-col h-screen'>
        <Navbar />
        <div className='flex-1'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    path: '*',
    element: (
      <>
        <NotFound />
      </>
    ),
  },
]);

const Routing = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Routing;
