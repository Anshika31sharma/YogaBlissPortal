import React, { useRef } from 'react';
import yogaVideo from '../Assets/yoga.mp4';
import icon1 from '../Assets/icon1.jpg';
import icon2 from '../Assets/icon2.jpg';
import icon3 from '../Assets/icon3.jpg';
function HomePage() {
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <>
      <div className="flex mt-10">
        <div className="w-1/2 ml-10">
          <h1 className="text-4xl font-bold mb-4">Yoga for Mind</h1>
          <p className="text-lg">Watch our Lead Yoga Therapist.</p>
         
        </div>
        <div className="w-1/2">
          <video className="max-w-xl rounded-lg" ref={videoRef} controls>
            <source src={yogaVideo} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className='flex gap-3  items-center justify-center '>
      <div className=" h-64 w-80 bg-white dark:bg-slate-300  shadow-lg mt-10 flex flex-col items-center justify-center">
  <img
    src={icon1}
    alt="Card Image"
    className=" h-24"
  />
  <h1 className="text-center font-extrabold text-3xl mt-5">Hard to feel calm</h1>
  <button className=' w-48 rounded hover:bg-red-400 border border-red-400 mt-12'> Book trial</button>
</div>
<div className=" h-64 w-80 bg-white dark:bg-slate-300 ml-20 shadow-lg mt-10 flex flex-col items-center justify-center">
  <img
    src={icon2}
    alt="Card Image"
    className=" h-24"
  />
  <h1 className="text-center font-extrabold text-3xl mt-5">If you have breathing problem</h1>
  <button className=' w-48 rounded hover:bg-red-400 border border-red-400 mt-5'> Book trial</button>
</div>
<div className="h-64 w-80 bg-white dark:bg-slate-300 ml-20 shadow-lg mt-10 flex flex-col items-center justify-center">
  <img
    src={icon3}
    alt="Card Image"
    className="h-24"
  />
  <h1 className="text-center font-extrabold text-3xl mt-5">You have avoided physical activity.</h1>
  <button className='w-48 rounded hover:bg-red-400 border border-red-400 mt-5'>Book trial</button>
</div>

      </div>
    </>
  );
}

export default HomePage;
