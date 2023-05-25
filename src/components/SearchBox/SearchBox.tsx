import { useSearchParams } from "react-router-dom";
import type { ChangeEvent, FormEvent } from "react";
import axios from "axios";
import SearchButton from "./SearchButton/SearchButton";
import SearchInput from "./SearchInput/SearchInput";

const SEARCH_QUERY_PARAM = "search";

const client = axios.create({
  baseURL: "https://swapi.dev/api/people",
});

const SearchBox = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchValue = searchParams.get(SEARCH_QUERY_PARAM) || "";

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const inputValue = event.target.value;

    setSearchParams((prev) => {
      inputValue
        ? prev.set(SEARCH_QUERY_PARAM, inputValue)
        : prev.delete(SEARCH_QUERY_PARAM);

      return prev;
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const searchURL = searchValue
      ? `?${SEARCH_QUERY_PARAM}=${searchValue}`
      : "";

    const response = await client.get(searchURL);
  };

  return (
    <form method="GET" className="w-50vw" onSubmit={handleSubmit}>
      <div className="relative text-gray-600 focus-within:text-gray-400">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <SearchButton />
        </span>
        <SearchInput
          searchValue={searchValue}
          onChange={handleOnChange}
        />
      </div>
    </form>
  );
};

export default SearchBox;
