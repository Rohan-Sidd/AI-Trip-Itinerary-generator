import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { travelBudget, travelList } from "@/constants/options";
import { Button } from "@/components/ui/button";

function CreateTrip() {
  const [place, setPlace] = useState();
  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 mt-10">
      <h2 className="font-semibold text-3xl">Tell us Your Travel Preference</h2>
      <p className="mt-5 text-[#32a86b] text-xl">
        Provide some basic information and our trip planner will generate an
        Itinerary
      </p>
      <div>
        <div className="mt-9 gap-10">
          <h2 className="text-xl font-medium">
            What is the destination of your trip?
          </h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (v) => {
                setPlace(v);
                console.log(v);
              },
            }}
          ></GooglePlacesAutocomplete>
        </div>
        <div>
          <h2 className=" mt-5 text-xl font-medium">
            What is the duration of your trip?
          </h2>
          <Input type="number" placeholder={"Ex.3 or 4"} />
        </div>
      </div>
      <div>
        <h2 className="text-xl my-3 font-medium">
          What is the budget of your trip?
        </h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {travelBudget.map((item, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg hover:shadow cursor-pointer"
            >
              <h2>{item.icon}</h2>
              <h2 className="font-bold">{item.title}</h2>
              <h2 className="text-sm text-gray-400">{item.desc}</h2>
            </div>
          ))}
        </div>
        <h2 className="text-xl my-3 font-medium">
          Number of People Travelling
        </h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {travelList.map((item, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg hover:shadow cursor-pointer"
            >
              <h2>{item.icon}</h2>
              <h2 className="font-bold">{item.title}</h2>
              <h2 className="text-sm text-gray-400">{item.desc}</h2>
              <h2 className="text-sm text-gray-400">{item.people}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="my-10">
        <Button>Generate Trip</Button>
      </div>
    </div>
  );
}

export default CreateTrip;
