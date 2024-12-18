import { Button } from '@/components/ui/button';
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import {FaMapLocationDot} from "react-icons/fa6";
import { Link } from 'react-router-dom';

function PlaceCardItem({place}) {
  const [photoUrl, setPhotoUrl] = useState();
    useEffect(() => {
      place && GetPlacePhoto();
    }, [place]);
  
    const GetPlacePhoto = async () => {
      const data = {
        textQuery: place.placeName,
      };
      const result = await GetPlaceDetails(data).then((resp) => {
        console.log(resp.data.places[0].photos[3].name);
  
        const PhotoUrl = PHOTO_REF_URL.replace(
          "{NAME}",
          resp.data.places[0].photos[3].name
        );
        setPhotoUrl(PhotoUrl);
      });
    };
  return (
    <div className="border rounded-xl p-3 my-2 flex gap-5">
      <img
        src={photoUrl?photoUrl:'background.jpg'}
        className="w-[200px] h-[120px] rounded-lg hover:scale-105 transition-all hover:shadow-md cursor-pointer"
      ></img>
      <div>
        <h2 className="font-bold text-md hover:scale-105">{place.placeName}</h2>
        <p className="text-sm text-gray-400">{place?.placeDetails}</p>
        <div className="flex gap-2 my-1">
          <h2 className="text-sm text-gray-800">⭐{place?.rating}</h2>
          <h2 className="text-sm text-gray-800">💰{place?.ticketPricing}</h2>
        </div>
        <Button
          size="sm"
          onClick={() =>
            window.open(
              "https://www.google.com/maps/search/?api=1&query=" +
                place?.placeName,
              "_blank"
            )
          }
        >
          <FaMapLocationDot />
        </Button>
      </div>
    </div>
  );
}

export default PlaceCardItem