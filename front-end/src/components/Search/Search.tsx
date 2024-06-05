import "./Search.scss";
import { FormEventHandler } from "react";

type SearchBarProps = {
  label: string;
  searchTerm: string;
  placeHolderText: string;
  handleInput: FormEventHandler<HTMLInputElement>;
};

const SearchBar = ({
  label,
  searchTerm,
  placeHolderText,
  handleInput,
}: SearchBarProps) => {
  const capitalizedLabel = label[0].toUpperCase() + label.slice(1);

  return (
    <div className="search-bar">
      <label htmlFor={label} className="search-bar__label">
        {capitalizedLabel}
      </label>
      <input
        id={label}
        name={label}
        type="text"
        value={searchTerm}
        className="search-bar__input"
        placeholder={placeHolderText}
        onInput={handleInput}
      />
    </div>
  );
};

export default SearchBar;
