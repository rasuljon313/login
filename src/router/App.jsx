import { Route, Routes } from "react-router-dom";
import ForInInput from "../pages/ForInInput";
import Home from "../pages/Home";
import Brand from "../pages/Brand";
import Location from "../pages/Location";
import City from "../pages/City";

const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<ForInInput />} />
        <Route path="/home" element={<Home />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/location" element={<Location />} />
        <Route path="/city" element={<City />} />
      </Routes>
    </div>
  );
};

export default App;

