import { DateTime } from "luxon";
import React from 'react';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const getGeoLocation = (infoType: any, searchParams: any) => {
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY }).toString();

  return fetch(url.toString()).then((res) => res.json());
};

const iconUrlFromCode = (icon: any) => `http://openweathermap.org/img/wn/${icon}@2x.png`;

const formatToLocalTime = (
  secs: any,
  offset: any,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs + offset, { zone: "utc" }).toFormat(format);

const formatCurrent = (data: any) => {
  const {
    // coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
    timezone,
  } = data;

  const { main: details, icon } = weather[0];
  const formattedLocalTime = formatToLocalTime(dt, timezone);

  return {
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    country,
    sunrise: formatToLocalTime(sunrise, timezone, 'hh:mm a'),
    sunset: formatToLocalTime(sunset, timezone, 'hh:mm a'),
    speed,
    details,
    icon: iconUrlFromCode(icon),
    formattedLocalTime
  };
};

const getFormattedWeatherData = async (searchParams: any) => {
  const formattedCurrentWeather = await getGeoLocation(
    "weather",
    searchParams
  ).then(formatCurrent);

  return { ...formattedCurrentWeather };
};

export default getFormattedWeatherData;
