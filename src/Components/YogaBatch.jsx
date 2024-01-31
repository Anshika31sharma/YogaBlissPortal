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
    <div className="flex flex-col items-center justify-center min-h-screen mx-auto p-4">
      <img
        src="https://images.unsplash.com/photo-1616699002805-0741e1e4a9c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eW9nYSUyMGNsYXNzfGVufDB8MHwwfHx8MA%3D%3D"
        alt="Yoga Batch"
        className=" md:max-w-5xl object-cover mb-4"
      />

      <div className="text-center mb-4">
        <h2 className=" mt-5 text-4xl font-medium">What is Yoga for the mind</h2>
        <p className="mt-2 text-lg text-gray-500">
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis ullam sapiente eum libero rem voluptate nihil eligendi reprehenderit, illum cumque provident ad consequuntur unde dolorum, hic quas, asperiores consequatur quam veniam ut nam adipisci incidunt. Ducimus omnis excepturi quidem obcaecati neque explicabo, incidunt cumque.
        </p>
      </div>

      <div className="mb-4 w-full md:w-2/3">
        <label htmlFor="dateSlot" className="block font-bold mb-2">Select Date Slot:</label>
        <div className="flex flex-wrap gap-2">
          {availableDates.map((date) => (
            <div
              key={date}
              className={`border p-2 rounded-2xl cursor-pointer ${selectedDateSlot === date ? ' bg-green-900 text-white' : 'hover:bg-gray-200'}`}
              onClick={() => handleDateSlotChange(date)}
            >
              {date}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4 w-full md:w-2/3">
        <label htmlFor="timeSlot" className="block font-bold mb-2">Select Time Slot:</label>
        <div className="flex flex-wrap gap-2">
          {availableTimeSlots.map((timeSlot) => (
            <div
              key={timeSlot}
              className={`border p-2 rounded-2xl cursor-pointer ${selectedTimeSlot === timeSlot ? 'bg-green-900 text-white' : 'hover:bg-gray-200'}`}
              onClick={() => handleTimeSlotChange(timeSlot)}
            >
              {timeSlot}
            </div>
          ))}
        </div>
      </div>

      <button
        className="bg-red-400 text-white px-4 py-2 w-40 rounded-3xl hover:bg-red-500 transition duration-300"
        onClick={handleSchedule}
      >
        Schedule
      </button>
    </div>
  );
};

export default YogaBatch;
