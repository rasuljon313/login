import { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Brands = () => {
  const token = localStorage.getItem("tokenxon");
  const [title, setTitle] = useState("");
  const [images, setImages] = useState(null);
  const [category, setCategory] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // State to handle errors
  const navigate = useNavigate();

  const getBrands = () => {
    fetch("https://realauto.limsa.uz/api/brands")
      .then((res) => res.json())
      .then((data) => setCategory(data?.data || []))
  };

  const logout = () => {
    localStorage.removeItem("tokenxon");
    navigate("/");
  };

  const createBrand = (e) => {
    e.preventDefault();
    setLoading(true);

    // Prepare FormData only when submitting the form
    const formData = new FormData();
    formData.append("title", title);
    formData.append("images", images);

    fetch("https://realauto.limsa.uz/api/brands", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((item) => {
        setCategory((prev) => [...prev, item?.data]); // Add new category to the state
      })
      .catch((error) => {
        console.error("Error occurred:", error);
        setError("Failed to create brand");
      })
      .finally(() => {
        setLoading(false);
        setOpen(false);
      });
  };

  const deleteCategory = (id) => {
    fetch(`https://realauto.limsa.uz/api/brands/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        setCategory((prev) => prev.filter((item) => item.id !== id)); // Remove deleted category from state
      })
  };

  useEffect(() => {
    getBrands();
  }, []);
  

  return (
    <>
      <nav>
        <div className="nav">
          <div className="container">
            <ul className="nav_list">
              <li className="nav_item">
                <button onClick={logout}>Logout</button>
              </li>
              <li className="nav_item">
                <button onClick={() => setOpen(true)}>Open Modal</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="brand">
        <div className="container">
          <div className="brand_box">
            {error && <div className="error_message">{error}</div>}

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
                    <h2 className="modal_title">Add Brand</h2>
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
                      required
                      onChange={(e) => setImages(e.target.files[0])}
                    />
                    <button type="submit" disabled={loading}>
                      {loading ? "Loading..." : "Submit"}
                    </button>
                  </form>
                </div>
              </div>
            )}

            {category?.map((item) => (
              <section className="category_section" key={item.id}>
                <div className="category_name">{item?.title}</div>
                <div className="category_img">
                  <img
                    src={`https://realauto.limsa.uz/api/uploads/images/${item?.image_src}`}
                    alt={`Image for ${item?.title}`}
                  />
                </div>
                <div className="btn" onClick={() => deleteCategory(item?.id)}>
                  Delete
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
