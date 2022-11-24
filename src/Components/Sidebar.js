//icons
import { ImPencil } from "react-icons/im";
import { CgInbox } from "react-icons/cg";
import {
  AiOutlineStar,
  AiOutlineClockCircle,
  AiOutlineSend,
} from "react-icons/ai";
import { MdLabelImportantOutline } from "react-icons/md";
import { BiNote } from "react-icons/bi";

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
      <SidebarOptions Icon={AiOutlineStar} text="Starred" count="" />
      <SidebarOptions Icon={AiOutlineClockCircle} text="Snoozed" count="" />
      <SidebarOptions
        Icon={MdLabelImportantOutline}
        text="Important"
        count={71}
      />
      <SidebarOptions
        Icon={AiOutlineSend}
        text="Sent"
        count=""
        selected={true}
      />
      <SidebarOptions Icon={BiNote} text="Draft" count={101} />
    </div>
  );
}

export default Sidebar;
