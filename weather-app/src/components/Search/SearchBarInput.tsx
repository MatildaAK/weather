import {
  faLocationCrosshairs,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getFormattedWeatherData from "../geoLocation/GeoLocation";

const SearchBarInput = () => {

    const getWeather = async () => {
        const data = await getFormattedWeatherData({ q: "stockholm"});
        console.log(data);
    }

    getWeather();

  return (
    <>
      <div className="flex flex-row justify-center py-16">
        <div className="flex flex-row w-1/3 items-center justify-center space-x-4">
        <input
          className="h-16 w-full border-2 border-black rounded-full text-center text-black text-xl font-bold shadow-xl capitalize focus:outline-none placeholder:lowercase"
          type="text"
          placeholder="Sök ort"
        />
        <button type="button" className="w-16 easy-out hover:scale-125">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="2xl" style={{color: "#f7fafd",}}/>
        </button>

        <button type="button" className="w-16 easy-out hover:scale-125">
          <FontAwesomeIcon icon={faLocationCrosshairs} size="2xl" style={{color: "#f7fafd",}}/>
        </button>

        </div>
      </div>
    </>
  );
};

export default SearchBarInput;
