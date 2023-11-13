import React from 'react';

export default function UpcomingAppointment({type, name, date}){
  return (
    <div className="bg-transparent border border-grey p-4 mr-2 w-full shadow-lg rounded-xl">
      <h3 className="text-black font-bold mb-2 text-2xl">{type}</h3>
      <div className="pt-1">
        <p>Acupuncture with Dr. {name}</p>
        <p>{date}</p>
      </div>
      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-8">View</button>
    </div>
  );
};


