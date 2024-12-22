// import Nav from "../../components/nav/Nav"
// import Sidebar from "../../components/bar/Sidebar"
// import { useEffect, useState } from "react"
// import CModal from "../modal/CModal"
// const Cars = () => {
//   const [saveBrand, setSaveBrand] = useState([])
//   const [saveCars, setSaveCars] = useState([])
//   const [openC, setOpenC] = useState(false)
//   const [color, setColor] = useState("")
//   const [brandID, setBrandId] = useState("")
//   const token = localStorage.getItem("tokenxon");
//   const formdata = new FormData()
//   formdata.append("color", color)
//   formdata.append("brand_id", brandID)

//   const getBrand = () => {
//     fetch("https://realauto.limsa.uz/api/brands")
//     .then((res) => res.json())
//     .then((elem) => setSaveBrand(elem?.data))
//   }
//   const getCar = () => {
//     fetch("https://realauto.limsa.uz/api/cars")
//     .then((res) => res.json())
//     .then((elem) => setSaveCars(elem?.data))
//   }
//   const pushApiC = () => {
//     fetch("https://realauto.limsa.uz/api/cars",{
//       method:"POST",
//       headers:{
//         Authorization: `Bearer ${token}`
//       },
//       body:formdata
//     })
//     .then((elem) => {
//       if(elem.success){
//         getCar()
//         setOpenC(false)
//         setColor("")
//       }
//     })
//   }

//   // console.log(saveBrand);
//   console.log(saveCars);
  
//   useEffect(()=>{
//     getBrand()
//     getCar()
//   },[])
//   return (
//     <div>

//      <Nav setOpenC={setOpenC} />
//      <div className="cars">
//      <Sidebar/>
//       <div className="cars_box">
//         <div className="container">
//           <ul className="cars_list">
//            <li className="cars_item">Brand name</li>
//            <li className="cars_item">Color</li>
//           </ul>
//         </div>
//       </div>
//      </div>
//      {
//       openC && <CModal pushApiC={pushApiC} setBrandId={setBrandId} setColor={setColor} setOpenC={setOpenC} saveBrand={saveBrand} />
//      }
//     </div>
//   )
// }

// export default Cars

import Nav from "../../components/nav/Nav";
import Sidebar from "../../components/bar/Sidebar";
import { useEffect, useState } from "react";
import CModal from "../modal/CModal";

const Cars = () => {
  const [saveBrand, setSaveBrand] = useState([]);
  const [saveCars, setSaveCars] = useState([]);
  const [openC, setOpenC] = useState(false);
  const [color, setColor] = useState("");
  const [brandID, setBrandId] = useState("");
  const token = localStorage.getItem("tokenxon");

  const getBrand = () => {
    fetch("https://realauto.limsa.uz/api/brands")
      .then((res) => res.json())
      .then((elem) => setSaveBrand(elem?.data));
  };

  const getCar = () => {
    fetch("https://realauto.limsa.uz/api/cars")
      .then((res) => res.json())
      .then((elem) => setSaveCars(elem?.data));
  };

  const pushApiC = () => {
    const formdata = new FormData();
    formdata.append("color", color);
    formdata.append("image_src", brandID);

    fetch("https://realauto.limsa.uz/api/cars", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: formdata,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
      .catch((err) => console.error("Error:", err));
  };

  useEffect(() => {
    getBrand();
    getCar();
  }, []);

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
            {
              saveCars?.map((item) => (
                <section key={item.id}>
                  <div className="cars_color">{item.color}</div>
                  <div className="cars_color">{item.brand.image_src}</div>
                </section>
              ))
            }
          </div>
        </div>
      </div>
      {openC && (
        <CModal
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
