const Header = () => {
  return (
    <div className='text-center py-5'>
      <h1 className='text-[3rem] font-jostFont font-bold '>
        {'Open And Free Ultimate Image Editor'}
      </h1>
      <h2 className='text-[1.5rem] underline px-2 tablet:px-0'>
        {'Introducing the Ultimate Image Editor: Your Gateway to Creativity!'}
      </h2>
      <p className='text-[1.125rem] font-jostFont font-normal container mx-auto py-5'>
        Unlock your creative potential with our open and free image editing
        software. With just a few clicks, you can rotate, flip, and adjust color
        contrast to perfection, all at absolutely no cost. But that's not all -
        we're an open-source project, meaning anyone can contribute and help
        shape the future of image editing. Join us in revolutionizing the way
        the world edits images - download now and unleash your imagination!
      </p>
      <div>
        <button className='px-8 py-4 bg-[#2d2d2d] text-white text-[20px] drop-shadow-lg rounded-md hover:bg-[#ff6347] hover:text-[#242424] hover:transition-all hover:duration-500'>
          <a
            href='https://github.com/mohit838/ultimate-image-editor'
            target='_blank'
            title='UIE | Ultimate Image Editor'
            className='flex items-center justify-center gap-3'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-brand-github-filled'
              width='44'
              height='44'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='#2c3e50'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path
                d='M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z'
                stroke-width='0'
                fill='currentColor'
              />
            </svg>
            <span>{'Ultimate Image Editor'}</span>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Header;
