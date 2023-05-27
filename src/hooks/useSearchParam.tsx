import { useSearchParams } from "react-router-dom";

export const useSearchParam = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParam = 'search';
  const searchValue = searchParams.get(searchParam) || "";

  const setSearchValue = (value: string) => {
    setSearchParams((prev) => {
      value
        ? prev.set(searchParam, value)
        : prev.delete(searchParam);

      return prev;
    });
  }

  return {
    searchParam,
    searchValue,
    setSearchValue
  }
}