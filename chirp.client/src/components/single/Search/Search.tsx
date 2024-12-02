import { useState } from "react";
import { useDebounce } from "../../../hooks/useDebounce";
import SearchBar from "./Searchbar";
import Tabs from "./Tabs";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="flex items-center flex-col">
      <SearchBar placeholder="Search for items..." onSearch={handleSearch} />
      <Tabs
        debouncedSearchQuery={debouncedSearchQuery}
        searchQuery={searchQuery}
      />
    </div>
  );
};

export default Search;
