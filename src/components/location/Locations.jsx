// import { useEffect, useState } from "react"

// const Locations = () => {
//   const token = localStorage.getItem("tokenxon")
//   const formdata = new FormData()
//   const [name, setName] = useState("")
//   const [images, setImages] = useState(null)
//   const [text, setText] = useState("")
//   formdata.append(name, "name")
//   formdata.append(text, "text")
//   if (images) formdata.append("images", images);
//   const getApi = () => {
//     fetch("https://realauto.limsa.uz/api/locations")
//     .then((res)=> res.json())
//     .then((elem)=> console.log(elem))
//   }
//   useEffect(()=>{
//     getApi()
//   },[])
//   const postApi = ()=> {
//     fetch(`https://realauto.limsa.uz/api/locations`,{
//       method:"POST",
//       headers:{
//         Authorization : `Bearer ${token}`
//       },
//       body:formdata
//     }).then((res)=> res.json())
//     .then((elem)=> )
//   }
//   return (
//     <div>

//     </div>
//   )
// }

// export default Locations
import { ImBin } from "react-icons/im";
import { IoPencil } from "react-icons/io5";
import Mainmodal from "../modal/Mainmodal";
import Sidebar from "../bar/Sidebar";
import Nav from "../nav/Nav";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Delate from "../modal/Delate";

const Locations = () => {
  const [category, setCategory] = useState([]);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);
  const [editCategoryId, setEditCategoryId] = useState(null);
  const token = localStorage.getItem("tokenxon");
  const formdata = new FormData();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    } else {
      navigate("/location");
    }
  }, [token, navigate]);
  
  formdata.append("name", name);
  formdata.append("text", text);
  if (img) formdata.append("images", img);

  const logout = () => {localStorage.removeItem("tokenxon");navigate("/");};

  const getCategory = () => {
    fetch("https://realauto.limsa.uz/api/locations")
      .then((res) => res.json())
      .then((element) => setCategory(element?.data || []));
  };

  useEffect(() => {getCategory();},[]);

  const createOrEditCategory = (e) => {
    e.preventDefault();
    setLoading(true);

  const apiUrl = editCategoryId ? `https://realauto.limsa.uz/api/locations/${editCategoryId}` : "https://realauto.limsa.uz/api/locations";
  const method = editCategoryId ? "PUT" : "POST";

    fetch(apiUrl, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formdata,
    })
      .then((res) => res.json())
      .then((elem) => {
        if (elem.success) {
          setOpen(false);
          getCategory();
          setName("");
          setText("");
          setImg(null);
          setEditCategoryId(null);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const confirmDeleteCategory = (id) => {
    setCategoryToDelete(id);
    setDeleteModalOpen(true);
  };

  const deleteCategory = () => {
    if (categoryToDelete) {
      fetch(`https://realauto.limsa.uz/api/locations/${categoryToDelete}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((item) => {
          if (item.success) {
            getCategory();
            setDeleteModalOpen(false);
            setCategoryToDelete(null);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setCategoryToDelete(null);
  };

  const editCategory = (item) => {
    setEditCategoryId(item.id);
    setName(item.name);
    setText(item.text);
    setImg(null);
    setOpen(true);
  };

  return (
    <>
      <Nav logout={logout} setOpen={setOpen} /> 
      <header>
        <div className="header">
          <Sidebar />
          <div className="container">
            <div className="header_box">
              <ul className="header_list">
                <li className="header_item">
                  <p>Name</p>
                </li>
                <li className="header_item">
                  <p>text</p>
                </li>
                <li className="header_item">
                  <p>Images</p>
                </li>
                <li className="header_item">
                  <p>Holati</p>
                </li>
              </ul>
              <div className="category_box">
                {category?.map((item) => (
                  <section className="category_section" key={item.id}>
                    <div className="category_name">{item?.name}</div>
                    <div className="category_name">{item?.text}</div>
                    <div className="category_img">
                      <img src={`https://realauto.limsa.uz/api/uploads/images/${item?.image_src}`}alt={`Image for ${item?.name}`} />
                    </div>
                    <div className="category_btns">
                      <div className="category_btn" onClick={() => confirmDeleteCategory(item?.id)}>
                        <ImBin />
                      </div>
                      <button className="category_update" onClick={() => editCategory(item)}>
                        <IoPencil />
                      </button>
                    </div>
                  </section>
                ))}
              </div>
              
              {open && <Mainmodal  setOpen={setOpen}  catigory={createOrEditCategory}  name={name}  nameText={text}  setNamee={setName}  setText={setText}  setImg={setImg}  edit={editCategoryId} loading={loading}/>}

              {deleteModalOpen && <Delate deleteCategory={deleteCategory} closeDeleteModal={closeDeleteModal} />}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Locations;