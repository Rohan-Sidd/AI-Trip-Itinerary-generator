import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function Hotels({ trip }) {
  
  return (
    <div>
      <h2 className="font-bold text-xl mt-5">Hotel Recommendation</h2>

      <div className="grid grid-cols-2 my-5 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {trip?.tripData?.hotels?.map((hotel, index) => (
          <Link
            key={index}
            to={
              "https://www.google.com/maps/search/?api=1&query=" +
              hotel?.hotelName +
              hotel?.hotelAddress
            }
            target="_blank"
          >
            <div>
              <div>
                <img
                  className="hover:scale-110 cursor-pointer transition-all rounded-md"
                  src="/background.jpg"
                  alt="hotel"
                />
                <div className="mt-2 text-center">
                  <h2 className="font-medium">{hotel.hotelName}</h2>
                  <h2 className="text-sm text-gray-500">
                    📍{hotel?.address}
                  </h2>
                  <h2 className="text-sm text-gray-800">
                    💰{hotel?.price} per night
                  </h2>
                  <h2 className="text-sm text-gray-500">⭐{hotel?.rating}</h2>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Hotels;
