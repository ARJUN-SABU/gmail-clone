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
          <MdCheckBoxOutlineBlank />
        </div>
        <div className="emailRow__icons">
          <AiOutlineStar />
        </div>
        <div className="emailRow__icons">
          <MdLabelImportantOutline />
        </div>
        <p>{props.title}</p>
      </div>
      <div className="emailRow__middle">
        <p>{props.subject}</p>
        <p>{props.description}</p>
      </div>
      <div className="emailRow__right">
        <p>{props.time}</p>
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
