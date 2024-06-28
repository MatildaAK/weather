import { BiCurrentLocation, BiSearch } from "react-icons/bi";

const SearchBarInput = () => {
  return (
    <>
      <div className="flex flex-row justify-center my-6">
        <div className="flex flex-row md:w-3/4 items-center justify-center space-x-4">
          <input
            className=" w-full p-2 border-2 ml-2 border-white rounded-md text-center text-black text-xl font-bold shadow-xl capitalize focus:outline-none placeholder:lowercase"
            type="text"
            placeholder="search by city..."
          />
          <BiSearch
            size={30}
            className="cursor-pointer transition ease-out hover:scale-125"
          />
          <BiCurrentLocation
            size={30}
            className="cursor-pointer transition ease-out hover:scale-125"
          />
        </div>

        <div className="flex flex-row w-1/4 items-center justify-center">
          <button className="text-2xl font-medium transition ease-out hover:scale-125">
            °C
          </button>
          <p className="text-2xl font-medium mx-1">|</p>
          <button className="text-2xl font-medium transition ease-out hover:scale-125">
            °F
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBarInput;
