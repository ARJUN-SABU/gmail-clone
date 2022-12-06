//styles
import "../styles/MailToolIcon.css";

function MailToolIcon({ Icon, iconSize, text }) {
  function showToast(event) {
    event.target.parentNode
      .querySelector(".mailToolIcon__toast")
      .classList.remove("mailToolIcon__toast--hide");
  }

  function hideToast(event) {
    event.target.parentNode
      .querySelector(".mailToolIcon__toast")
      .classList.add("mailToolIcon__toast--hide");
  }

  return (
    <div className="mailToolIcon">
      <div
        className="mailToolIcon__icon"
        onMouseEnter={showToast}
        onMouseLeave={hideToast}
      >
        <Icon size={`${iconSize}px`} />
      </div>
      <div className="mailToolIcon__toast mailToolIcon__toast--hide">
        <p>{text}</p>
      </div>
    </div>
  );
}
export default MailToolIcon;
