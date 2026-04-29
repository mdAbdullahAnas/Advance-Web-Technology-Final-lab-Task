type Props = {
  search: string;
  setSearch: (s: string) => void;
};

function SearchBar({ search, setSearch }: Props) {
  return (
    <input
      className="search"
      placeholder="Search..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;