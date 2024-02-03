import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Footer from '../common/Footer';
import Header from '../common/Header';
import NotFound from '../common/NotFound';
import Home from '../components/Home/Home';

const Layout = () => {
  return (
    <>
      <div className='flex flex-col h-screen'>
        <Header />
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
    path: '/ultimate-image-editor/',
    element: <Layout />,
    children: [
      {
        path: '/ultimate-image-editor/',
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
