import { useState } from "react";
import ResultsList from "../ResultsList";
import { Input } from "./index.style";

const InputSearch = () => {
  const [query, setQuery] = useState("");
  const [list, setList] = useState(false);

  const handleOnBlur = () => {
    // setList(false); //TODO: onBlur mode active
  };

  const handleOnChange = (e: any) => {
    const changeValue = e.target.value;
    setQuery(changeValue);
    if (changeValue.length) {
      setList(true);
    } else {
      setList(false);
    }
  };

  return (
    <form>
      <Input
        className=""
        placeholder="Quick search..."
        maxLength={70}
        value={query}
        onChange={handleOnChange}
        onFocus={handleOnChange}
        onBlur={handleOnBlur}
      />
      {list && <ResultsList query={query} />}
    </form>
  );
};

export default InputSearch;
