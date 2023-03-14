import { useRef, useState } from "react";
import ResultsList from "../ResultsList";
import { Input } from "./index.style";

interface IInputSearchProps {
  searchOnEveryKeyPress: boolean;
}

const BLUR_DELAY = 250;
const TIMER_DELAY = 100;
const LIMIT_CHARACTERS = 100;
const PLACEHOLDER_SEARCH = "Quick search...";

const InputSearch = (props: IInputSearchProps) => {
  const { searchOnEveryKeyPress } = props;
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState("");
  const [list, setList] = useState(false);
  const keyUpTimer: { current: NodeJS.Timeout | null } = useRef(null);

  const handleOnBlur = () => {
    setTimeout(() => {
      setList(false);
    }, BLUR_DELAY);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const changeValue = event.target.value;
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
      }, TIMER_DELAY);
    }
  };

  return (
    <form>
      <Input
        placeholder={PLACEHOLDER_SEARCH}
        maxLength={LIMIT_CHARACTERS}
        value={inputValue}
        onChange={handleOnChange}
        onFocus={handleOnChange}
        onBlur={handleOnBlur}
        onKeyUp={handleOnKeyUp}
        data-testid="inputSearch"
      />
      {list && <ResultsList query={query} />}
    </form>
  );
};

export default InputSearch;
