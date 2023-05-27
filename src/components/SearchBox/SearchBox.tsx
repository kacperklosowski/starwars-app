import type { ChangeEvent, FormEvent } from "react";
import SearchButton from "./SearchButton/SearchButton";
import SearchInput from "./SearchInput/SearchInput";
import { useCharacters } from "../../hooks/useCharacters";
import { useSearchParam } from "../../hooks/useSearchParam";

const SearchBox = () => {
  const { characters, fetchCharacters } = useCharacters();
  const { searchValue, setSearchValue } = useSearchParam();

  console.log("🚀 ~ file: SearchBox.tsx:9 ~ SearchBox ~ characters:", characters)

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const inputValue = event.target.value;

    setSearchValue(inputValue);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchCharacters(searchValue);
  };

  return (
    <form method="GET" className="w-50vw" onSubmit={handleSubmit}>
      <div className="relative text-gray-600 focus-within:text-gray-400">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <SearchButton />
        </span>
        <SearchInput searchValue={searchValue} onChange={handleOnChange} />
      </div>
    </form>
  );
};

export default SearchBox;
