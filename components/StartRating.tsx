import React from 'react';
import { IoIosStar } from 'react-icons/io';

// Define the type for the component props
interface StarRatingProps {
  reviews?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ reviews }) => {
  return (
    <div className="flex items-center">
      <IoIosStar className="text-[#EAB308]" />
      <IoIosStar className="text-[#EAB308]" />
      <IoIosStar className="text-[#EAB308]" />
      <IoIosStar className="text-[#EAB308]" />
      <IoIosStar className="text-[#EAB308]" />
   { reviews&&  <p className="ml-2">{reviews} Reviews</p>}
    </div>
  );
};

export default StarRating;
