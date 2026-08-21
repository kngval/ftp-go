import "./styles/connection_pane.css"
const ConnectionPane: React.FC = () => {
  return (
    <div style={connectionWrapperStyles}>
      <div className="connection-grid" style={connectionGridStyle}>
        <div className="con-div">FTP</div>
        <div className="address_field">address</div>
        <div className="con-div">password</div>
        <div className="con-div">Connect</div>
      </div>
    </div>
  );
};

const connectionWrapperStyles: React.CSSProperties = {
  width:"100%",
  color: "White",
  display: "flex",
  justifyContent: "center",
};

const connectionGridStyle: React.CSSProperties = {
  margin: "20px 10px",
  display: "grid",
  gridTemplateColumns: "0fr 1fr 0fr 0fr",
  gap: "5px",
  width:"100%",
  maxWidth:"2000px"
};
export default ConnectionPane;
