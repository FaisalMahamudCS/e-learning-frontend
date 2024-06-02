import React from 'react';

// Define the type for the component props
interface HeadingProps {
  children:string;
}

const Heading: React.FC<HeadingProps> = ({ children }) => {
  return (
    <p className="m-2 font-bold">
      {children}
    </p>
  );
};

export default Heading;
