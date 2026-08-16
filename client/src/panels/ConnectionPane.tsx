import "./styles/connection_pane.css"
const ConnectionPane: React.FC = () => {
  return (
    <div style={connectionWrapperStyles}>
      <div className="connection-grid" style={connectionGridStyle}>
        <div>FTP</div>
        <div>address</div>
        <div>password</div>
        <div>Connect Btn</div>
      </div>
    </div>
  );
};

const connectionWrapperStyles: React.CSSProperties = {
  color: "White",
  display: "flex",
  justifyContent: "center",
};

const connectionGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gap: "5px"
};
export default ConnectionPane;
