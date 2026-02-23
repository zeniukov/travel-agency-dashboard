export const mockTrip = {
  name: "Discover Italy: Rome & Florence",
  description:
    "A cultural journey through Italy’s most iconic cities, combining history, art, and authentic cuisine.",
  estimatedPrice: "$1200",
  duration: 5,
  budget: "medium",
  travelStyle: "cultural",
  country: "Italy",
  interests: ["history", "art", "food"],
  groupType: "solo",
  bestTimeToVisit: [
    "🌸 Spring (March–May): mild weather and fewer crowds",
    "☀️ Summer (June–August): vibrant city life and festivals",
    "🍁 Autumn (September–October): perfect sightseeing weather",
    "❄️ Winter (November–February): cozy atmosphere and lower prices",
  ],
  weatherInfo: [
    "☀️ Summer: 25–32°C (77–90°F)",
    "🌦️ Spring: 15–22°C (59–72°F)",
    "🌧️ Autumn: 14–20°C (57–68°F)",
    "❄️ Winter: 5–12°C (41–54°F)",
  ],
  location: {
    city: "Rome",
    coordinates: [41.9028, 12.4964],
    openStreetMap: "https://www.openstreetmap.org/#map=6/41.9028/12.4964",
  },
  itinerary: [
    {
      day: 1,
      location: "Rome",
      activities: [
        {
          time: "Morning",
          description: "🏛 Visit the Colosseum and Roman Forum",
        },
        {
          time: "Afternoon",
          description: "🍝 Lunch in Trastevere and city walk",
        },
        {
          time: "Evening",
          description: "🌇 Sunset at Piazza Venezia",
        },
      ],
    },
    {
      day: 2,
      location: "Rome",
      activities: [
        {
          time: "Morning",
          description: "⛪ Vatican Museums and Sistine Chapel",
        },
        {
          time: "Afternoon",
          description: "☕ Relax near Piazza Navona",
        },
        {
          time: "Evening",
          description: "🍷 Traditional Italian dinner",
        },
      ],
    },
    {
      day: 3,
      location: "Florence",
      activities: [
        {
          time: "Morning",
          description: "🚄 Train to Florence",
        },
        {
          time: "Afternoon",
          description: "🖼 Uffizi Gallery",
        },
        {
          time: "Evening",
          description: "🌉 Walk across Ponte Vecchio",
        },
      ],
    },
  ],
};
