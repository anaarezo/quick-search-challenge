import InputSearch from "../InputSearch";
import { HeaderContent } from "./index.style";

const Header = () => {
  return (
    <HeaderContent>
      <InputSearch searchOnEveryKeyPress={false} />
    </HeaderContent>
  );
};

export default Header;
