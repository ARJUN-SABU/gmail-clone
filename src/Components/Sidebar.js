//icons
import { RiPencilFill } from "react-icons/ri";

//styles
import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <button className="sidebar__composeBtn">
        <span>
          <RiPencilFill size={"23px"} />
        </span>
        <span>Compose</span>
      </button>
    </div>
  );
}

export default Sidebar;
