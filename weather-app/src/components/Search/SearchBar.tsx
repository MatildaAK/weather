import SearchBarInput from "./SearchBarInput";

interface SearchProps {
  setQuery: (query: { q: string } | { lat: number; lon: number }) => void;
  setUnits: (unit: string) => void;
}


const SearchBar: React.FC<SearchProps> = ({ setQuery, setUnits }) => {
  return (
    <>
      <SearchBarInput setQuery={setQuery} setUnits={setUnits} />
    </>
  );
};

export default SearchBar;
