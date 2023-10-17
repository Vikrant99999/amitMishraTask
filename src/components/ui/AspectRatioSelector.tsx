import React from 'react';

const AspectRatioSelector: React.FC = (props: any) => {
 const [selectedOption, setAspectRatio] = props;
  const handleOptionChange = (option: string) => {
    setAspectRatio(option);
  };

  return (
    <div className="flex space-x-4">
      <div
        className={`cursor-pointer w-20 h-40 border border-black ${
          selectedOption === 'Vertical' ? 'border-4' : ''
        }`}
        onClick={() => handleOptionChange('Vertical')}
      >
        Vertical
      </div>
      <div
        className={`cursor-pointer w-40 h-40 border border-black ${
          selectedOption === 'Square' ? 'border-4' : ''
        }`}
        onClick={() => handleOptionChange('Square')}
      >
        Square
      </div>
      <div
        className={`cursor-pointer w-40 h-20 border border-black ${
          selectedOption === 'Horizontal' ? 'border-4' : ''
        }`}
        onClick={() => handleOptionChange('Horizontal')}
      >
        Horizontal
      </div>
    </div>
  );
};

export {AspectRatioSelector};
