import { useState } from "react";
import SearchBar from "./Searchbar";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    setSearchQuery(query);
  };

  return (
    <div className="flex items-center flex-col">
      <SearchBar
        placeholder="Search for items..."
        onSearch={handleSearch}
        debounceDelay={500}
      />
      <h1 className="text-neutral-600 mt-12">Results will appear here...</h1>
    </div>
  );
};

export default Search;
