import React from 'react';
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import LineChart from '../../../components/Dashboard/LineChart';

const Page = () => {
  const menuItems = [
    { text: 'Item 1', href: '/', icon: <FaHome /> },
    { text: 'Item 2', href: '/about', icon: <FaInfoCircle /> },
    { text: 'Item 3', href: '/contact', icon: <FaEnvelope /> },
  ];

  return (
    <div className="flex">
      <div className="fixed top-0 left-0 h-screen w-64 bg-[#0F172A] text-white p-4">
        <h2 className="text-xl font-bold mb-4">Your Logo</h2>
        <ul className="list-none p-0">
          {menuItems.map((item) => (
            <li key={item.text} className="mb-2 flex items-center">
              <a href={item.href} className="text-white hover:opacity-75 flex items-center">
                <span className="mr-3">{item.icon}</span>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="ml-64 p-8 flex-grow bg-gray-100">
        {/* Your main content goes here */}
        <h1 className="text-4xl">Welcome to the Dashboard</h1>
        <p className="mt-4">This is the main content area.</p>
        <LineChart/>
      </div>
    </div>
  );
};

export default Page;
