import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [open, setOpen] = useState(false);
  const [name_en, setName_en]=useState()
  const [name_ru, setName_ru]=useState()
  const [img, setImg]=useState()
  const token = localStorage.getItem("tokenxon")
  const formdata = new FormData()
  formdata.append("name_en", name_en)
  formdata.append("name_ru", name_ru)
  formdata.append("images", img)
  const logout = () => {
    localStorage.removeItem("tokenxon");
    navigate("/");
  };
  const getCategory = () => {
    fetch("https://realauto.limsa.uz/api/categories")
      .then((res) => res.json())
      .then((element) => setCategory(element?.data))
  };
  useEffect(() => {
    getCategory();
  }, []);
// 
  const create=(e)=>{
    e.preventDefault()
    fetch("https://realauto.limsa.uz/api/categories",{
      method:"Post",
      headers:{
// "Content-Type": "multipart/formdata",
"Authorization":`Bearer ${token}`
      },
      body: formdata
    }).then((res)=>res.json())
    .then((elem)=>console.log(elem))
  }



  return (
    <div>
      <h1>Header Component</h1>
      <button onClick={logout}>Logout</button>
      <button onClick={() => setOpen(true)}>Open Modal</button>

      {open && (
        <div className="modal">
          <form onSubmit={create}>
            <input onChange={(e)=>setName_en(e?.target?.value)}
              type="text"
              placeholder="Name (EN)"
              required
              minLength={3}
            />
            <input onChange={(e)=>setName_ru(e?.target?.value)}
              type="text"
              placeholder="Name (RU)"
              required
              minLength={3}
            />
            <input type="file" accept="image/*" required onChange={(e)=>setImg(e?.target?.files[0])} />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}

      <hr />
      <hr />

      {category?.map((item, index) => (
        <ul key={index}>
          <li>{item?.name_en}</li>
          <li>{item?.name_ru}</li>
          <li className="li">
            <img
              src={`https://realauto.limsa.uz/api/uploads/images/${item?.image_src}`}
              alt={`Image for ${item?.name_en}`}
            />
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Header;
