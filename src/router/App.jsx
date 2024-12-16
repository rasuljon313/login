import { Route, Routes } from "react-router-dom";
import ForInInput from "../pages/ForInInput";
import Home from "../pages/Home";
// import { useEffect } from "react";
import Brand from "../pages/Brand";

const App = () => {
  // const tokencik = localStorage.getItem("tokenxon");
  // const navigate = useNavigate();

//   useEffect(() => {
//     if (tokencik && tokencik.length > 20) {
//      navigate("/home")
// } else {
//   navigate("/");
// }
//   }, [tokencik, navigate]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<ForInInput />} />
        <Route path="/home" element={<Home />} />
        <Route path="/brand" element={<Brand />} />
      </Routes>
    </div>
  );
};

export default App;

