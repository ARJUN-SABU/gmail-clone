//components
import MailToolIcon from "./MailToolIcon";
import { useNavigate } from "react-router-dom";

//styles
import "../styles/Mail.css";

//icons
import { IoMdArrowBack, IoMdMore } from "react-icons/io";
import { BiArchiveIn } from "react-icons/bi";
import {
  MdOutlineReport,
  MdDeleteOutline,
  MdOutlineAddTask,
  MdLabelOutline,
  MdLabelImportantOutline,
  MdLabelImportant,
} from "react-icons/md";
import {
  AiOutlineClockCircle,
  AiOutlineMail,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlinePrinter,
} from "react-icons/ai";
import { BsFolderSymlink } from "react-icons/bs";
import { TfiNewWindow } from "react-icons/tfi";

function Mail() {
  const navigate = useNavigate();

  function hideAndShowLabel(labelToHide, labelToShow) {
    document.querySelector(`.${labelToHide}`).style.display = "none";
    document.querySelector(`.${labelToShow}`).style.display = "flex";
  }

  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__tools__left">
          <div className="mail__tool__icon" onClick={() => navigate("/")}>
            <MailToolIcon
              Icon={IoMdArrowBack}
              iconSize={18}
              text={"Back to inbox"}
            />
          </div>

          <div className="mail__tools__left__iconSet">
            <div className="mail__tool__icon">
              <MailToolIcon Icon={BiArchiveIn} iconSize={18} text={"Archive"} />
            </div>
            <div className="mail__tool__icon">
              <MailToolIcon
                Icon={MdOutlineReport}
                iconSize={18}
                text={"Report spam"}
              />
            </div>
            <div className="mail__tool__icon">
              <MailToolIcon
                Icon={MdDeleteOutline}
                iconSize={18}
                text={"Delete"}
              />
            </div>
          </div>

          <div className="mail__tools__left__iconSet">
            <div className="mail__tool__icon">
              <MailToolIcon
                Icon={AiOutlineMail}
                iconSize={18}
                text={"Mark as unread"}
              />
            </div>
            <div className="mail__tool__icon">
              <MailToolIcon
                Icon={AiOutlineClockCircle}
                iconSize={18}
                text={"Snooze"}
              />
            </div>
            <div className="mail__tool__icon">
              <MailToolIcon
                Icon={MdOutlineAddTask}
                iconSize={18}
                text={"Add to tasks"}
              />
            </div>
          </div>

          <div className="mail__tools__left__iconSet">
            <div className="mail__tool__icon">
              <MailToolIcon
                Icon={BsFolderSymlink}
                iconSize={18}
                text={"Move to"}
              />
            </div>
            <div className="mail__tool__icon">
              <MailToolIcon
                Icon={MdLabelOutline}
                iconSize={18}
                text={"Labels"}
              />
            </div>
            <div className="mail__tool__icon">
              <MailToolIcon Icon={IoMdMore} iconSize={18} text={"More"} />
            </div>
          </div>
        </div>
        <div className="mail__tools__right">
          <div className="mail__tools__rightIcon">
            <AiOutlineLeft size={"12px"} />
          </div>

          <div className="mail__tools__rightIcon">
            <AiOutlineRight size={"12px"} />
          </div>
        </div>
      </div>

      <div className="mail__body">
        <div className="mail__body__header">
          <div className="mail__body__header__left">
            <h1>This is a sample subject title!</h1>
            <div className="mail__body__header__left__importantLabel">
              <div
                className="mail__body__header__left__importantLabel__outline"
                onClick={() =>
                  hideAndShowLabel(
                    "mail__body__header__left__importantLabel__outline",
                    "mail__body__header__left__importantLabel__dark"
                  )
                }
              >
                <MailToolIcon
                  Icon={MdLabelImportantOutline}
                  iconSize={18}
                  text={"Mark important"}
                />
              </div>
              <div
                className="mail__body__header__left__importantLabel__dark"
                onClick={() =>
                  hideAndShowLabel(
                    "mail__body__header__left__importantLabel__dark",
                    "mail__body__header__left__importantLabel__outline"
                  )
                }
              >
                <MailToolIcon
                  Icon={MdLabelImportant}
                  iconSize={18}
                  text={"Mark not important"}
                />
              </div>
            </div>
          </div>
          <div className="mail__body__header__right">
            <MailToolIcon
              Icon={AiOutlinePrinter}
              iconSize={18}
              text={"Print all"}
            />
            <MailToolIcon
              Icon={TfiNewWindow}
              iconSize={18}
              text={"In new window"}
            />
          </div>
        </div>
        <div className="mail__body__middle"></div>
        <div className="mail__body__content"></div>
      </div>
    </div>
  );
}

export default Mail;
