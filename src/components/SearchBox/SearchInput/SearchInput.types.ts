import type { ChangeEventHandler } from "react";

export interface SearchInputProps {
  searchValue: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
