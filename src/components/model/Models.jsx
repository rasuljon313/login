import { useNavigate } from 'react-router-dom';
import Nav from '../nav/Nav';
import { useEffect, useState } from 'react';
import ModelModal from '../modal/ModelModal';
import Sidebar from '../bar/Sidebar';
import { ImBin } from 'react-icons/im';
import { IoPencil } from 'react-icons/io5';
import Delate from '../modal/Delate';

const Models = () => {
  const token = localStorage.getItem("tokenxon");
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [categoryBrand, setCategoryBrand] = useState([]);
  const [categoryModel, setCategoryModel] = useState([]);
  const [loadingModels, setLoadingModels] = useState(false);
  const [loadingBrands, setLoadingBrands] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(false);
  const [takeIDname, setTakeIDname] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen ] = useState(false);
  const [editID, setEditID] = useState(null);
  const [name, setName] = useState("");
  const [selectBrand, setSelectbrand] = useState(null);
  const formdata = new FormData();
  formdata.append("name", name);
  formdata.append("brand_id", selectBrand);
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

  useEffect(() => {
    createApi();
    getfromBrandApi();
  }, []);

  const createApi = () => {
    setLoadingModels(true);
    fetch("https://realauto.limsa.uz/api/models")
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) {
          setCategoryModel(data?.data);
        } else {
          console.error('Models data not found:', data);
        }
      })
      .catch((err) => console.error("Error fetching models:", err))
      .finally(() => setLoadingModels(false));
  };

  const getfromBrandApi = () => {
    setLoadingBrands(true);
    fetch("https://realauto.limsa.uz/api/brands")
      .then((res) => res.json())
      .then((elem) => {
        if (elem?.data) {
          setCategoryBrand(elem?.data);
        } else {
          console.error('Brands data not found:', elem);
        }
      })
      .catch((err) => console.error("Error fetching brands:", err))
      .finally(() => setLoadingBrands(false));
  };
const handleClick = (e) => {
    e.preventDefault();
    fetch("https://realauto.limsa.uz/api/models", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formdata,
    })
    .then((res) => res.json())
    .then((data) => {
      if (data?.success) {
        setCategoryModel((prevModels) => [
          ...prevModels,
          { name: name, brand_id: selectBrand, id: data?.data?.id, brand_title: categoryBrand.find(b => b.id === selectBrand)?.title }
        ]);

        setOpen(false); 
      }
    })
    .catch((err) => console.error("Error submitting model:", err));
  };
  const confirmDeleteCategory = (id, name_en) => {
    setCategoryToDelete(id);
    setTakeIDname(name_en); 
    setDeleteModalOpen(true);
  };
  console.log(categoryModel);
  

  const createOrEditCategory = (e) => {
      e.preventDefault();
      setLoadingBrands(false);
      setLoadingModels(false);
    
      const apiUrl = editID ? `https://realauto.limsa.uz/api/models/${editID}` : "https://realauto.limsa.uz/api/models";
      const method = editID ? "PUT" : "POST";
    
      const formData = new FormData();
      formData.append("name", name);
      formData.append("brand_id", selectBrand);
    
      fetch(apiUrl, {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            // Update models list after success
            if (editID) {
              // Update the specific model
              setCategoryModel((prevModels) =>
                prevModels.map((item) =>
                  item.id === editID
                    ? { ...item, name, brand_id: selectBrand, brand_title: categoryBrand.find(b => b.id === selectBrand)?.title }
                    : item
                )
              );
            } else {
              // Add new model
              setCategoryModel((prevModels) => [
                ...prevModels,
                { name, brand_id: selectBrand, id: data?.data?.id, brand_title: categoryBrand.find(b => b.id === selectBrand)?.title },
              ]);
            }
    
            setOpen(false); // Close modal after success
            setName(""); // Reset name field
            setSelectbrand(""); // Reset select brand field
            setEditID(null); // Reset edit ID
          }
        })
        .catch((err) => console.error("Error:", err))
        .finally(() => {
          setLoadingBrands(false);
          setLoadingModels(false);
        });
  };
  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setCategoryToDelete(null);
    setTakeIDname(""); 
  };

  const deleteModal = () => {
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
            setTakeIDname(""); 
            setCategoryToDelete(null);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };
  const editCategory=(item)=>{
    setEditID(item.id)
    setName(item.title)
    setCategoryModel(item?.brand_title)
  }

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
               {categoryModel?.map((item, index) => (
                <section className="category_section" key={index}>
                  <div className="category_name">{item?.name}</div>
                  <div className="category_name">{item?.brand_title}</div>
                  <div className="category_btns">
                      <div className="category_btn" onClick={() => confirmDeleteCategory(item?.id, item?.name_en)}>
                        <ImBin />
                      </div>
                      <button className="category_update" onClick={() => editCategory(item)}>
                        <IoPencil />
                      </button>
                    </div>
                </section>
               ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {open && (
        <ModelModal
        createOrEditCategory={createOrEditCategory}
        editID={editID}
          setOpen={setOpen}
          loading={loadingModels || loadingBrands}
          categoryBrand={categoryBrand}
          handleClick={handleClick}
          setSelectbrand={setSelectbrand}
          setName={setName}
        />
      )}
      {
        deleteModalOpen && <Delate deleteCategory={deleteModal} closeDeleteModal={closeDeleteModal}takeIDname={takeIDname}/>
      }
    </>
  );
};

export default Models;


