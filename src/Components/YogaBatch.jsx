import React, { useState } from 'react';

const YogaBatch = () => {
  const availableDates = ['2024-08-01', '2024-08-02', '2024-08-03', '2024-08-04', '2024-08-05', '2024-08-06', '2024-08-07', '2024-08-08', '2024-08-09', '2024-08-10'];
  const availableTimeSlots = ['10:00 AM - 11:00 AM', '5:00 PM - 6:00 PM'];

  const [selectedDateSlot, setSelectedDateSlot] = useState(availableDates[0]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(availableTimeSlots[0]);

  const handleDateSlotChange = (date) => {
    setSelectedDateSlot(date);
    setSelectedTimeSlot(availableTimeSlots[0]);
  };

  const handleTimeSlotChange = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };

  const handleSchedule = () => {
    console.log(`Scheduled for ${selectedTimeSlot} on ${selectedDateSlot}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuOOYNT8Uu2xEkic8PQpCkc8d3qoV2713E7A&usqp=CAU"
        alt="Yoga Batch"
        className="w-full h-48 object-cover mb-4"
      />

      <div className="mb-4 ">
        <label htmlFor="dateSlot" className="block font-bold mb-2 ">Select Date Slot:</label>
        <div className="flex flex-wrap gap-2">
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

      <div className="mb-4 mr-auto ml-64">
        <label htmlFor="timeSlot" className="block font-bold mb-2">Select Time Slot:</label>
        <div className="flex flex-wrap gap-2">
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

      <button
        className="bg-blue-500 text-white px-4 py-2 mr-auto ml-96 rounded hover:bg-blue-600 transition duration-300 "
        onClick={handleSchedule}
      >
        Schedule
      </button>
    </div>
  );
};

export default YogaBatch;
