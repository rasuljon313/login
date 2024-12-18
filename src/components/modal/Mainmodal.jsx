/* eslint-disable react/prop-types */
import { IoIosCloseCircleOutline } from "react-icons/io";
const Mainmodal = ({ setOpen, catigory, name, nameRu, setName, setNameRu, setImg, edit, loading }) => {
    return (
      <div>
        <div className="modal_overlay">
          <div className="modal_content">
            <button className="modal_close" onClick={() => setOpen(false)}>
              <IoIosCloseCircleOutline />
            </button>
            <form onSubmit={catigory}>
              <h2 className="modal_title">
                {edit ? "Edit Category" : "Add Category"}
              </h2>
              <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Name (EN)" value={name} required minLength={3} />
              <input onChange={(e) => setNameRu(e.target.value)} type="text" placeholder="Name (RU)" value={nameRu} required minLength={3} />
              <input required type="file" accept="image/*" onChange={(e) => setImg(e.target.files[0])} />
              <button type="submit" disabled={loading} > {loading ? "Loading..." : edit ? "Update" : "Submit"}</button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  export default Mainmodal
  
  
  