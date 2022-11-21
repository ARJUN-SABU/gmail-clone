//icons
import { ImPencil } from "react-icons/im";
import { CgInbox } from "react-icons/cg";

//components
import SidebarOptions from "./SidebarOptions";

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

      <SidebarOptions Icon={CgInbox} text="Inbox" count={100} selected={true} />
      <SidebarOptions Icon={CgInbox} text="Inbox" count="" />
      <SidebarOptions Icon={CgInbox} text="Inbox" count="" />
      <SidebarOptions Icon={CgInbox} text="Inbox" count={71} />
    </div>
  );
}

export default Sidebar;
