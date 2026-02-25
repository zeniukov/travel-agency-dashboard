import { mockTrips } from "./mockTrips";

export const getMockTrip = (country?: string) => {
  if (country) {
    const byCountry = mockTrips.find(
      (trip) => trip.country.toLowerCase() === country.toLowerCase(),
    );
    if (byCountry) return byCountry;
  }

  // fallback → random
  return mockTrips[Math.floor(Math.random() * mockTrips.length)];
};
