export const travelList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole travels in exploration",
    icon: "✈️",
    people: "1",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two travels in tandem",
    icon: "🥂",
    people: "2 People",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun loving adv",
    icon: "🏠",
    people: "3 to 5 People",
  },
  {
    id: 4,
    title: "Friends",
    desc: "Friends make everything better, vacations included!",
    icon: "🏃‍♂️🏃",
    people: "6 to 10 People",
  },
];

export const travelBudget = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of costs",
    icon: "💵",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep cost on the average side",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Dont worry about the costs",
    icon: "💸💸",
  },
];

export const AI_PROMPT ='Generate a detailed travel plan for {location} for {totalDays} days for {noOfPeople} people with a {budget} budget. Provide a list of hotel options with hotel name, address, price, hotel image URL, geo coordinates, rating, and descriptions. Suggest an itinerary with place name, place details, place image URL, geo coordinates, ticket pricing, rating, and allocate hourly timings for each location for 3 days with the best time to visit, all in JSON format. Provide approximate information based on your data, without leaving any fields to be inserted manually. In the price range, just provide the approximate value itself without mentioning "approx". mention the currency withe the price itself and not separately';