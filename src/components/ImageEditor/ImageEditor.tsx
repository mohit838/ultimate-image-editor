import { useState } from 'react';

const ImageEditor = () => {
  const [brightness, setBrightness] = useState<number>(100);
  const [saturation, setSaturation] = useState<number>(100);
  const [inversion, setInversion] = useState<number>(0);
  const [grayscale, setGrayscale] = useState<number>(0);
  const [rotate, setRotate] = useState<number>(0);
  const [flipHorizontal, setFlipHorizontal] = useState<number>(1);
  const [flipVertical, setFlipVertical] = useState<number>(1);
  const [file, setFile] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (!selectedFile) return;
    setFile(URL.createObjectURL(selectedFile));
    resetFilter();
  };

  const loadImage = () => {
    if (!file) return;
    resetFilter();
  };

  const applyFilter = () => {
    // Implement applyFilter logic here
  };

  const updateFilter = (value: number) => {
    // Implement updateFilter logic here
  };

  const resetFilter = () => {
    setBrightness(100);
    setSaturation(100);
    setInversion(0);
    setGrayscale(0);
    setRotate(0);
    setFlipHorizontal(1);
    setFlipVertical(1);
    applyFilter();
  };

  const saveImage = () => {
    return null;
  };

  return (
    <div className='grid grid-cols-2'>
      {/* left */}
      <div>
        <input type='file' onChange={handleFileChange} />
        <div>
          <button>{'Reset All'}</button>
        </div>
      </div>

      {/* Right */}
      <div>
        <input type='file' onChange={handleFileChange} />
        <div>
          <button>{'Choose Image'}</button>
          <button>{'Save Image'}</button>
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;
