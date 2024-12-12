import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate Travel Plan for Location : Las Vegas, for 3 Days for Couple with a Cheap budget ,Give me a Hotels options list with Hotel Name, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit inJSONformat.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: 'I cannot directly access and display images or real-time pricing for hotels.  Hotel prices are incredibly dynamic and change constantly.  Therefore, I will provide you with a JSON structure that you can populate with information you find yourself using online travel agencies like Expedia, Booking.com, Kayak, etc.  Remember to check for deals and compare prices before booking.\n\n\n```json\n{\n  "tripDetails": {\n    "location": "Las Vegas, Nevada",\n    "duration": "3 Days",\n    "travelers": "Couple",\n    "budget": "Cheap"\n  },\n  "hotels": [\n    {\n      "hotelName": "Name of Hotel 1",\n      "hotelAddress": "Full Address of Hotel 1",\n      "price": "Enter Price Range (e.g., $50-$80)", \n      "hotelImageUrl": "URL of Hotel Image", \n      "geoCoordinates": "[Latitude, Longitude]",\n      "rating": "4.0",\n      "description": "Short description of the hotel"\n    },\n    {\n      "hotelName": "Name of Hotel 2",\n      "hotelAddress": "Full Address of Hotel 2",\n      "price": "Enter Price Range (e.g., $60-$90)",\n      "hotelImageUrl": "URL of Hotel Image",\n      "geoCoordinates": "[Latitude, Longitude]",\n      "rating": "3.8",\n      "description": "Short description of the hotel"\n    },\n    {\n      "hotelName": "Name of Hotel 3",\n      "hotelAddress": "Full Address of Hotel 3",\n      "price": "Enter Price Range (e.g., $70-$100)",\n      "hotelImageUrl": "URL of Hotel Image",\n      "geoCoordinates": "[Latitude, Longitude]",\n      "rating": "4.2",\n      "description": "Short description of the hotel"\n    }\n\n  ],\n  "itinerary": {\n    "day1": [\n      {\n        "placeName": "Fremont Street Experience",\n        "placeDetails": "Free walking area with light shows, street performers, and casinos.",\n        "placeImageUrl": "URL of Fremont Street Image",\n        "geoCoordinates": "[Latitude, Longitude]",\n        "ticketPricing": "Free",\n        "rating": "4.5",\n        "travelTime": "1-2 hours"\n      },\n      {\n        "placeName": "Container Park",\n        "placeDetails": "Shopping, dining, and entertainment area with unique shops and a giant praying mantis sculpture.",\n        "placeImageUrl": "URL of Container Park Image",\n        "geoCoordinates": "[Latitude, Longitude]",\n        "ticketPricing": "Free entry, prices vary for shops and food.",\n        "rating": "4.2",\n        "travelTime": "2-3 hours"\n      }\n    ],\n    "day2": [\n      {\n        "placeName": "The Strip (walking tour)",\n        "placeDetails": "Walk along the Strip, admiring the iconic hotels and casinos.",\n        "placeImageUrl": "URL of Las Vegas Strip Image",\n        "geoCoordinates": "[Latitude, Longitude]", \n        "ticketPricing": "Free (unless you enter casinos or shows)",\n        "rating": "5.0",\n        "travelTime": "4-5 hours"\n      },\n      {\n        "placeName": "Bellagio Conservatory & Botanical Gardens",\n        "placeDetails": "Free stunning seasonal displays.",\n        "placeImageUrl": "URL of Bellagio Conservatory Image",\n        "geoCoordinates": "[Latitude, Longitude]",\n        "ticketPricing": "Free",\n        "rating": "4.6",\n        "travelTime": "1 hour"\n      }\n    ],\n    "day3": [\n      {\n        "placeName": "Seven Magic Mountains",\n        "placeDetails": "Outdoor art installation south of Las Vegas (requires transportation).",\n        "placeImageUrl": "URL of Seven Magic Mountains Image",\n        "geoCoordinates": "[Latitude, Longitude]",\n        "ticketPricing": "Free",\n        "rating": "4.4",\n        "travelTime": "2-3 hours (including travel time)"\n      },\n\n      {\n        "placeName": "Red Rock Canyon National Conservation Area",\n        "placeDetails": "Hiking and scenic drives (requires transportation).",\n        "placeImageUrl": "URL of Red Rock Canyon Image",\n        "geoCoordinates": "[Latitude, Longitude]",\n        "ticketPricing": "Entrance fee applies.",\n        "rating": "4.7",\n        "travelTime": "4-5 hours (including travel time)"\n      }\n\n    ]\n  },\n  "bestTimeToVisit": "Fall (September-November) or Spring (March-May) for pleasant weather."\n}\n```\n\n**To use this:**\n\n1. **Find Hotels:** Use online travel agencies to find hotels matching your budget.  Fill in the `hotels` section with the details.\n2. **Add Images:** Find and insert image URLs for the hotels and attractions.\n3. **Get GeoCoordinates:** Use Google Maps or a similar service to get the latitude and longitude for each location.\n4. **Check Pricing:** Confirm current pricing for attractions (some may be free).\n5. **Adjust Itinerary:** This itinerary is a suggestion; tailor it to your interests and preferences.  Consider free activities like walking the Strip and enjoying the free shows at casinos.  Public transportation exists but rideshare services may be more convenient for some locations.\n\nRemember to factor in transportation costs (consider walking where possible to save money) and food expenses when budgeting.  Look for deals and discounts on attractions and shows.  Have a great trip!\n',
        },
      ],
    },
  ],
});
