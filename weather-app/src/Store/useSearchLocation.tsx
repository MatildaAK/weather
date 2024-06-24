import { create } from "zustand";

export const useSearchLocation = create((set) => ({
    userLocation: {
        latitude: 59.28,
        longitude: 18.08
      },
      weatherData: {},
    updateUserLocation: (updatedLocation: any) => set({ userLocation: updatedLocation}),
    updateWeatherData: (data: any) => set({ weatherData: data })
}));