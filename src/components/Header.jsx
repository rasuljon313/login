import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Header = () => {
  // https://realauto.limsa.uz/api/categories
  const navigate = useNavigate()
  const [category, setCategory]=useState()
  const logout =()=>{
    localStorage.removeItem("tokenxon")
    navigate("/")
  }
  const getcategory=()=>{
    fetch("https://realauto.limsa.uz/api/categories")
    .then((res)=> res?.json())
    .then((element)=> setCategory(element?.data))    
  }
  useEffect(()=>{
    getcategory()
  },[])
  return (
    <div>
      qxerkcwkerhbweuyrcgwrt
      <button onClick={logout}>logout</button>
      {
        category?.map((item,index)=>(
          <ul key={index}>
    <li>{item?.name_en}</li>
    <li>{item?.name_ru}</li>
    <li className="li"><img src={`https://realauto.limsa.uz/api/uploads/images/${item?.image_src}`} alt="" /></li>
          </ul>
        ))
      }
    </div>
  )
}

export default Header