//icons
import { AiFillCaretDown, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRefresh,
  MdMoreVert,
} from "react-icons/md";

//styles
import "../styles/EmailList.css";

function EmailList() {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settings__left">
          <div className="emailList__setting__iconContainer emailList__setting__left__iconContainer emailList__setting__left__checkboxIcon">
            <MdCheckBoxOutlineBlank size={"20px"} />
            <AiFillCaretDown size={"12px"} />
          </div>

          <div className="emailList__setting__iconContainer emailList__setting__left__iconContainer">
            <MdRefresh size={"20px"} />
          </div>

          <div className="emailList__setting__iconContainer emailList__setting__left__iconContainer">
            <MdMoreVert size={"20px"} />
          </div>
        </div>
        <div className="emailList__settings__right">
          <div className="emailList__setting__iconContainer emailList__setting__right__iconContainer">
            <AiOutlineLeft />
          </div>

          <div className="emailList__setting__iconContainer emailList__setting__right__iconContainer">
            <AiOutlineRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailList;
