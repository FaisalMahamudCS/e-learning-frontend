import React from 'react';

interface InputComponentProps {
    label?: string;
    type?: string;
    value: string;
    onChange: (value: string) => void;
    className?: string;
    placeholder?:string
  }
  
  const InputComponent: React.FC<InputComponentProps> = ({
    label,
    type = 'text',
    value,
    onChange,
    className,
    placeholder
  }) => {
    return (
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={className}
            placeholder={placeholder}
          />
    );
  };
  
  export default InputComponent;