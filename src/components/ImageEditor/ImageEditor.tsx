const ImageEditor = () => {
  return (
    <div className='grid grid-cols-2 gap-5 p-5'>
      {/* left */}
      <div>
        {/* Options */}
        <div>
          {/* Filters */}
          <div className=''>
            <label className='text-[2rem] font-semibold'>Filters</label>
            <div className='grid grid-cols-2 gap-5 py-3'>
              <button id='brightness' className='control-options'>
                Brightness
              </button>
              <button id='saturation' className='control-options'>
                Saturation
              </button>
              <button id='inversion' className='control-options'>
                Inversion
              </button>
              <button id='grayscale' className='control-options'>
                Grayscale
              </button>
            </div>
          </div>

          {/* Filter Range Control */}
          <div className='mt-2'>
            <div className='filter-info'>
              <p className='name'>Brighteness</p>
              <p className='value'>100%</p>
            </div>
            <input
              className='slider-range'
              type='range'
              value='100'
              min='0'
              max='200'
            />
          </div>

          {/* Rotate and Flip Control */}
          <div className='mt-2'>
            <label className='title'>Rotate & Flip</label>
            <div className='grid grid-cols-4 gap-4'>
              <button id='left' className='control-options-rotate-flip'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-rotate'
                  width='30'
                  height='30'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='#fff'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M19.95 11a8 8 0 1 0 -.5 4m.5 5v-5h-5' />
                </svg>
              </button>
              <button id='right' className='control-options-rotate-flip'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-rotate-clockwise'
                  width='30'
                  height='30'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='#fff'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5' />
                </svg>
              </button>
              <button id='horizontal' className='control-options-rotate-flip'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-flip-horizontal'
                  width='30'
                  height='30'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='#fff'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M3 12l18 0' />
                  <path d='M7 16l10 0l-10 5l0 -5' />
                  <path d='M7 8l10 0l-10 -5l0 5' />
                </svg>
              </button>
              <button id='vertical' className='control-options-rotate-flip'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-flip-vertical'
                  width='30'
                  height='30'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='#fff'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M12 3l0 18' />
                  <path d='M16 7l0 10l5 0l-5 -10' />
                  <path d='M8 7l0 10l-5 0l5 -10' />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Reset Functions */}
        <div>
          <button className='btn-primary mt-4'>{'Reset All'}</button>
        </div>
      </div>

      {/* Right */}
      <div>
        <input type='file' />
        <div>
          <button>{'Choose Image'}</button>
          <button>{'Save Image'}</button>
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;
