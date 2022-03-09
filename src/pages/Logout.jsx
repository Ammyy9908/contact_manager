import React from "react";
import "./Logout.css";
import Cookies from "js-cookie";
function Logout() {
  React.useEffect(() => {
    Cookies.remove("AUTH_TOKEN");
    setTimeout(() => {
      window.location.href = "/";
    }, 5000);
  }, []);
  return (
    <div className="logout">
      <h1>Logging out....</h1>
    </div>
  );
}

export default Logout;
