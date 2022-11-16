//icons
import { MdMenu } from "react-icons/md";
import { MdSearch } from "react-icons/md";

//styles
import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__left__iconContainer">
          <MdMenu size={"25px"} color={"#7c7c7c"} />
        </div>
        <img src="gmail_icon.png" alt="gmail_icon" />
      </div>
      <div className="header__middle">
        <MdSearch />
        <input type="text" placeholder="Search mail" />
      </div>
      <div className="header__right"></div>
    </div>
  );
}

export default Header;
