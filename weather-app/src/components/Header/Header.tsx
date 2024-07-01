import Navbar from "./Navbar/Navbar";

interface HeaderProps {
  setQuery: (query: { q: string }) => void;
}

const Header: React.FC<HeaderProps> = ({ setQuery }) => {
  return <Navbar setQuery={setQuery} />;
};

export default Header;
