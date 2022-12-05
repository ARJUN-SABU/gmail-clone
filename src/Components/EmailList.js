//components
import EmailSection from "./EmailSection";
import EmailRow from "./EmailRow";

//icons
import { AiFillCaretDown, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRefresh,
  MdMoreVert,
} from "react-icons/md";
import { CgInbox } from "react-icons/cg";
import { BsTag } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";

//styles
import "../styles/EmailList.css";

function EmailList() {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settings__left">
          <div className="emailList__setting__iconContainer emailList__setting__left__iconContainer emailList__setting__left__checkboxIcon">
            <MdCheckBoxOutlineBlank size={"18px"} />
            <AiFillCaretDown size={"11px"} />
          </div>

          <div className="emailList__setting__iconContainer emailList__setting__left__iconContainer">
            <MdRefresh size={"18px"} />
          </div>

          <div className="emailList__setting__iconContainer emailList__setting__left__iconContainer">
            <MdMoreVert size={"18px"} />
          </div>
        </div>
        <div className="emailList__settings__right">
          <div className="emailList__setting__iconContainer emailList__setting__right__iconContainer">
            <AiOutlineLeft size={"13px"} />
          </div>

          <div className="emailList__setting__iconContainer emailList__setting__right__iconContainer">
            <AiOutlineRight size={"13px"} />
          </div>
        </div>
      </div>

      <div className="emailList__sections">
        <EmailSection Icon={CgInbox} Text={"Primary"} Selected={true} />
        <EmailSection Icon={BsTag} Text={"Promotions"} />
        <EmailSection Icon={FaUserFriends} Text={"Social"} />
      </div>

      <div className="emailList__list">
        <EmailRow
          title="Amazon"
          subject="Offer Letter!"
          description="Congratulations! We are pleased to inform you that you have been selected as an SDE at Amazon! Click on the link to fill the additional details!"
          time={`${9}:00 AM`}
        />
        <EmailRow
          title="Atlassian"
          subject="Offer Letter!"
          description="Congratulations! We are pleased to inform you that you have been selected as an SDE at Atlassian! Click on the link to fill the additional details!"
          time={`${9}:00 AM`}
        />
        <EmailRow
          title="Adobe"
          subject="Offer Letter!"
          description="Congratulations! We are pleased to inform you that you have been selected as an SDE at Adobe! Click on the link to fill the additional details!"
          time={`${9}:00 AM`}
        />
        <EmailRow
          title="Google"
          subject="Offer Letter!"
          description="Congratulations! We are pleased to inform you that you have been selected as an SDE at Google without competitive programming! Click on the link to fill the additional details!"
          time={`${9}:00 AM`}
        />
      </div>
    </div>
  );
}

export default EmailList;
