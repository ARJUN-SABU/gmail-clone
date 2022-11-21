//styles
import "../styles/SidebarOptions.css";

function SidebarOptions({ Icon, text, count, selected }) {
  return (
    <div className={`sidebarOptions ${selected && `sidebarOptions--active`}`}>
      <div className="sidebarOptions__left">
        <Icon />
        <p className="sidebarOptions__text">{text}</p>
      </div>
      <p className="sidebarOptions__count">{count}</p>
    </div>
  );
}

export default SidebarOptions;
