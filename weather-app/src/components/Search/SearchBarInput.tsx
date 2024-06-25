import {
  faLocationCrosshairs,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBarInput = () => {
  return (
    <>
      <div className="flex flex-row justify-center py-16">
        <div className="flex flex-row items-center justify-center space-x-4">
          <input
            className="h-16 w-full border-2 border-black rounded-full text-center text-black text-xl font-bold shadow-xl capitalize focus:outline-none placeholder:lowercase"
            type="text"
            placeholder="search by city..."
          />
          <button type="button" className="w-16 easy-out hover:scale-125">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="2xl"
              style={{ color: "#f7fafd" }}
            />
          </button>

          <button type="button" className="w-16 easy-out hover:scale-125">
            <FontAwesomeIcon
              icon={faLocationCrosshairs}
              size="2xl"
              style={{ color: "#f7fafd" }}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBarInput;
