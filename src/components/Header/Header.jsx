import { ImBin } from "react-icons/im";
import { IoPencil } from "react-icons/io5";
import Mainmodal from "../modal/Mainmodal";
import Sidebar from "../bar/Sidebar";
import Nav from "../nav/Nav";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Delate from "../modal/Delate";

const Header = () => {
  const [category, setCategory] = useState([]);
  const [open, setOpen] = useState(false);
  const [name_en, setName_en] = useState("");
  const [name_ru, setName_ru] = useState("");
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);
  const [editCategoryId, setEditCategoryId] = useState(null);
  const token = localStorage.getItem("tokenxon");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    } else {
      navigate("/home");
    }
  }, [token, navigate]);

  const formdata = new FormData();
  formdata.append("name_en", name_en);
  formdata.append("name_ru", name_ru);
  if (img) formdata.append("images", img);

  const logout = () => {localStorage.removeItem("tokenxon");navigate("/");};

  const getCategory = () => {
    fetch("https://realauto.limsa.uz/api/categories")
      .then((res) => res.json())
      .then((element) => setCategory(element?.data || []));
  };

  useEffect(() => {getCategory();},[]);

  const createOrEditCategory = (e) => {
    e.preventDefault();
    setLoading(true);

  const apiUrl = editCategoryId ? `https://realauto.limsa.uz/api/categories/${editCategoryId}` : "https://realauto.limsa.uz/api/categories";
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
          setName_en("");
          setName_ru("");
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
      fetch(`https://realauto.limsa.uz/api/categories/${categoryToDelete}`, {
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
    setName_en(item.name_en);
    setName_ru(item.name_ru);
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
                  <p>Name_en</p>
                </li>
                <li className="header_item">
                  <p>Name_ru</p>
                </li>
                <li className="header_item">
                  <p>Images</p>
                </li>
                <li className="header_item">
                  <p>holati</p>
                </li>
              </ul>
              <div className="category_box">
                {category?.map((item) => (
                  <section className="category_section" key={item.id}>
                    <div className="category_name">{item?.name_en}</div>
                    <div className="category_name">{item?.name_ru}</div>
                    <div className="category_img">
                      <img src={`https://realauto.limsa.uz/api/uploads/images/${item?.image_src}`}alt={`Image for ${item?.name_en}`} />
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
              
              {open && <Mainmodal  setOpen={setOpen}  catigory={createOrEditCategory}  name={name_en}  nameRu={name_ru}  setName={setName_en}  setNameRu={setName_ru}  setImg={setImg}  edit={editCategoryId} loading={loading}  />}

              {deleteModalOpen && <Delate deleteCategory={deleteCategory} closeDeleteModal={closeDeleteModal} />}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;