import { BiCurrentLocation, BiSearch } from "react-icons/bi";

const SearchBarInput = () => {
  return (
    <>
      <div className="flex flex-row justify-center my-6">
        <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
          <input
            className="h-16 w-full border-2 border-white rounded-md text-center text-black text-xl font-bold shadow-xl capitalize focus:outline-none placeholder:lowercase"
            type="text"
            placeholder="search by city..."
          />
          <BiSearch
            size={40}
            className="cursor-pointer transition ease-out hover:scale-125"
          />
          <BiCurrentLocation
            size={40}
            className="cursor-pointer transition ease-out hover:scale-125"
          />
        </div>
      </div>
    </>
  );
};

export default SearchBarInput;
