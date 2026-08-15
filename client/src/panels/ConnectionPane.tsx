const ConnectionPane: React.FC = () => {
  return (
    <div style={connectionWrapperStyles}>
      <div style={connectionGridStyle}>
        <div>Connection</div>
        <div>Connection</div>
        <div>Connection</div>
        <div>Connection</div>
        <div>Connection</div>
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
  gridTemplateColumns: "1fr"
};
export default ConnectionPane;
