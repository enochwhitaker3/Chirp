import { useState } from "react";
import SearchBar from "./Searchbar";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    setSearchQuery(query);
  };

  console.log(searchQuery)

  return (
    <SearchBar
      placeholder="Search for items..."
      onSearch={handleSearch}
      debounceDelay={500}
    />
  );
};

export default Search;
