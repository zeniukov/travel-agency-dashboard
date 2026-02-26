import { type ActionFunctionArgs, data } from "react-router";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { parseMarkdownToJson } from "~/lib/utils";
import { appwriteConfig, database } from "~/appwrite/client";
import { ID } from "appwrite";
// import { mockTrips } from "~/mocks/mockTrips";
// import { getMockTrip } from "~/mocks/getMockTrip";

export const action = async ({ request }: ActionFunctionArgs) => {
  if (!process.env.GEMINI_API_KEY) {
    console.error("GEMINI_API_KEY is missing");
    return data({ error: "Server configuration error" }, { status: 500 });
  }

  if (!process.env.UNSPLASH_ACCESS_KEY) {
    console.warn("UNSPLASH_ACCESS_KEY is missing");
  }

  const {
    country,
    numberOfDays,
    travelStyle,
    interests,
    budget,
    groupType,
    userId,
  } = await request.json();

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
  // const genAI = new GoogleGenerativeAI({
  //   apiKey: process.env.GEMINI_API_KEY!,
  //   transport: {
  //     fetch: (url, options) =>
  //       fetch("https://your-proxy.com", {
  //         method: "POST",
  //         body: JSON.stringify({ url, options }),
  //       }),
  //   },
  // });
  const unsplashApiKey = process.env.UNSPLASH_ACCESS_KEY!;

  try {
    const prompt = `Generate a ${numberOfDays}-day travel itinerary for ${country} based on the following user information:
    Budget: '${budget}'
    Interests: '${interests}'
    TravelStyle: '${travelStyle}'
    GroupType: '${groupType}'
    Return the itinerary and lowest estimated price in a clean, non-markdown JSON format with the following structure:
    {
    "name": "A descriptive title for the trip",
    "description": "A brief description of the trip and its highlights not exceeding 100 words",
    "estimatedPrice": "Lowest average price for the trip in USD, e.g.$price",
    "duration": ${numberOfDays},
    "budget": "${budget}",
    "travelStyle": "${travelStyle}",
    "country": "${country}",
    "interests": "${interests}",
    "groupType": "${groupType}",
    "bestTimeToVisit": [
      '🌸 Season (from month to month): reason to visit',
      '☀️ Season (from month to month): reason to visit',
      '🍁 Season (from month to month): reason to visit',
      '❄️ Season (from month to month): reason to visit'
    ],
    "weatherInfo": [
      '☀️ Season: temperature range in Celsius (temperature range in Fahrenheit)',
      '🌦️ Season: temperature range in Celsius (temperature range in Fahrenheit)',
      '🌧️ Season: temperature range in Celsius (temperature range in Fahrenheit)',
      '❄️ Season: temperature range in Celsius (temperature range in Fahrenheit)'
    ],
    "location": {
      "city": "name of the city or region",
      "coordinates": [latitude, longitude],
      "openStreetMap": "link to open street map"
    },
    "itinerary": [
    {
      "day": 1,
      "location": "City/Region Name",
      "activities": [
        {"time": "Morning", "description": "🏰 Visit the local historic castle and enjoy a scenic walk"},
        {"time": "Afternoon", "description": "🖼️ Explore a famous art museum with a guided tour"},
        {"time": "Evening", "description": "🍷 Dine at a rooftop restaurant with local wine"}
      ]
    },
    ...
    ]
    }`;

    // const textResult = await genAI
    //   .getGenerativeModel({ model: "gemini-2.0-flash" })
    //   .generateContent([prompt]);

    // const trip = parseMarkdownToJson(textResult.response.text());

    let trip;

    try {
      const textResult = await genAI
        .getGenerativeModel({ model: "gemini-2.0-flash" })
        .generateContent([prompt]);

      const rawText = textResult?.response?.text();

      if (!rawText) {
        throw new Error("Empty Gemini response");
      }

      trip = parseMarkdownToJson(rawText);
    } catch (err) {
      console.error("❌ Gemini failed", err);
    }
    // const isDev = process.env.NODE_ENV !== "production";

    // let trip;

    // if (isDev) {
    //   console.log("⚠️ Using MOCK trip data");
    //   trip = getMockTrip(country);
    // } else {
    //   const textResult = await genAI
    //     .getGenerativeModel({ model: "gemini-2.0-flash" })
    //     .generateContent([prompt]);

    //   trip = parseMarkdownToJson(textResult.response.text());
    // }

    let imageUrls: string[] = [];

    try {
      const imageResponse = await fetch(
        `https://api.unsplash.com/search/photos?query=${country} ${interests} ${travelStyle}&client_id=${unsplashApiKey}`,
      );

      if (imageResponse.ok) {
        const json = await imageResponse.json();
        imageUrls = json.results
          ?.slice(0, 3)
          .map((r: any) => r.urls?.regular)
          .filter(Boolean);
      }
    } catch (e) {
      console.warn("Unsplash failed, continuing without images");
    }

    // const imageResponse = await fetch(
    //   `https://api.unsplash.com/search/photos?query=${country} ${interests} ${travelStyle}&client_id=${unsplashApiKey}`,
    // );

    // const imageUrls = (await imageResponse.json()).results
    //   .slice(0, 3)
    //   .map((result: any) => result.urls?.regular || null);

    const result = await database.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.tripCollectionId,
      ID.unique(),
      {
        tripDetail: JSON.stringify(trip),
        createdAt: new Date().toISOString(),
        imageUrls,
        userId,
      },
    );

    return data({ id: result.$id });
  } catch (e) {
    console.error("Error generating travel plan:", e);

    return data(
      {
        error: "Failed to generate travel plan. Please try again later.",
      },
      { status: 500 },
    );
  }
};
