import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { AI_PROMPT, travelBudget, travelList } from "@/constants/options";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { chatSession } from "@/service/AIMODAL";


function CreateTrip() {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState({});

  const handleInputChange = (name, value) => {
    if(name=='noOfDays && value >= 7'){
      console.log("Enter trip details less than 8");
      return ;
    }
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const onGenerateTrip=async()=>{
    if(formData?.noOfDays >= 7 && !formData?.location || !formData?.noOfDays|| !formData?.noOfPeople || !formData?.budget) {
      toast("Please fill all the details")
      return ;
    }
    toast("Trip created Successfully")
    const FINAL_PROMPT = AI_PROMPT.replace('{location}',formData?.location?.label).replace('{totalDays}',formData?.noOfDays).replace('{noOfPeople}',formData?.noOfPeople).replace('{budget}',formData?.budget);

    const result = await chatSession.sendMessage(FINAL_PROMPT)

    console.log(result?.response?.text())
  }

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 mt-10">
      <h2 className="font-semibold text-3xl">
        Tell us Your Travel Preference ⛺
      </h2>
      <p className="mt-5 text-[#32a86b] text-xl">
        Provide some basic information and our trip planner will generate an
        Itinerary📃
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
                handleInputChange("location", v);
              },
            }}
          ></GooglePlacesAutocomplete>
        </div>
        <div>
          <h2 className=" mt-5 text-xl font-medium">
            What is the duration of your trip?
          </h2>
          <Input
            type="number"
            placeholder={"Ex.3 or 4"}
            onChange={(e) => handleInputChange("noOfDays", e.target.value)}
          />
        </div>
      </div>
      <div>
        <h2 className="text-xl my-3 font-medium">
          What is the budget of your trip?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
          {travelBudget.map((item, index) => (
            <div
              key={index}
              onClick={() => handleInputChange("budget", item.title)}
              className={`p-3 border rounded-lg hover:shadow cursor-pointer ${
                formData?.budget == item.title && "border-black"
              }`}
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
              onClick={() => handleInputChange("noOfPeople", item.people)}
              className={`p-4 border rounded-lg hover:shadow cursor-pointer ${
                formData?.noOfPeople == item.people && "border-black"
              }`}
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
        <Button onClick={onGenerateTrip}>Generate Trip</Button>
      </div>
    </div>
  );
}

export default CreateTrip;
