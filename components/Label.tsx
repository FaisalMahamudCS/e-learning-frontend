import React from 'react';

interface LabelComponentProps {
  text: string;
  htmlFor?: string;
  className?: string;
}

const LabelComponent: React.FC<LabelComponentProps> = ({ text, htmlFor, className }) => {
  return (
    <label htmlFor={htmlFor} className={`w-full font-medium   ${className}`}>
      {text}
    </label>
  );
};

export default LabelComponent;