import { useState } from 'react';

const ImageEditor = () => {
  const [brightness, setBrightness] = useState(100);
  const [saturation, setSaturation] = useState(100);
  const [inversion, setInversion] = useState(0);
  const [grayscale, setGrayscale] = useState(0);
  const [currentFilter, setCurrentFilter] = useState<string>('Brightness');
  const [leftRotate, setLeftRotate] = useState('0');
  const [rightRotate, setRightRotate] = useState('0');
  const [flipHorizontal, setFlipHorizontal] = useState('1');
  const [flipVertical, setFlipVertical] = useState('1');
  const [imageFile, setImageFile] = useState<File | null>(null);

  const loadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | null = e.target.files ? e.target.files[0] : null;
    if (!file) return;
    setImageFile(file);
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const handleChangeControlValue = (controlName: string, value) => {
    switch (controlName) {
      case 'Brightness':
        setBrightness(value);
        break;
      case 'Saturation':
        setSaturation(value);
        break;
      case 'Inversion':
        setInversion(value);
        break;
      case 'Grayscale':
        setGrayscale(value);
        break;
      default:
        break;
    }
    setCurrentFilter(controlName);
  };

  const handleResetFilters = () => {
    setBrightness(100);
    setSaturation(100);
    setInversion(0);
    setGrayscale(0);
    setCurrentFilter('Brightness');
    setRightRotate('0');
    setLeftRotate('0');
    setFlipVertical('0');
    setFlipVertical('0');
    setFlipHorizontal('0');
  };

  // Apply filter to image
  const filterStyle = {
    filter: `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`,
  };

  // Apply transform to image
  const transformStyle = {
    transform: `rotate(${leftRotate ? leftRotate : rightRotate}deg) scaleX(${
      flipHorizontal.includes('180') ? -1 : 1
    }) scaleY(${flipVertical.includes('180') ? -1 : 1})`,
  };

  console.log(transformStyle);

  return (
    <div className='grid grid-cols-1 tablet:grid-cols-2 gap-5 p-5'>
      {/* left */}
      <div>
        {/* Options */}
        <div>
          {/* Filters */}
          <div className=''>
            <label className='text-[2rem] font-semibold'>Filters</label>
            <div className='grid grid-cols-1 tablet:grid-cols-2 gap-5 py-3'>
              <button
                id='brightness'
                className={`${
                  currentFilter === 'Brightness'
                    ? 'control-options bg-[#ff6347]'
                    : 'control-options'
                }`}
                onClick={() => setCurrentFilter('Brightness')}
              >
                Brightness
              </button>
              <button
                id='saturation'
                className={`${
                  currentFilter === 'Saturation'
                    ? 'control-options bg-[#ff6347]'
                    : 'control-options'
                }`}
                onClick={() => setCurrentFilter('Saturation')}
              >
                Saturation
              </button>
              <button
                id='inversion'
                className={`${
                  currentFilter === 'Inversion'
                    ? 'control-options bg-[#ff6347]'
                    : 'control-options'
                }`}
                onClick={() => setCurrentFilter('Inversion')}
              >
                Inversion
              </button>
              <button
                id='grayscale'
                className={`${
                  currentFilter === 'Grayscale'
                    ? 'control-options bg-[#ff6347]'
                    : 'control-options'
                }`}
                onClick={() => setCurrentFilter('Grayscale')}
              >
                Grayscale
              </button>
            </div>
          </div>

          {/* Filter Range Control */}
          <div className='mt-3'>
            <div className='filter-info'>
              <p className='name'>{currentFilter}</p>
              <p className='value'>
                {currentFilter === 'Brightness'
                  ? brightness
                  : currentFilter === 'Saturation'
                  ? saturation
                  : currentFilter === 'Inversion'
                  ? inversion
                  : grayscale}
              </p>
            </div>
            <input
              className='slider-range'
              type='range'
              value={
                currentFilter === 'Brightness'
                  ? brightness
                  : currentFilter === 'Saturation'
                  ? saturation
                  : currentFilter === 'Inversion'
                  ? inversion
                  : grayscale
              }
              min='0'
              max={`${
                currentFilter === 'Inversion' || currentFilter === 'Grayscale'
                  ? '100'
                  : '200'
              }`}
              onChange={(e) =>
                handleChangeControlValue(currentFilter, e.target.value)
              }
            />
          </div>

          {/* Rotate and Flip Control */}
          <div className='mt-3'>
            <label className='title'>Rotate & Flip</label>
            <div className='grid grid-cols-4 gap-4'>
              <button
                id='left'
                className='control-options-rotate-flip'
                onClick={() => {
                  setRightRotate('90');
                }}
              >
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
              <button
                id='right'
                className='control-options-rotate-flip'
                onClick={() => {
                  setLeftRotate('-90');
                }}
              >
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
              <button
                id='horizontal'
                className='control-options-rotate-flip'
                onClick={() => {
                  setFlipHorizontal('180');
                }}
              >
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
              <button
                id='vertical'
                className='control-options-rotate-flip'
                onClick={() => {
                  setFlipVertical('-180');
                }}
              >
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
          <button className='btn-primary mt-4' onClick={handleResetFilters}>
            {'Reset All'}
          </button>
        </div>
      </div>

      {/* Right */}
      <div>
        <div className='preview-img'>
          <img
            src={`${
              imageFile
                ? URL.createObjectURL(imageFile)
                : '/common/image-placeholder.svg'
            }`}
            alt='preview-img'
            style={{ ...filterStyle, ...transformStyle }}
          />
        </div>
        <div className='mt-4 flex items-center justify-between gap-3'>
          <input className='' type='file' onChange={loadImage} />

          {imageFile && <button className='btn-primary'>{'Save Image'}</button>}
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;
