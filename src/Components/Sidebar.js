//icons
import { ImPencil } from "react-icons/im";

//styles
import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <button className="sidebar__composeBtn">
        <span className="sidebar__composeBtn__editSymbol">
          <ImPencil size={"19px"} />
        </span>
        <span className="sidebar__composeBtn__text">Compose</span>
      </button>
    </div>
  );
}

export default Sidebar;
