import React, { useState } from 'react';

const YogaBatch = () => {
  const [selectedDateSlot, setSelectedDateSlot] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  // Dummy data for available dates and times
  const availableDates = ['2024-08-01', '2024-08-02', '2024-08-03', '2024-08-04', '2024-08-05', '2024-08-06', '2024-08-07', '2024-08-08', '2024-08-09', '2024-08-10'];
  const availableTimeSlots = ['10:00 AM - 11:00 AM', '5:00 PM - 6:00 PM'];

  const handleStartDateChange = (e) => {
    // Reset other selections
    setSelectedDateSlot(null);
    setSelectedTimeSlot(null);
  };

  const handleDateSlotChange = (date) => {
    setSelectedDateSlot(date);
    // Reset time slot selection
    setSelectedTimeSlot(null);
  };

  const handleTimeSlotChange = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };

  const handleSchedule = () => {
    // Handle scheduling logic here
    console.log(`Scheduled for ${selectedTimeSlot} on ${selectedDateSlot}`);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-4 w-full">
      {/* Image */}
      <img
        src="https://images.unsplash.com/photo-1616699002805-0741e1e4a9c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eW9nYSUyMGNsYXNzfGVufDB8MHwwfHx8MA%3D%3D"
        alt="Yoga Batch"
        className="w-full h-48 object-cover mb-4"
      />


      {/* Date Slots */}
      <div className="mb-4">
        <label htmlFor="dateSlot" className="block font-bold mb-2">Select Date Slot:</label>
        <div className="flex gap-2">
          {availableDates.map((date) => (
            <div
              key={date}
              className={`border p-2 cursor-pointer ${selectedDateSlot === date ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
              onClick={() => handleDateSlotChange(date)}
            >
              {date}
            </div>
          ))}
        </div>
      </div>

      {/* Time Slots */}
      <div className="mb-4">
        <label htmlFor="timeSlot" className="block font-bold mb-2">Select Time Slot:</label>
        <div className="flex gap-2">
          {availableTimeSlots.map((timeSlot) => (
            <div
              key={timeSlot}
              className={`border p-2 cursor-pointer ${selectedTimeSlot === timeSlot ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
              onClick={() => handleTimeSlotChange(timeSlot)}
            >
              {timeSlot}
            </div>
          ))}
        </div>
      </div>

      {/* Schedule Button */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        onClick={handleSchedule}
        disabled={!selectedTimeSlot || !selectedDateSlot || !selectedStartDate}
      >
        Schedule
      </button>
    </div>
  );
};

export default YogaBatch;
