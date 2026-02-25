export const mockTrips = [
  {
    name: "Relaxed Paris Getaway",
    description:
      "A calm and elegant escape through Paris, focused on food, art, and slow city walks.",
    estimatedPrice: "$950",
    duration: 3,
    budget: "Mid-range",
    travelStyle: "Relaxed",
    country: "France",
    interests: "Food & Culinary",
    groupType: "Couple",
    bestTimeToVisit: [
      "🌸 Spring (March–May): blooming parks and pleasant weather",
      "☀️ Summer (June–August): long days and lively cafés",
      "🍁 Autumn (September–October): fewer crowds and warm colors",
      "❄️ Winter (November–February): cozy atmosphere and lower prices",
    ],
    weatherInfo: [
      "☀️ Summer: 18–25°C (64–77°F)",
      "🌦️ Spring: 10–18°C (50–64°F)",
      "🌧️ Autumn: 10–16°C (50–61°F)",
      "❄️ Winter: 2–7°C (36–45°F)",
    ],
    location: {
      city: "Paris",
      coordinates: [48.8566, 2.3522],
      openStreetMap: "https://www.openstreetmap.org/#map=6/48.8566/2.3522",
    },
    itinerary: [
      {
        day: 1,
        location: "Paris",
        activities: [
          { time: "Morning", description: "🥐 Breakfast at a local café" },
          { time: "Afternoon", description: "🖼️ Visit the Louvre Museum" },
          { time: "Evening", description: "🍷 Seine river walk" },
        ],
      },
      {
        day: 2,
        location: "Paris",
        activities: [
          { time: "Morning", description: "🌿 Luxembourg Gardens stroll" },
          { time: "Afternoon", description: "🛍️ Boutique shopping" },
          { time: "Evening", description: "🍽️ French dinner experience" },
        ],
      },
      {
        day: 3,
        location: "Paris",
        activities: [
          { time: "Morning", description: "☕ Coffee in Montmartre" },
          { time: "Afternoon", description: "🎨 Explore art galleries" },
          { time: "Evening", description: "🌇 Eiffel Tower views" },
        ],
      },
    ],
  },

  {
    name: "Adventure in the Swiss Alps",
    description:
      "An outdoor-focused adventure surrounded by alpine landscapes and fresh mountain air.",
    estimatedPrice: "$1400",
    duration: 4,
    budget: "Premium",
    travelStyle: "Adventure",
    country: "Switzerland",
    interests: "Hiking & Nature Walks",
    groupType: "Friends",
    bestTimeToVisit: [
      "🌸 Spring (April–May): melting snow and green valleys",
      "☀️ Summer (June–August): perfect hiking conditions",
      "🍁 Autumn (September): crisp air and golden scenery",
      "❄️ Winter (December–February): snowy alpine views",
    ],
    weatherInfo: [
      "☀️ Summer: 12–22°C (54–72°F)",
      "🌦️ Spring: 5–15°C (41–59°F)",
      "🍁 Autumn: 5–14°C (41–57°F)",
      "❄️ Winter: -5–5°C (23–41°F)",
    ],
    location: {
      city: "Interlaken",
      coordinates: [46.6863, 7.8632],
      openStreetMap: "https://www.openstreetmap.org/#map=6/46.6863/7.8632",
    },
    itinerary: [
      {
        day: 1,
        location: "Interlaken",
        activities: [
          { time: "Morning", description: "🚶 Walk around alpine town" },
          { time: "Afternoon", description: "🚠 Cable car to viewpoints" },
          { time: "Evening", description: "🍲 Swiss dinner" },
        ],
      },
      {
        day: 2,
        location: "Lauterbrunnen",
        activities: [
          { time: "Morning", description: "🥾 Valley hiking" },
          { time: "Afternoon", description: "📸 Waterfall photography" },
          { time: "Evening", description: "🌌 Quiet mountain evening" },
        ],
      },
      {
        day: 3,
        location: "Grindelwald",
        activities: [
          { time: "Morning", description: "🏔 Scenic train ride" },
          { time: "Afternoon", description: "🥾 Alpine trails" },
          { time: "Evening", description: "🔥 Chalet relaxation" },
        ],
      },
      {
        day: 4,
        location: "Interlaken",
        activities: [
          { time: "Morning", description: "☕ Coffee with mountain views" },
          { time: "Afternoon", description: "🛍️ Souvenir shopping" },
          { time: "Evening", description: "✈️ Departure" },
        ],
      },
    ],
  },

  {
    name: "Tokyo City Exploration",
    description:
      "A fast-paced city adventure discovering Tokyo’s modern culture, food, and nightlife.",
    estimatedPrice: "$1100",
    duration: 2,
    budget: "Budget",
    travelStyle: "City Exploration",
    country: "Japan",
    interests: "Nightlife & Bars",
    groupType: "Solo",
    bestTimeToVisit: [
      "🌸 Spring (March–April): cherry blossoms",
      "☀️ Summer (June–August): vibrant city life",
      "🍁 Autumn (October–November): mild temperatures",
      "❄️ Winter (December–February): clear skies",
    ],
    weatherInfo: [
      "☀️ Summer: 26–34°C (79–93°F)",
      "🌦️ Spring: 12–20°C (54–68°F)",
      "🍁 Autumn: 10–18°C (50–64°F)",
      "❄️ Winter: 0–8°C (32–46°F)",
    ],
    location: {
      city: "Tokyo",
      coordinates: [35.6762, 139.6503],
      openStreetMap: "https://www.openstreetmap.org/#map=6/35.6762/139.6503",
    },
    itinerary: [
      {
        day: 1,
        location: "Tokyo",
        activities: [
          { time: "Morning", description: "🏙 Shibuya walk" },
          { time: "Afternoon", description: "🍣 Budget sushi lunch" },
          { time: "Evening", description: "🍺 Local bar hopping" },
        ],
      },
      {
        day: 2,
        location: "Tokyo",
        activities: [
          { time: "Morning", description: "⛩ Visit Meiji Shrine" },
          { time: "Afternoon", description: "🛍️ Akihabara exploration" },
          { time: "Evening", description: "🌃 City night views" },
        ],
      },
    ],
  },

  {
    name: "Cultural Wonders of Cairo",
    description:
      "A deep cultural dive into Egypt’s ancient history and iconic landmarks.",
    estimatedPrice: "$800",
    duration: 5,
    budget: "Budget",
    travelStyle: "Cultural",
    country: "Egypt",
    interests: "Historical Sites",
    groupType: "Family",
    bestTimeToVisit: [
      "🌸 Spring (March–April): warm but comfortable",
      "☀️ Summer (June–August): intense heat, fewer crowds",
      "🍁 Autumn (October–November): ideal sightseeing weather",
      "❄️ Winter (December–February): mild and pleasant",
    ],
    weatherInfo: [
      "☀️ Summer: 30–40°C (86–104°F)",
      "🌦️ Spring: 20–30°C (68–86°F)",
      "🍁 Autumn: 18–28°C (64–82°F)",
      "❄️ Winter: 10–20°C (50–68°F)",
    ],
    location: {
      city: "Cairo",
      coordinates: [30.0444, 31.2357],
      openStreetMap: "https://www.openstreetmap.org/#map=6/30.0444/31.2357",
    },
    itinerary: [
      {
        day: 1,
        location: "Cairo",
        activities: [
          { time: "Morning", description: "🕌 Egyptian Museum" },
          { time: "Afternoon", description: "🏛 Old Cairo walk" },
          { time: "Evening", description: "🍽️ Traditional dinner" },
        ],
      },
      {
        day: 2,
        location: "Giza",
        activities: [
          { time: "Morning", description: "🗿 Great Pyramids" },
          { time: "Afternoon", description: "📸 Sphinx visit" },
          { time: "Evening", description: "🌇 Desert sunset" },
        ],
      },
      {
        day: 3,
        location: "Cairo",
        activities: [
          { time: "Morning", description: "🛍️ Khan el-Khalili" },
          { time: "Afternoon", description: "☕ Tea houses" },
          { time: "Evening", description: "🎶 Local music show" },
        ],
      },
      {
        day: 4,
        location: "Saqqara",
        activities: [
          { time: "Morning", description: "🏺 Step Pyramid" },
          { time: "Afternoon", description: "📚 Guided history tour" },
          { time: "Evening", description: "🍲 Relaxed dinner" },
        ],
      },
      {
        day: 5,
        location: "Cairo",
        activities: [
          { time: "Morning", description: "☕ Coffee break" },
          { time: "Afternoon", description: "🛍️ Last shopping" },
          { time: "Evening", description: "✈️ Departure" },
        ],
      },
    ],
  },

  {
    name: "Luxury Beach Escape in Bali",
    description:
      "A premium tropical retreat with beaches, wellness, and local experiences.",
    estimatedPrice: "$1600",
    duration: 4,
    budget: "Luxury",
    travelStyle: "Nature & Outdoors",
    country: "Indonesia",
    interests: "Beaches & Water Activities",
    groupType: "Couple",
    bestTimeToVisit: [
      "🌸 Spring (April–May): dry and sunny",
      "☀️ Summer (June–September): peak beach season",
      "🍁 Autumn (October): warm and quiet",
      "❄️ Winter (December–February): tropical rains",
    ],
    weatherInfo: [
      "☀️ Dry season: 26–30°C (79–86°F)",
      "🌧️ Wet season: 25–29°C (77–84°F)",
      "🌦️ Shoulder season: 26–31°C (79–88°F)",
      "❄️ Night: 22–24°C (72–75°F)",
    ],
    location: {
      city: "Ubud",
      coordinates: [-8.5069, 115.2625],
      openStreetMap: "https://www.openstreetmap.org/#map=6/-8.5069/115.2625",
    },
    itinerary: [
      {
        day: 1,
        location: "Ubud",
        activities: [
          { time: "Morning", description: "🧘 Yoga session" },
          { time: "Afternoon", description: "🌴 Rice terrace walk" },
          { time: "Evening", description: "🍽️ Fine dining" },
        ],
      },
      {
        day: 2,
        location: "Ubud",
        activities: [
          { time: "Morning", description: "🐒 Monkey Forest" },
          { time: "Afternoon", description: "💆 Spa treatment" },
          { time: "Evening", description: "🌅 Sunset views" },
        ],
      },
      {
        day: 3,
        location: "Nusa Dua",
        activities: [
          { time: "Morning", description: "🏖 Beach relaxation" },
          { time: "Afternoon", description: "🤿 Snorkeling" },
          { time: "Evening", description: "🍹 Beach bar" },
        ],
      },
      {
        day: 4,
        location: "Nusa Dua",
        activities: [
          { time: "Morning", description: "☕ Breakfast by sea" },
          { time: "Afternoon", description: "🛍️ Souvenirs" },
          { time: "Evening", description: "✈️ Departure" },
        ],
      },
    ],
  },
  {
    name: "Cultural Journey Through Saint Petersburg",
    description:
      "A cultural-focused trip exploring imperial architecture, museums, and local experiences in Saint Petersburg.",
    estimatedPrice: "$700",
    duration: 3,
    budget: "Mid-range",
    travelStyle: "Cultural",
    country: "Russia",
    interests: "Museums & Art",
    groupType: "Solo",
    bestTimeToVisit: [
      "🌸 Spring (May): white nights begin and mild weather",
      "☀️ Summer (June–July): festivals and long daylight hours",
      "🍁 Autumn (September): fewer tourists and golden parks",
      "❄️ Winter (December–February): snowy atmosphere and museums",
    ],
    weatherInfo: [
      "☀️ Summer: 18–25°C (64–77°F)",
      "🌦️ Spring: 8–15°C (46–59°F)",
      "🍁 Autumn: 5–12°C (41–54°F)",
      "❄️ Winter: -8–0°C (18–32°F)",
    ],
    location: {
      city: "Saint Petersburg",
      coordinates: [59.9311, 30.3609],
      openStreetMap: "https://www.openstreetmap.org/#map=6/59.9311/30.3609",
    },
    itinerary: [
      {
        day: 1,
        location: "Saint Petersburg",
        activities: [
          { time: "Morning", description: "🏛 Visit the Hermitage Museum" },
          { time: "Afternoon", description: "🚶 Walk along Nevsky Prospect" },
          { time: "Evening", description: "🍽 Dinner with Russian cuisine" },
        ],
      },
      {
        day: 2,
        location: "Saint Petersburg",
        activities: [
          { time: "Morning", description: "⛪ St. Isaac’s Cathedral" },
          { time: "Afternoon", description: "🖼 Russian Museum visit" },
          { time: "Evening", description: "🎭 Evening theater walk" },
        ],
      },
      {
        day: 3,
        location: "Saint Petersburg",
        activities: [
          { time: "Morning", description: "🌿 Summer Garden stroll" },
          { time: "Afternoon", description: "☕ Local café break" },
          { time: "Evening", description: "🌉 Neva river embankment" },
        ],
      },
    ],
  },

  {
    name: "Relaxed Adriatic Escape in Montenegro",
    description:
      "A peaceful seaside trip combining beaches, old towns, and scenic coastal views.",
    estimatedPrice: "$900",
    duration: 4,
    budget: "Mid-range",
    travelStyle: "Relaxed",
    country: "Montenegro",
    interests: "Beaches & Water Activities",
    groupType: "Couple",
    bestTimeToVisit: [
      "🌸 Spring (April–May): warm weather and quiet beaches",
      "☀️ Summer (June–August): perfect swimming conditions",
      "🍁 Autumn (September–October): warm sea and fewer crowds",
      "❄️ Winter (December–February): mild coastal climate",
    ],
    weatherInfo: [
      "☀️ Summer: 25–32°C (77–90°F)",
      "🌦️ Spring: 15–22°C (59–72°F)",
      "🍁 Autumn: 18–25°C (64–77°F)",
      "❄️ Winter: 8–15°C (46–59°F)",
    ],
    location: {
      city: "Kotor",
      coordinates: [42.4247, 18.7712],
      openStreetMap: "https://www.openstreetmap.org/#map=6/42.4247/18.7712",
    },
    itinerary: [
      {
        day: 1,
        location: "Kotor",
        activities: [
          { time: "Morning", description: "🏰 Explore Kotor Old Town" },
          { time: "Afternoon", description: "☕ Coffee by the bay" },
          { time: "Evening", description: "🍷 Seaside dinner" },
        ],
      },
      {
        day: 2,
        location: "Kotor",
        activities: [
          { time: "Morning", description: "🥾 Hike to Kotor Fortress" },
          { time: "Afternoon", description: "📸 Bay viewpoints" },
          { time: "Evening", description: "🌅 Sunset walk" },
        ],
      },
      {
        day: 3,
        location: "Perast",
        activities: [
          { time: "Morning", description: "🚤 Boat trip to Perast" },
          { time: "Afternoon", description: "🏖 Swim in the bay" },
          { time: "Evening", description: "🍽 Seafood dinner" },
        ],
      },
      {
        day: 4,
        location: "Kotor",
        activities: [
          { time: "Morning", description: "☀️ Relax on the beach" },
          { time: "Afternoon", description: "🛍 Souvenir shopping" },
          { time: "Evening", description: "✈️ Departure" },
        ],
      },
    ],
  },
];
