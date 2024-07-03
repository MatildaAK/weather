import "./App.css";
import getFormattedWeatherData from "./components/geoLocation/GeoLocation";
import { useEffect, useState } from "react";
import SearchBar from "./components/Search/SearchBar";
import TodaysWeather from "./components/TodaysWeather/TodaysWeather";
import DailyWeather from "./components/DailyWeather/DailyWeather";
import TempAndDetails from "./components/TempAndDetails/TempAndDetails";
import TimeAndLocation from "./components/TimeAndLocation/TimeAndLocation";
import Header from "./components/Header/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Weather {
  temp: number;
}

type QueryParams = { q: string } | { lat: number; lon: number };

function isQueryWithQ(params: QueryParams): params is { q: string } {
  return (params as { q: string }).q !== undefined;
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const App = () => {
  const [query, setQuery] = useState<QueryParams>({ q: "helsingborg" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [hourlyData, setHourlyData] = useState<any[]>([]);
  const [dailyData, setDailyData] = useState<any[]>([]);


  const getWeather = async () => {
    const cityName = isQueryWithQ(query) ? query.q : "current location";
    toast.info(`Fetching weather data for ${capitalizeFirstLetter(cityName)}`);

    await getFormattedWeatherData({ ...query, units }).then((data) => {
      toast.success(`Fetched weather data for ${data.name}, ${data.country}`);
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

        <main className="grid md:px-10 md:py-5">
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

        <ToastContainer autoClose={2500} hideProgressBar={true} theme="colored" />
      </div>
    </>
  );
};

export default App;
