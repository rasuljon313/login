/* eslint-disable react/prop-types */
const Nav = ({ logout, setOpen, setOpenM, setOpenC }) => {
  return (
    <nav>
      <div className="nav">
        <div className="container">
          <div className="nav_box">
            <h2 className="nav_title">Auto Zoom</h2>
            <div className="nav_btns">
            <button className="nav_logo" onClick={logout}>
              Logout
            </button>
            <button onClick={() => {setOpen? setOpen(true) : setOpenM ? setOpenM(true) : setOpenC(true)}}>Open Modal</button></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
