import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./search-box.scss";

type SearchBoxProps = {
  doSearch: (phrase: string) => void;
};
const SearchBox = ({ doSearch }: SearchBoxProps) => {
  const [value, setValue] = useState<string>("");

  const searchHandler = (event: any) => {
    setValue(event.target.value);
    doSearch(event.target.value);
  };
  return (
    <div className="search-box">
      <input
        className="search-input"
        placeholder="Search for a country..."
        value={value}
        onChange={searchHandler}
      />
      <FontAwesomeIcon className="icon-search" icon={faSearch} />
    </div>
  );
};

export default SearchBox;
