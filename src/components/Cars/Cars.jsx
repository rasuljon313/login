import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../nav/Nav';
import Sidebar from '../bar/Sidebar';
import ModelModal from '../modal/ModelModal';
import Delate from '../modal/Delate';
import { ImBin } from 'react-icons/im';
import { IoPencil } from 'react-icons/io5';

const Models = () => {
  const token = localStorage.getItem("tokenxon");
  const [open, setOpen] = useState(false);
  const [categoryBrand, setCategoryBrand] = useState([]);
  const [categoryModel, setCategoryModel] = useState([]); 
  const [loadingModels, setLoadingModels] = useState(false);
  const [loadingBrands, setLoadingBrands] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);
  const [takeIDName, setTakeIDname] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editID, setEditID] = useState("");
  const [name, setName] = useState("");
  const [selectBrand, setSelectbrand] = useState(null);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("tokenxon");
    navigate("/");
  };
  useEffect(() => {
    if (!token) {
      navigate('/');
    } else {
      navigate('/model');
    }
  }, [token, navigate]);

  useEffect(() => {createApi();getfromBrandApi();}, []);

  const createApi = () => {
    setLoadingModels(true);
    fetch("https://realauto.limsa.uz/api/models")
      .then((res) => res.json())
      .then((data) => {
        setCategoryModel(data?.data || []);
      })
      .catch((err) => console.error("Error fetching models:", err))
      .finally(() => setLoadingModels(false));
  };
  const getfromBrandApi = () => {
    setLoadingBrands(true);
    fetch("https://realauto.limsa.uz/api/brands")
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) {
          setCategoryBrand(data?.data);
        } else {
          console.error('Brands data not found:', data);
        }
      })
      .catch((err) => console.error("Error fetching brands:", err))
      .finally(() => setLoadingBrands(false));
  };

  const createOrEditCategory = () => {
    setLoadingModels(true);
    setLoadingBrands(true);
    const apiUrl = editID ? `https://realauto.limsa.uz/api/models/${editID}` : "https://realauto.limsa.uz/api/models";
    const method = editID ? "PUT" : "POST";
    const formData = new FormData();
    formData.append("name", name);
    formData.append("brand_id", selectBrand);
    fetch(apiUrl, {
      method,
      headers: { Authorization: `Bearer ${token}` },
      body: formData
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          createApi(); 
          setOpen(false);
          setName("");
          setSelectbrand(null);
          setEditID(null);
        }
      })
      .catch((err) => console.error("Error:", err))
      .finally(() => {
        setLoadingModels(false);
        setLoadingBrands(false);
      });
  };

  const deleteCategory = () => {
    if (categoryToDelete) {
      fetch(`https://realauto.limsa.uz/api/models/${categoryToDelete}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((item) => {
          if (item.success) {
            createApi(); 
            setDeleteModalOpen(false);  
            setTakeIDname(null); 
            setCategoryToDelete(null); 
          }}).catch((error) => {console.error("Error:", error);});
    }
  };
  const editCategory = (item) => {
    setEditID(item.id);
    setName(item.name);
    setSelectbrand(item.brand_id);
    setOpen(true);
  };
  const closeDeleteModal = () => {setDeleteModalOpen(false);setTakeIDname(null);
    setCategoryToDelete(null);
    setSelectbrand(null);
  };
  const confirmDeleteCategory = (id, name) => {setTakeIDname(name);setCategoryToDelete(id);setDeleteModalOpen(true);};
  return (
    <>
      <Nav logout={logout} setOpen={setOpen} />
      <header>
        <div className="models">
          <Sidebar />
          <div className="models_box">
            <div className="container">
              <ul className="models_list">
                <li className="models_item">
                  <p>Brand name</p>
                </li>
                <li className="models_item">
                  <p>Brand</p>
                </li>
                <li className="models_item">
                  <p>Status</p>
                </li>
              </ul>
              <div className="category_box">
                {categoryModel.map((item) => (
                    <section className="category_section" key={item.id}>
                      <div className="category_name">{item?.name}</div>
                      <div className="category_name">{item?.brand_title}</div>
                      <div className="category_btns">
                        <div className="category_btn"
                          onClick={() => confirmDeleteCategory(item?.id, item?.name)}>
                          <ImBin />
                        </div>
                        <button className="category_update" onClick={() => editCategory(item)}>
                          <IoPencil />
                        </button>
                      </div>
                    </section>))}
              </div>
            </div>
          </div>
        </div>
      </header>
      {open && (
  <ModelModal createOrEditCategory={createOrEditCategory} editID={editID} setOpen={setOpen} loading={loadingModels || loadingBrands} categoryBrand={categoryBrand} setSelectbrand={setSelectbrand} setName={setName} name={name} selectBrand={selectBrand}/>)}
        
      {deleteModalOpen && (
  <Delate deleteCategory={deleteCategory} closeDeleteModal={closeDeleteModal} take={takeIDName} categoryToDelete={categoryToDelete} />)}
    </>
  );
};

export default Models;
