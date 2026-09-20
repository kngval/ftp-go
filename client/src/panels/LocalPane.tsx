import "./styles/pane.css";
import LocalIcon from "../assets/icons/user";
import { files } from "../mockdata/mockFiles";
import { useState } from "react";
const LocalPane = () => {
  const [currentPath,setCurrentPath] = useState<string>("/");
  const [items,setItems] = useState<TFtp[]>([]);

  const loadDir = async(item : TFtp) => {
  }

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
      <div>
        {files && files.length > 0 && files.map((file) =>
          (
            <div key={file.name}>
              {file.type == "folder" ? "📁" : "📄"}
              {file.name}
            </div>
          )
        )
      }
      </div>
    </div>
  );
};

export default LocalPane;
