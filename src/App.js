import React from "react";
import Testimonials from "./Components/Testimonials";
import reviews from "./data";

const App = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200 text-center relative">
        <h1 className="text-4xl font-bold absolute top-5">Our Testimonials</h1>
        <div className="bg-violet-400 h-[2px] w-[18rem] mt-1 absolute top-[3.4rem]"></div>
        <Testimonials reviews={reviews} />
    </div>
  );
};

export default App;
