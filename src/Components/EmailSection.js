import "../styles/EmailSection.css";

function EmailSection({ Icon, Text, Selected }) {
  return (
    <div className={`emailSection ${Selected && "emailSection--active"}`}>
      <Icon />
      <p>{Text}</p>
    </div>
  );
}

export default EmailSection;
