import { IoIosCloseCircleOutline } from "react-icons/io";
/* eslint-disable react/prop-types */
const Modal = ({setOpen, createOrEdilocation, namee, nameText, setNamee,setText,setImg,edit,loading,currentImage,resetForm,}) => {
  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      setOpen(false);
      resetForm();
    }
  };

  return (
    <div className="modal_overlay" onClick={handleClose}>
      <div className="modal_content">
        <button
          className="modal_close"
          onClick={() => {
            setOpen(false);
            resetForm();
          }}
        >
          <IoIosCloseCircleOutline />
        </button>
        <form onSubmit={createOrEdilocation}>
          <h2 className="modal_title">
            {edit ? "Edit Category" : "Add Category"}
          </h2>
            <input
              id="name"
              type="text"
              value={namee}
              onChange={(e) => setNamee(e.target.value)}
              required
              placeholder="Name"
            />
            <textarea
              id="text"
              value={nameText}
              onChange={(e) => setText(e.target.value)}
              required
              placeholder="Text"
            ></textarea>
            <label htmlFor="image">Image</label>
            <input
              id="image"
              type="file"
              onChange={(e) => setImg(e.target.files[0])} 
            />
              {currentImage && (
              <div className="image_preview">
                <img
                  src={`https://realauto.limsa.uz/api/uploads/images/${currentImage}`}
                  alt="Existing Category"
                  style={{ width: "100px", height: "auto" }}
                />
              </div>
            )}
          <button type="submit" disabled={loading}>
            {loading ? "Loading..." : edit ? "Update" : "Create"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
