//components
import MailToolIcon from "./MailToolIcon";

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
} from "react-icons/md";
import {
  AiOutlineClockCircle,
  AiOutlineMail,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import { BsFolderSymlink } from "react-icons/bs";

function Mail() {
  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__tools__left">
          <div className="mail__tool__icon">
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
          <div className="mail__tools__icon">
            <AiOutlineLeft />
          </div>

          <div className="mail__tools__icon">
            <AiOutlineRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mail;
