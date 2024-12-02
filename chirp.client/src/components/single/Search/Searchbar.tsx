import React, { useState, useEffect } from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  debounceDelay?: number;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search...",
  onSearch,
  debounceDelay = 300,
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(inputValue);
    }, debounceDelay);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, debounceDelay, onSearch]);

  return (
    <form className="relative mobile:w-full w-screen mobile:px-0 px-2 pb-4">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none dark:bg-neutral-900 bg-[#FFFFFF] dark:text-white text-black"
      />

      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-3 right-3 h-5 w-5 dark:stroke-white stroke-black"
        style={{ transform: "scale(-1, 1)" }}
      >
        <path
          d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </form>
  );
};

export default SearchBar;
