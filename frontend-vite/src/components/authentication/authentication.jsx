import { Outlet } from "react-router-dom";
import "./authentication.css";

function Authentication() {
  return (
    <div>
      <div className="auth-layout">
        <div className="auth-form">
          <Outlet />
        </div>
        <div className="auth-image" />
      </div>
    </div>
  );
}

export default Authentication;
