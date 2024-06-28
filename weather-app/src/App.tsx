import "./App.css";
import getFormattedWeatherData from "./components/geoLocation/GeoLocation";
import { useEffect, useState } from "react";
import SearchBar from "./components/Search/SearchBar";
import TodaysWeather from "./components/TodaysWeather/TodaysWeather";
import DailyWeather from "./components/DailyWeather/DailyWeather";
import TempAndDetails from "./components/TempAndDetails/TempAndDetails";
import TimeAndLocation from "./components/TimeAndLocation/TimeAndLocation";
import Header from "./components/Header/Header";

const App = () => {
  const [query, setQuery] = useState({ q: "helsingborg" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [hourlyData, setHourlyData] = useState<any[]>([]);
  const [dailyData, setDailyData] = useState<any[]>([]);

  const getWeather = async () => {
    await getFormattedWeatherData({ ...query, units }).then((data) => {
      setWeather(data);
      setHourlyData(data.hourly);
      setDailyData(data.daily)
      console.log(data);
    });
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);


  return (
    <>
      <div className="text-white bg-gradient-to-t from-cyan-500 via-violet-500 to-blue-500">
        <Header />

        <main className="grid px-10 py-5">
          <div className="min-h-screen">
            <SearchBar />
            {weather && (
              <>
                <TimeAndLocation weather={weather} />
                <TempAndDetails weather={weather} />
                <TodaysWeather title='3 hour forecast' data={hourlyData} />
                <DailyWeather />
              </>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
