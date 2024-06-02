import React from 'react';

// Define the type for the component props
interface OrderDetailsProps {
  price: number;
  discount: number;
  tax: number;
  total: number;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ price, discount, tax, total }) => {
  return (
    <div className="order-details border border-gray-200 rounded-lg bg-white p-2 mb-[20px]">
      <div className="flex justify-between gap-[183px]">
        <p>Price</p>
        <p>{price}$</p>
      </div>
      <div className="flex justify-between gap-[183px]">
        <p>Discount</p>
        <p>{discount}$</p>
      </div>
      <div className="flex justify-between gap-[183px]">
        <p>Tax</p>
        <p>{tax}$</p>
      </div>
      <div className='border border-gray-200 my-4 border-1'></div>
      <div className="flex justify-between gap-[183px]">
        <p>Total</p>
        <p>{total}$</p>
      </div>
    </div>
  );
};

export default OrderDetails;
