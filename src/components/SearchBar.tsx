interface Props {
  search: string;
  setSearch: (value: string) => void;
}

const SearchBar = ({ search, setSearch }: Props) => {
  return (
    <input
      type="text"
      placeholder="Search prompts..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full border rounded-lg p-3"
    />
  );
};

export default SearchBar;