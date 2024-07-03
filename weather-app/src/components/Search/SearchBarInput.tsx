import { useState } from "react";
import { BiCurrentLocation, BiSearch } from "react-icons/bi";

interface InputProps {
  setQuery: (query: { q: string } | { lat: number; lon: number }) => void;
  setUnits: (unit: string) => void;
}

const SearchBarInput: React.FC<InputProps> = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setQuery({ lat: latitude, lon: longitude });
      });
    }
  };

  return (
    <>
      <div className="md:flex md:flex-row md:justify-center my-6 px-2">
        <div className="flex flex-row w-full md:w-3/4 items-center justify-center space-x-4">
          <input
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
            className="w-full p-2 border-2 ml-2 border-white rounded-md text-center text-black text-xl font-bold shadow-xl capitalize focus:outline-none placeholder:lowercase"
            type="text"
            placeholder="search by city..."
          />
          <BiSearch
            size={30}
            className="cursor-pointer transition ease-out hover:scale-125"
            onClick={handleSearchClick}
          />
          <BiCurrentLocation
            size={30}
            className="cursor-pointer transition ease-out hover:scale-125"
            onClick={handleLocationClick}
          />
        </div>

        <div className="flex flex-row pt-4 md:pt-0 md:w-1/4 items-center justify-center">
          <button
            className="text-2xl font-medium transition ease-out hover:scale-125"
            onClick={() => setUnits("metric")}
          >
            °C
          </button>
          <p className="text-2xl font-medium mx-1">|</p>
          <button
            className="text-2xl font-medium transition ease-out hover:scale-125"
            onClick={() => setUnits("imperial")}
          >
            °F
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBarInput;
