import { IoIosCloseCircleOutline } from "react-icons/io";

/* eslint-disable react/prop-types */
const ModelModal = ({ setOpen, loading, categoryBrand,categoryModel, createOrEditCategory, setSelectbrand,name, setName, editID }) => {
  

  return (
    <div>
      <div className="modal_overlay">
        <div className="modal_content">
          <button className="modal_close" onClick={() => setOpen(false)}>
            <IoIosCloseCircleOutline />
          </button>
          <form onSubmit={createOrEditCategory}> 
          <h2 className="modal_title">
                            {editID ? "Edit Model" : "Add mModel"}
                </h2>
            <input
            required
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter model name"
              value={name}
            />
              <select
              onChange={(e) => setSelectbrand(e.target.value)} 
              name="chose"
              aria-label="Choose a brand"
              required
              >
              <option value={categoryModel? categoryModel : ""} disabled selected>
                Select a brand
              </option>
              {categoryBrand?.map((item) => (
                <option key={item.id} value={categoryModel ? categoryModel : item.id}>
                  {item.title} 
                </option>
              ))}
            </select>

            <button type="submit" disabled={loading}>
              {loading ? "Loading..." : editID ? "Update" : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModelModal;


