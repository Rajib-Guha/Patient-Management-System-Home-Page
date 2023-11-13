import React from 'react';

export default function Practitioner({ name, type, practitioner_image }) {
  return (
    <div className="bg-transparent border border-grey p-4 w-1/6 h-50 shadow-lg rounded-xl mb-4 ml-8 ">
      <img src={practitioner_image} alt="Old Man Doctor" className="object-cover h-32 w-32 mb-4 mx-auto" />
      <div className='mb-5'>
        <h3 className="text-black font-bold mt-3 mb-1 text-2xl">{name}</h3>
        <div className="pt-1">
          <p>{type}</p>
        </div>
      </div>

    </div>
  );
};
