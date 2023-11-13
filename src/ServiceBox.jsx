import React from 'react';

export default function Service({ service_name, type, massage_image }) {
    return (
        <div className="bg-transparent border border-grey ml-8 w-full h-50 shadow-lg rounded-xl flex flex-col">
            <div>
                <img src={massage_image} alt="Massage" className="w-full h-32 object-cover rounded-t-xl" />
                <h3 className="text-black font-bold mt-3 mb-1 text-xl pl-2">{type}</h3>
                <div className="pt-1 pl-2">
                    <p>{service_name}</p>
                </div>
            </div>
            <div className="pt-6 mt-auto">
                <button className="bg-blue-600 hover:bg-blue-950 text-white font-bold py-2 px-4 border border-blue-700 rounded w-full">
                    Book Now
                </button>
            </div>
        </div>
    );
};
