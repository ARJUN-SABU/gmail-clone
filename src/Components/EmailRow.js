//icons
import { AiOutlineStar } from "react-icons/ai";
import {
  MdLabelImportantOutline,
  MdCheckBoxOutlineBlank,
} from "react-icons/md";

//styles
import "../styles/EmailRow.css";

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
      </div>
      <div className="emailRow__middle"></div>
      <div className="emailRow__right"></div>
    </div>
  );
}

export default EmailRow;
