import { GoogleGenerativeAI} from "@google/generative-ai";

const apiKey = import.meta.env.GEMINI_API_KEY;
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
            text: "Generate Travel Plan for Location : Las Vegas, for 3 Days for Couple with a Cheap budget ,Give me a Hotels options list with Hotel Name, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit inJSONformat.",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: 'I cannot directly access and display images or real-time pricing for hotels.  Hotel prices are incredibly dynamic and change constantly.  The geocoordinates provided below are approximate and should be verified using a mapping service before your trip.  Therefore, the JSON below will lack image URLs and exact pricing.  You will need to use online travel agencies (like Booking.com, Expedia, Kayak, etc.) to find current prices and images for hotels and attractions.\n\n```json\n{\n  "trip": {\n    "location": "Las Vegas, Nevada",\n    "duration": "3 Days",\n    "travelers": "Couple",\n    "budget": "Cheap"\n  },\n  "hotels": [\n    {\n      "name": "Circus Circus Hotel & Casino",\n      "address": "2880 S Las Vegas Blvd, Las Vegas, NV 89109",\n      "price": "Check online travel agencies",\n      "imageUrl": "Unavailable - Search online",\n      "geoCoordinates": { "latitude": 36.1241, "longitude": -115.1702 },\n      "rating": "3.5 stars (example)",\n      "description": "A budget-friendly option with a circus theme, various amenities, and a central location on the Strip."\n    },\n    {\n      "name": "Excalibur Hotel & Casino",\n      "address": "3850 S Las Vegas Blvd, Las Vegas, NV 89109",\n      "price": "Check online travel agencies",\n      "imageUrl": "Unavailable - Search online",\n      "geoCoordinates": { "latitude": 36.0907, "longitude": -115.1745 },\n      "rating": "3.8 stars (example)",\n      "description": "Medieval-themed hotel on the Strip, offering affordable rooms and various entertainment options."\n    },\n    {\n      "name": "Luxor Hotel & Casino",\n      "address": "3900 S Las Vegas Blvd, Las Vegas, NV 89119",\n      "price": "Check online travel agencies",\n      "imageUrl": "Unavailable - Search online",\n      "geoCoordinates": { "latitude": 36.091, "longitude": -115.174 },\n      "rating": "3.7 stars (example)",\n      "description": "Pyramid-shaped hotel on the Strip with affordable options, though often more expensive than Circus Circus or Excalibur"\n\n    }\n\n  ],\n  "itinerary": {\n    "day1": {\n      "theme": "Strip Exploration",\n      "places": [\n        {\n          "name": "Welcome to Fabulous Las Vegas Sign",\n          "details": "Iconic sign for photos.",\n          "imageUrl": "Unavailable - Search online",\n          "geoCoordinates": { "latitude": 36.1003, "longitude": -115.1768 },\n          "ticketPricing": "Free",\n          "rating": "5 stars (example)",\n          "travelTime": "15 minutes"\n        },\n        {\n          "name": "Bellagio Fountains",\n          "details": "Free water show.",\n          "imageUrl": "Unavailable - Search online",\n          "geoCoordinates": { "latitude": 36.1115, "longitude": -115.1739 },\n          "ticketPricing": "Free",\n          "rating": "4.5 stars (example)",\n          "travelTime": "30 minutes"\n        },\n        {\n          "name": "Fremont Street Experience",\n          "details": "Free light show and entertainment.",\n          "imageUrl": "Unavailable - Search online",\n          "geoCoordinates": { "latitude": 36.1696, "longitude": -115.1400},\n          "ticketPricing": "Free (except for some shows)",\n          "rating": "4 stars (example)",\n          "travelTime": "1 hour (taxi or ride-share recommended)"\n        }\n      ]\n    },\n    "day2": {\n      "theme": "Nature and Value",\n      "places": [\n        {\n          "name": "Red Rock Canyon National Conservation Area",\n          "details": "Hiking and scenic drives (entrance fee applies).",\n          "imageUrl": "Unavailable - Search online",\n          "geoCoordinates": { "latitude": 36.1973, "longitude": -115.7619 },\n          "ticketPricing": "Check NPS website for current fees",\n          "rating": "4.8 stars (example)",\n          "travelTime": "30 minutes to 1 hour (depending on location within park) drive"\n        },\n        {\n          "name": "Seven Magic Mountains",\n          "details": "Public art installation for photos (free to view from the road).",\n          "imageUrl": "Unavailable - Search online",\n          "geoCoordinates": { "latitude": 36.0651, "longitude": -114.9767 },\n          "ticketPricing": "Free",\n          "rating": "4.0 stars (example)",\n          "travelTime": "30 minutes drive from Red Rock (if combining)"\n        }\n      ]\n    },\n    "day3": {\n      "theme": "Downtown and Relaxation",\n      "places": [\n        {\n          "name": "Downtown Container Park",\n          "details": "Unique shopping and dining experience.",\n          "imageUrl": "Unavailable - Search online",\n          "geoCoordinates": { "latitude": 36.1626, "longitude": -115.1446 },\n          "ticketPricing": "Free entry",\n          "rating": "4.2 stars (example)",\n          "travelTime": "15 minutes"\n        },\n          {\n          "name": "Pool Day at your Hotel",\n          "details": "Relax and enjoy the hotel amenities",\n          "imageUrl": "Unavailable - Search online",\n          "geoCoordinates": { "latitude": null, "longitude": null },\n          "ticketPricing": "Included in hotel stay",\n          "rating": null,\n          "travelTime": "0 minutes"\n        }\n      ]\n    }\n  },\n  "bestTimeToVisit": "Fall (September-November) and Spring (March-May) for pleasant weather."\n}\n```\n\nRemember to check the official websites of hotels and attractions for updated information on pricing and availability before you book your trip.  Also, consider using public transportation or ride-sharing services to minimize parking costs in Las Vegas.  Enjoy your trip!\n',
          },
        ],
      }
    ],
  });
