//icons
import { MdMenu } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { IoMdOptions } from "react-icons/io";
import { IoSettingsOutline, IoApps } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

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
        <div className="header__middle__iconContainer">
          <MdSearch size={"24px"} />
        </div>
        <input type="text" placeholder="Search mail" />
        <div className="header__middle__iconContainer">
          <IoMdOptions size={"24px"} />
        </div>
      </div>
      <div className="header__right">
        <div className="header__right__imageContainer">
          <IoSettingsOutline size={"20px"} />
        </div>
        <div className="header__right__imageContainer">
          <IoApps size={"20px"} />
        </div>
        <div className="header__right__avatarContainer">
          <FaUserCircle size={"30px"} />
        </div>
      </div>
    </div>
  );
}

export default Header;
