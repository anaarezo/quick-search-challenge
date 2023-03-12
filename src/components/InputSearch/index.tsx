import { useRef, useState } from "react";
import ResultsList from "../ResultsList";
import { Input } from "./index.style";

interface IInputSearchProps {
  searchOnEveryKeyPress: boolean;
}

const InputSearch = (props: IInputSearchProps) => {
  const { searchOnEveryKeyPress } = props;
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState("");
  const [list, setList] = useState(false);
  const keyUpTimer: { current: NodeJS.Timeout | null } = useRef(null);
  const blurDelay = 250;
  const timerDelay = 100;

  const handleOnBlur = () => {
    setTimeout(() => {
      setList(false);
    }, blurDelay);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const changeValue = e.target.value;
    setInputValue(changeValue);
    if (changeValue.length) {
      setList(true);
    }
  };
  const handleOnKeyUp = () => {
    if (searchOnEveryKeyPress) {
      if (inputValue.length) {
        setQuery(inputValue);
      }
    } else {
      clearTimeout(keyUpTimer.current as NodeJS.Timeout);
      keyUpTimer.current = setTimeout(() => {
        if (inputValue.length) {
          setQuery(inputValue);
        }
      }, timerDelay);
    }
  };

  return (
    <form>
      <Input
        className=""
        placeholder="Quick search..."
        maxLength={70}
        value={inputValue}
        onChange={handleOnChange}
        onFocus={handleOnChange}
        onBlur={handleOnBlur}
        onKeyUp={handleOnKeyUp}
      />
      {list && <ResultsList query={query} />}
    </form>
  );
};

export default InputSearch;
