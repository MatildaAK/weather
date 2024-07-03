import "./App.css";
import getFormattedWeatherData from "./components/geoLocation/GeoLocation";
import { useEffect, useState } from "react";
import SearchBar from "./components/Search/SearchBar";
import TodaysWeather from "./components/TodaysWeather/TodaysWeather";
import DailyWeather from "./components/DailyWeather/DailyWeather";
import TempAndDetails from "./components/TempAndDetails/TempAndDetails";
import TimeAndLocation from "./components/TimeAndLocation/TimeAndLocation";
import Header from "./components/Header/Header";

interface Weather {
  temp: number;
}

type QueryParams = { q: string } | { lat: number; lon: number };

const App = () => {
  const [query, setQuery] = useState<QueryParams>({ q: "helsingborg" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [hourlyData, setHourlyData] = useState<any[]>([]);
  const [dailyData, setDailyData] = useState<any[]>([]);

  const getWeather = async () => {
    await getFormattedWeatherData({ ...query, units }).then((data) => {
      setWeather(data);
      setHourlyData(data.hourly);
      setDailyData(data.daily);
      console.log(data);
    });
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  const formatBackground = (weather: Weather | null, units: string): string=> {
    if (!weather) return "from-cyan-500 via-violet-500 to-blue-500";
    const threshold = units === "metric" ? 20 : 60;
    if(weather.temp <= threshold) return "from-cyan-500 via-violet-500 to-blue-500";
    return "from-yellow-600 to-orange-700";
  }


  return (
    <>
      <div className={`text-white bg-gradient-to-t ${formatBackground(weather, units)}`}>
        <Header setQuery={setQuery} />

        <main className="grid px-10 py-5">
          <div className="min-h-screen">
            <SearchBar setQuery={setQuery} setUnits={setUnits} />
            {weather && (
              <>
                <TimeAndLocation weather={weather} />
                <TempAndDetails weather={weather} units={units}/>
                <TodaysWeather title='3 hour forecast' data={hourlyData} />
                <DailyWeather title='5 days forecast' data={dailyData} />
              </>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
