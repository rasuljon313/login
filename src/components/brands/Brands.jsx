import { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoPencil } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Sidebar from "../bar/Sidebar";
import { ImBin } from "react-icons/im";
import Nav from "../nav/Nav";

const Brands = () => {
  const token = localStorage.getItem("tokenxon");
  const [title, setTitle] = useState("");
  const [images, setImages] = useState(null);
  const [category, setCategory] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editBrandId, setEditBrandId] = useState(null); 
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [brandToDelete, setBrandToDelete] = useState(null);
  const [brandTitleToDelete, setBrandTitleToDelete] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    if (!token ) {

     navigate("/");
} else {
  navigate("/brand")
}
  }, [token, navigate]);

  const getBrands = () => {
    fetch("https://realauto.limsa.uz/api/brands")
      .then((res) => res.json())
      .then((data) => setCategory(data?.data || []));
  };

  const logout = () => {
    localStorage.removeItem("tokenxon");
    navigate("/");
  };

  const createBrand = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    if (images) {
      formData.append("images", images);
    }

    const apiUrl = editBrandId ? `https://realauto.limsa.uz/api/brands/${editBrandId}` : "https://realauto.limsa.uz/api/brands";
    const method = editBrandId ? "PUT" : "POST";

    fetch(apiUrl, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((item) => {
        if (editBrandId) {
          setCategory((prev) =>
            prev.map((brand) =>
              brand.id === item.data.id ? item.data : brand
            )
          );
        } else {
          setCategory((prev) => [...prev, item?.data]);
        }
      })
      .catch((error) => {
        console.error("Error occurred:", error);
        setError("Failed to create or update brand");
      })
      .finally(() => {
        setLoading(false);
        setOpen(false);
        setEditBrandId(null);
        setTitle("");
        setImages(null);
      });
  };

  const confirmDeleteBrand = (id, title) => {
    setBrandToDelete(id); 
    setBrandTitleToDelete(title); 
    setDeleteModalOpen(true); 
  };

  const deleteBrand = () => {
    if (brandToDelete) {
      fetch(`https://realauto.limsa.uz/api/brands/${brandToDelete}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(() => {
          setCategory((prev) => prev.filter((item) => item.id !== brandToDelete)); 
          setDeleteModalOpen(false); 
          setBrandToDelete(null); 
          setBrandTitleToDelete(null); 
        })
        .catch((error) => {
          console.error("Error occurred:", error);
          setError("Failed to delete brand");
        });
    }
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false); 
    setBrandToDelete(null);
    setBrandTitleToDelete(null); 
  };

  const editBrand = (item) => {
    setEditBrandId(item.id);
    setTitle(item.title); 
    setImages(null); 
    setOpen(true); 
  };
  

  useEffect(() => {
    getBrands();
  }, []);

  return (
    <>
    <Nav logout={logout} setOpen={setOpen}/>
      <div className="brand">
        <Sidebar/>
        <div className="container">
          <div className="brand_box">
            {error && <div className="error_message">{error}</div>}
            <ul className="brand_list">
              <li className="brand_item">Title</li>
              <li className="brand_item">Images</li>
              <li className="brand_item">Change</li>
            </ul>
            {category?.map((item) => (
              <section className="category_section" key={item.id}>
                <div className="category_name">{item?.title}</div>
                <div className="category_img">
                  <img
                    src={`https://realauto.limsa.uz/api/uploads/images/${item?.image_src}`}
                    alt={`Image for ${item?.title}`}
                  />
                </div>
                <div className="category_btns">
                  <div className="category_btn" onClick={() => confirmDeleteBrand(item.id, item.title)}>
                    <ImBin />
                  </div>
                  <button className="category_update" onClick={() => editBrand(item)}>
                    <IoPencil /> 
                  </button>
                </div>
              </section>
            ))}
            {open && (
              <div className="modal_overlay">
                <div className="modal_content">
                  <button
                    className="modal_close"
                    onClick={() => setOpen(false)}
                  >
                    <IoIosCloseCircleOutline />
                  </button>
                  <form onSubmit={createBrand}>
                    <h2 className="modal_title">
                      {editBrandId ? "Edit Brand" : "Add Brand"}
                    </h2>
                    <input
                      onChange={(e) => setTitle(e.target.value)}
                      type="text"
                      placeholder="Name (EN)"
                      value={title}
                      required
                      minLength={3}
                    />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setImages(e.target.files[0])}
                    />
                    <button type="submit" disabled={loading}>
                      {loading ? "Loading..." : editBrandId ? "Update" : "Submit"}
                    </button>
                  </form>
                </div>
              </div>
            )}
            {deleteModalOpen && (
              <div className="modal_overlay">
                <div className="modal_content">
                  <h2 className="modal_title">{`Are you sure you want to delete this brand: ${brandTitleToDelete}`}</h2>
                  <div className="modal_buttons">
                    <button className="modal_delate" onClick={deleteBrand}>Delete</button>
                    <button className="modal_cancel" onClick={closeDeleteModal}>Cancel</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;



