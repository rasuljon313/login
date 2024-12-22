import Nav from "../../components/nav/Nav"
import Sidebar from "../../components/bar/Sidebar"
import { useEffect, useState } from "react"
import CModal from "../modal/CModal"
const Cars = () => {
  const [saveBrand, setSaveBrand] = useState([])
  const [saveCars, setSaveCars] = useState([])
  const [openC, setOpenC] = useState(false)
  const getBrand = () => {
    fetch("https://realauto.limsa.uz/api/brands")
    .then((res) => res.json())
    .then((elem) => setSaveBrand(elem?.data))
  }
  const getCar = () => {
    fetch("https://realauto.limsa.uz/api/cars")
    .then((res) => res.json())
    .then((elem) => setSaveCars(elem?.data))
  }
  // console.log(saveBrand);
  // console.log(saveCars);
  
  useEffect(()=>{
    getBrand()
    getCar()
  },[])
  return (
    <div>

     <Nav setOpenC={setOpenC} />
     <div className="cars">
     <Sidebar/>
      <div className="cars_box">
        <div className="container">
          <ul className="cars_list">
           <li className="cars_item">Brand name</li>
           <li className="cars_item">Color</li>
          </ul>
        </div>
      </div>
     </div>
     {
      openC && <CModal setOpenC={setOpenC} saveBrand={saveBrand} />
     }
    </div>
  )
}

export default Cars