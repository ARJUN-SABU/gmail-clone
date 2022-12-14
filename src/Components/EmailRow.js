//packages
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  function showEmailRowRightOptions(id) {
    document
      .querySelector(`.emailRow_${id}`)
      .querySelector(".emailRow__rightOptions")
      .classList.remove("emailRow__rightOptions--hide");

    document
      .querySelector(`.emailRow_${id}`)
      .querySelectorAll(".emailRow__icons")
      .forEach((emailRow) => emailRow.classList.add("emailRow__icon--bold"));
  }

  function hideEmailRowRightOptions(id) {
    document
      .querySelector(`.emailRow_${id}`)
      .querySelector(".emailRow__rightOptions")
      .classList.add("emailRow__rightOptions--hide");

    document
      .querySelector(`.emailRow_${id}`)
      .querySelectorAll(".emailRow__icons")
      .forEach((emailRow) => emailRow.classList.remove("emailRow__icon--bold"));
  }

  return (
    <div
      className={`emailRow emailRow_${props.id}`}
      onClick={() => navigate("/mail")}
      onMouseEnter={() => showEmailRowRightOptions(props.id)}
      onMouseLeave={() => hideEmailRowRightOptions(props.id)}
    >
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
        <p className="emailRow__title">{props.title.substring(0, 8)}</p>
      </div>
      <div className="emailRow__middle">
        <p className="emailRow__subject">{props.subject} - </p>
        <p className="emailRow__description">
          {props.description.substring(0, 90) + "..."}
        </p>
      </div>
      <div className="emailRow__right">
        <p className="emailRow__time">{props.time}</p>
      </div>
      <div className="emailRow__rightOptions emailRow__rightOptions--hide">
        <div className="emailRow__icons">
          <BiArchiveIn size={"18px"} />
        </div>
        <div className="emailRow__icons">
          <MdDeleteOutline size={"18px"} />
        </div>
        <div className="emailRow__icons">
          <MdMailOutline size={"18px"} />
        </div>
        <div className="emailRow__icons">
          <AiOutlineClockCircle size={"18px"} />
        </div>
      </div>
    </div>
  );
}

export default EmailRow;
