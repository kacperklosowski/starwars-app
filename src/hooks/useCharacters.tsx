import { useState } from "react";
import { useEffectOnce } from "react-use";
import axios from "axios";
import { useSearchParam } from "./useSearchParam";

const client = axios.create({
  baseURL: "https://swapi.dev/api/people",
});

// @TODO improve Character type
type Character = {
  name: string;
};

export const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[] | null>(null);
  const { searchParam, searchValue } = useSearchParam();

  const fetchCharacters = async (searchValue: string) => {
    const url = searchValue ? `?${searchParam}=${searchValue}` : "";

    try {
      const response = await client.get(url);
      setCharacters(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffectOnce(() => {
    if (searchValue) {
      fetchCharacters(searchValue);
    }
  });

  return {
    characters,
    fetchCharacters,
  };
};
