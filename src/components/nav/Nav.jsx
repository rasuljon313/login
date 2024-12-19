// import { Navigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const Nav = ({ logout, setOpen }) => {
  //    const logout = () => {
  //   localStorage.removeItem("tokenxon");
  //   Navigate("/");
  // };
  return (
    <nav>
      <div className="nav">
        <div className="container">
          <div className="nav_box">
            <h2 className="nav_title">Auto Zoom</h2>
            <button className="nav_logo" onClick={logout}>
              Logout
            </button>
          </div>
          <div className="nav_add">
            <button onClick={() => setOpen(true)}>Open Modal</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
