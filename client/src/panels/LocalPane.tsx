import "./styles/pane.css";
import LocalIcon from "../assets/icons/user";
const LocalPane = () => {
  return (
    <div className="pane">

      {/* Header */}
      <div className="header">
        <div className="icon-label-wrapper">
          <span className="local-icon">
            <LocalIcon size={20} />
          </span>
          <span className="panel-label">
            Local <span className="slash">/</span>
          </span>
        </div>
        <div>Projects</div>
      </div>

      {/* Body */}
      <div></div>
    </div>
  );
};

export default LocalPane;
