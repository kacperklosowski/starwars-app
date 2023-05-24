import { useSearchParams } from "react-router-dom";
import type { ChangeEvent } from "react";
import MagnifyingGlassIcon from "./MagnifyingGlassIcon";

const SEARCH_QUERY_PARAM = "search";

const SearchBox = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchValue = searchParams.get(SEARCH_QUERY_PARAM);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const inputValue = event.target.value;

    setSearchParams((prev) => {
      inputValue ? prev.set(SEARCH_QUERY_PARAM, inputValue) : prev.delete(SEARCH_QUERY_PARAM);
      return prev;
    });
  };

  return (
    <form
      method="GET"
      className="w-50vw"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="relative text-gray-600 focus-within:text-gray-400">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <button type="submit" className="p-1">
            <MagnifyingGlassIcon />
          </button>
        </span>
        <input
          type="search"
          placeholder="Search..."
          className="w-full py-5 text- text-white bg-gray-900 rounded-md pl-12 focus:outline-none focus:bg-white focus:text-gray-900"
          autoComplete="off"
          value={searchValue || ""}
          onChange={handleOnChange}
        />
      </div>
    </form>
  );
};

export default SearchBox;
