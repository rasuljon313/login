import { ImBin } from "react-icons/im";
import { IoPencil } from "react-icons/io5";
import Sidebar from "../bar/Sidebar";
import Nav from "../nav/Nav";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Delate from "../modal/Delate";
import Modal from "../location/Modal";

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
  const [currentImage, setCurrentImage] = useState("");  
  const token = localStorage.getItem("tokenxon");
  const [takeIDlocation, setTakeIDLocation] = useState(""); 
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

  const logout = () => {
    localStorage.removeItem("tokenxon");
    navigate("/");
  };

  const getCategory = () => {
    fetch("https://realauto.limsa.uz/api/locations")
      .then((res) => res.json())
      .then((element) => setCategory(element?.data || []));
  };

  useEffect(() => { getCategory(); }, []);

  const createOrEditLocation = (e) => {
    e.preventDefault();
    setLoading(true);

    const apiUrl = editCategoryId
      ? `https://realauto.limsa.uz/api/locations/${editCategoryId}`
      : "https://realauto.limsa.uz/api/locations";
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
          setCurrentImage("");  
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const confirmDeleteLocation = (id, name) => {
    setCategoryToDelete(id);
    setTakeIDLocation(name); 
    setDeleteModalOpen(true);
  };

  const deleteLocation = () => {
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
            setTakeIDLocation(""); 
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
    setTakeIDLocation(""); 
  };

  const editCategory = (item) => {
    setEditCategoryId(item.id);
    setName(item.name);
    setText(item.text);
    setImg(null);
    setCurrentImage(item.image_src);  
    setOpen(true);
  };

  const resetForm = () => {
    setName("");
    setText("");
    setImg(null);
    setCurrentImage(null); 
  };

  return (
    <>
      <Nav logout={logout} setOpen={setOpen} /> 
      <header>
        <div className="header">
          <Sidebar />
          <div className="header_box">
          <div className="container">
              <ul className="header_list">
                <li className="header_item">
                  <p>Name</p>
                </li>
                <li className="header_item">
                  <p>Text</p>
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
                      <img src={`https://realauto.limsa.uz/api/uploads/images/${item?.image_src}`} alt={`Image for ${item?.name}`} />
                    </div>
                    <div className="category_btns">
                      <div className="category_btn" onClick={() => confirmDeleteLocation(item?.id, item?.name)}>
                        <ImBin />
                      </div>
                      <button className="category_update" onClick={() => editCategory(item)}>
                        <IoPencil />
                      </button>
                    </div>
                  </section>
                ))}
              </div>
              
              {open && (
                <Modal setOpen={setOpen} createOrEdilocation={createOrEditLocation} name={name} nameText={text} setNamee={setName} setText={setText} setImg={setImg} edit={editCategoryId} resetForm={resetForm} loading={loading} currentImage={currentImage}/>
              )}

              {deleteModalOpen && (
                <Delate takeIDlocation={takeIDlocation} deleteCategory={deleteLocation} closeDeleteModal={closeDeleteModal}/>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Locations;

