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
            <IoMdArrowBack />
          </div>

          <div className="mail__tools__left__iconSet">
            <div className="mail__tool__icon">
              <BiArchiveIn />
            </div>
            <div className="mail__tool__icon">
              <MdOutlineReport />
            </div>
            <div className="mail__tool__icon">
              <MdDeleteOutline />
            </div>
          </div>

          <div className="mail__tools__left__iconSet">
            <div className="mail__tool__icon">
              <AiOutlineMail />
            </div>
            <div className="mail__tool__icon">
              <AiOutlineClockCircle />
            </div>
            <div className="mail__tool__icon">
              <MdOutlineAddTask />
            </div>
          </div>

          <div className="mail__tools__left__iconSet">
            <div className="mail__tool__icon">
              <BsFolderSymlink />
            </div>
            <div className="mail__tool__icon">
              <MdLabelOutline />
            </div>
            <div className="mail__tool__icon">
              <IoMdMore />
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
