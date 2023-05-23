import MagnifyingGlassIcon from "./MagnifyingGlassIcon";

const SearchBox = () => {
  return (
    <form method="GET" className='w-50vw'>
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
        />
      </div>
    </form>
  );
};

export default SearchBox;
