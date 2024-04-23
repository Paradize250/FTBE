import React, { useState, useEffect } from 'react';

const DevisCreator = () => {
  const [services, setServices] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility
  const [totalEstimateValue, setTotalEstimateValue] = useState(0); // State to store total

  useEffect(() => {
    // Fetch services from your Symfony backend
    fetch('/api/outil')
      .then(response => response.json())
      .then(data => setServices(data));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Calculate the estimate based on selected services
    const response = await fetch('/api/outil', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ selectedServices }),
    });
    const data = await response.json();
    setTotalEstimateValue(data.totalEstimate); // Update total estimate value
    setShowPopup(true); // Show popup
  };
  // Function to close the popup
  const handleClosePopup = () => setShowPopup(false);

  // Render form with service checkboxes and a submit button
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#a1ce3f] to-[#014760] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Devis</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          fait une estimation du coût de nos services!
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-2xl sm:mt-20">
        {services.map(service => (
          <div key={service.id} className="flex items-center space-x-2 pl-4"> {/* Adjust the wrapper div classes as needed */}
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-700 text-cyan-600 focus:ring-cyan-600"
              value={service.id}
              onChange={e => {
                const newSelectedServices = e.target.checked
                  ? [...selectedServices, service.id]
                  : selectedServices.filter(id => id !== service.id);
                setSelectedServices(newSelectedServices);
              }}
            />
            <div className="flex-auto flex p-7 justify-between"> {/* This div wraps the description and price for custom styling */}
              <div className="text-sm font-medium w-3/4 text-gray-700"> {/* Style the description div */}
                {service.description}
              </div>
              <div className="text-sm font-semibold w-1/4 text-nowrap text-end text-gray-900"> {/* Style the price div */}
                {service.price} €
              </div>
            </div>
          </div>
        ))}
        <button type="submit" className="block w-full rounded-md bg-cyan-900 px-3.5 py-2.5 my-7 text-center text-sm font-semibold text-white shadow-sm hover:bg-cyan-850 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600">
          Total
        </button>
      </form>
      {/* Popup to display the total estimate */}
      {showPopup && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg w-96 shadow-lg items-center">
            <h3 className="text-lg font-semibold">Estimation Total</h3>
            <p className="text-gray-800">{totalEstimateValue} €</p>
            <button onClick={handleClosePopup} className="mt-3 px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DevisCreator;
