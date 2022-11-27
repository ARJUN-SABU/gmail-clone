//icons
import { AiOutlineStar, AiOutlineClockCircle } from "react-icons/ai";
import {
  MdLabelImportantOutline,
  MdCheckBoxOutlineBlank,
  MdDeleteOutline,
  MdMailOutline,
} from "react-icons/md";
import { BiArchiveIn } from "react-icons/bi";

//styles
import "../styles/EmailRow.css";
import { CgLock } from "react-icons/cg";

function EmailRow(props) {
  return (
    <div className="emailRow">
      <div className="emailRow__left">
        <div className="emailRow__icons">
          <MdCheckBoxOutlineBlank size={"18px"} />
        </div>
        <div className="emailRow__icons">
          <AiOutlineStar size={"18px"} />
        </div>
        <div className="emailRow__icons">
          <MdLabelImportantOutline size={"18px"} />
        </div>
        <p className="emailRow__title">{props.title}</p>
      </div>
      <div className="emailRow__middle">
        <p className="emailRow__subject">{props.subject} - </p>
        <p className="emailRow__description">
          {props.description.substr(0, 150) + "..."}
        </p>
      </div>
      <div className="emailRow__right">
        <p className="emailRow__time">{props.time}</p>
      </div>
      <div className="emailRow__rightOptions">
        <div className="emailRow__icons">
          <BiArchiveIn />
        </div>
        <div className="emailRow__icons">
          <MdDeleteOutline />
        </div>
        <div className="emailRow__icons">
          <MdMailOutline />
        </div>
        <div className="emailRow__icons">
          <AiOutlineClockCircle />
        </div>
      </div>
    </div>
  );
}

export default EmailRow;
