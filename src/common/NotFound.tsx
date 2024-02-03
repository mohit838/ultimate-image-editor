import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='page-content-center flex-col overflow-hidden'>
      <div className='font-jostFont font-extrabold text-[6rem] text-center'>
        <span>404</span>
        <h1>NotFound</h1>
      </div>
      <span className='cursor-pointer px-4 py-2 bg-white text-[#242424] rounded-lg'>
        <Link to={'/'}>{'Wana go Homepage?'}</Link>
      </span>
    </div>
  );
};

export default NotFound;
