import Nav from "../../components/nav/Nav";
import Sidebar from "../../components/bar/Sidebar";
import { useEffect, useState } from "react";
import CModal from "../modal/CModal";

const Cars = () => {
  const [saveBrand, setSaveBrand] = useState([]);
  const [saveCars, setSaveCars] = useState([]);
  const [saveModels, setSaveModels] = useState([]);
  const [saveCity, setSaveCity] = useState([]);
  const [location, setLocation] = useState([]);
  const [openC, setOpenC] = useState(false);
  const [color, setColor] = useState("");
  const [year, setYear] = useState("");
  const [imgID, setImg] = useState("");
  const [maxspeedID, setMaxspeed] = useState("");
  const [maxpeopleID, setMaxpeople] = useState("");
  const [transmissionID, setTransmission] = useState("");
  const [setMatorID, setMator] = useState("");
  const [driveSide, setDrives] = useState("");
  const [second, setSecond] = useState("");
  const [petrol, setPetrol] = useState("");
  const [limitperday, setLimitp] = useState("");
  const [deposit, setDeposit] = useState("");
  const [premiump, setPremiumP] = useState("");
  const [premiuma, setPremiumA] = useState("");
  const [premiumAS, setPremiumAS] = useState("");
  const [premiumu, setPremiumU] = useState("");
  const [premiumUS, setPremiumUS] = useState("");
  const [inclusive, setInclusive] = useState("");
  const [cover, setCover] = useState("");

  const [brandID, setBrandId] = useState("");
  const [modelID, setModelID] = useState("");
  const [cityID, setCityID] = useState("");
  const [locationID, setLocationID] = useState("");
  const token = localStorage.getItem("tokenxon");

  const getBrand = () => {
    fetch("https://realauto.limsa.uz/api/brands")
      .then((res) => res.json())
      .then((elem) => setSaveBrand(elem?.data));
  };
  const getModel = () => {
    fetch("https://realauto.limsa.uz/api/models")
      .then((res) => res.json())
      .then((elem) => setSaveModels(elem?.data));
  };
  const getCity = () => {
    fetch("https://realauto.limsa.uz/api/cities")
      .then((res) => res.json())
      .then((elem) => setSaveCity(elem?.data));
  };
  const getLocation = () => {
    fetch("https://realauto.limsa.uz/api/locations")
      .then((res) => res.json())
      .then((elem) => setLocation(elem?.data));
  };
  const getCar = () => {
    fetch("https://realauto.limsa.uz/api/cars")
      .then((res) => res.json())
      .then((elem) => setSaveCars(elem?.data));
  };
  
  useEffect(() => {
    getBrand();
    getCar();
    getModel();
    getCity();
    getLocation();
  }, []);
  
  const pushApiC = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("color", color);
    formdata.append("brand_id", brandID);
    formdata.append("location_id", locationID);
    formdata.append("model_id", modelID);
    formdata.append("city_id", cityID);
    formdata.append("year", year);
    formdata.append("seconds", second);
    formdata.append("max_speed", maxspeedID);
    formdata.append("max_people", maxpeopleID);
    formdata.append("transmission", transmissionID);
    formdata.append("motor", setMatorID);
    formdata.append("drive_side", driveSide);
    formdata.append("petrol", petrol);
    formdata.append("limitperday", limitperday);
    formdata.append("deposit", deposit);
    formdata.append("premium_protection", premiump);
    formdata.append("price_in_aed", premiuma);
    formdata.append("price_in_usd", premiumu);
    formdata.append("price_in_aed_sale", premiumAS);
    formdata.append("price_in_usd_sale", premiumUS);
    formdata.append("inclusive", inclusive);
    formdata.append("cover", cover);
  if(imgID)formdata.append("images[]", imgID);

    fetch("https://realauto.limsa.uz/api/cars",{
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        // "Content-Type": "application/json; charset=utf-8",
      },
      body: formdata,
    })
    .then((res) => res.json())
    .then((elem) => console.log(elem))
      // .then((res) => res.json())
      // .then((data) => {
      //   if (data.success) {
      //     getCar();
      //     setOpenC(false);
      //     setColor("");
      //     setYear("");
      //     setSecond("");
      //     setCityID("");
      //     setModelID("");
      //     setBrandId("");
      //     setImg(null);
      //   } else {
      //     console.error("Error:", data.message);
      //   }
      // })
      // .catch((err) => console.error("Error:", err));
  };

  return (
    <div>
      <Nav setOpenC={setOpenC} />
      <div className="cars">
        <Sidebar />
        <div className="cars_box">
          <div className="container">
            <ul className="cars_list">
              <li className="cars_item">Brand name</li>
              <li className="cars_item">Color</li>
            </ul>
            {saveCars?.map((item) => (
              <section key={item.id}>
                <div className="cars_color">{item.color}</div>
                <div className="cars_color">{item.brand.image_src}</div>
              </section>
            ))}
          </div>
        </div>
      </div>
      {openC && (
        <CModal
          setCover={setCover}
          setInclusive={setInclusive}
          setLocationID={setLocationID}
          location={location}
          setPremiumUS={setPremiumUS}
          setPremiumAS={setPremiumAS}
          setPremiumU={setPremiumU}
          setPremiumA={setPremiumA}
          setPremiumP={setPremiumP}
          setDeposit={setDeposit}
          setLimitp={setLimitp}
          setPetrol={setPetrol}
          setDrives={setDrives}
          setMator={setMator}
          setTransmission={setTransmission}
          setMaxspeed={setMaxspeed}
          setMaxpeople={setMaxpeople}
          setImg={setImg}
          setSecond={setSecond}
          setYear={setYear}
          setCityID={setCityID}
          saveCity={saveCity}
          setModelID={setModelID}
          saveModels={saveModels}
          pushApiC={pushApiC}
          setBrandId={setBrandId}
          setColor={setColor}
          setOpenC={setOpenC}
          saveBrand={saveBrand}
          color={color}
        />
      )}
    </div>
  );
};

export default Cars;

