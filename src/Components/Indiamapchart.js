
import React from 'react';
import './Indiamapchart.css'; 
import india from './india.png'

const Indiamapchart = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-white p-6 rounded-lg ">
        <p className="text-gray-600 mb-4">
          Attributes as per location, years of experience, specialization
        </p>
        <img
          src={india}
          alt="Colorful map of India with different states in various colors"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Indiamapchart;
