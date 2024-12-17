import React from "react";
import { FiShare2 } from "react-icons/fi";


function InfoSection({ trip }) {
  return (
    <div>
      <img
        src="/background.jpg"
        className="h-[350px] w-full object-cover rounded-xl"
      />
      <div className="flex justify-between items-center">
        <div className="my-3 flex flex-col gap-2">
          <h2 className="font-bold text-lg">
            📍{trip?.userSelection?.location?.label}
          </h2>
          <div className="hidden sm:flex gap-5">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-sm">
              📅{trip?.userSelection?.noOfDays} Days
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-sm">
              💰{trip?.userSelection?.budget} Budget
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-sm">
              🥂No of People: {trip?.userSelection?.noOfPeople}
            </h2>
          </div>
        </div>
        <FiShare2 />
      </div>
    </div>
  );
}

export default InfoSection;
