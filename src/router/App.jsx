import { Route, Routes } from "react-router-dom";
import ForInInput from "../pages/ForInInput";
import Home from "../pages/Home";
import Brand from "../pages/Brand";
import Location from "../pages/Location";
import City from "../pages/City";
// import Car from "../pages/Car";
import Model from "../pages/Model";

const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<ForInInput />} />
        <Route path="/home" element={<Home />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/location" element={<Location />} />
        <Route path="/city" element={<City />} />
        {/* <Route path="/car" element={<Car />} /> */}
        <Route path="/model" element={<Model />} />
      </Routes>
    </div>
  );
};

export default App;

