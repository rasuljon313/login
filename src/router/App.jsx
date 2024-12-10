import { Route, Routes, useNavigate } from "react-router-dom";
import ForInInput from "../pages/ForInInput";
import Home from "../pages/Home";
import { useEffect } from "react";

const App = () => {
  const tokencik = localStorage.getItem("tokenxon");
  console.log(tokencik);

  const navigate = useNavigate();

  useEffect(() => {
    if (tokencik && tokencik.length > 20) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, [tokencik, navigate]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<ForInInput />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;

