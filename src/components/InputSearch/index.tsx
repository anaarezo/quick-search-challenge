import { useEffect, useRef, useState } from "react";

import ResultsList from "../ResultsList";
import { Input } from "./index.style";

const InputSearch = () => {
  const [query, setquery] = useState("");
  const [list, setList] = useState(false);

  const handleOnBlur = () => {
    setList(false);
  };

  const handleOnChange = (e: any) => {
    setquery(e.target.value);
    if (e.target.value.length > 1) {
      setList(true);
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
        onBlur={handleOnBlur}
        onFocus={handleOnChange}
      />
      {list && <ResultsList />}
    </form>
  );
};

export default InputSearch;
