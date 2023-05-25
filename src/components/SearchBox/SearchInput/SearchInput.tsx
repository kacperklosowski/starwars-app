import {SearchInputProps} from './SearchInput.types';

const SearchInput = ({ searchValue, onChange }: SearchInputProps) => {
  return (
    <input
      type="search"
      placeholder="Search..."
      className="w-full py-5 text- text-white bg-gray-900 rounded-md pl-12 focus:outline-none focus:bg-white focus:text-gray-900"
      autoComplete="off"
      value={searchValue}
      onChange={onChange}
    />
  );
};

export default SearchInput;
