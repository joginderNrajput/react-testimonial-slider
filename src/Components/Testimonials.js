import React, { useState } from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Testimonials(props) {
    let reviews = props.reviews;
    const [index, setIndex] = useState(0);

    function leftShiftHandler(){
        if(index-1 < 0){
            setIndex(reviews.length-1);
        }else{
            setIndex(index-1);
        }
    }

    function leftRightHandler(){
        if(index+1 > reviews.length-1){
            setIndex(0);
        }else{
            setIndex(index+1);
        }
    }

    function SurpriseMeHanlder(){
        let num = Math.floor(Math.random()*reviews.length)
        setIndex(num);
    }
    return (
        <div className="w-[85vw] md:w-[700px] bg-white  flex flex-col justify-center items-center mt-10 p-10 transiton-all duration-300 hover:shadow-blue-700 hover:shadow-2xl hover:border-green-400 hover:border-2 rounded-md hover:rounded-md mb-4">
            <Card review={reviews[index]}></Card>

            <div className="flex text-3xl mt-5 gap-3 text-violet-500 font-bold justify-center items-center mx-auto">
                <button onClick={leftShiftHandler} className="cursor-pointer hover:text-violet-700">
                    <FiChevronLeft />
                </button>
                <button onClick={leftRightHandler} className="cursor-pointer hover:text-violet-700">
                    <FiChevronRight />
                </button>
            </div>

            <div className="mt-5">
                <button onClick={SurpriseMeHanlder} className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer py-2 px-10 rounded-md font-bold text-white text-lg">Surprise Me</button>
            </div>
        </div>
    );
}
export default Testimonials;
