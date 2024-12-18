/* eslint-disable react/prop-types */
const Delate = ({ deleteCategory, closeDeleteModal, brandTitleToDelete }) => {
  return (
    <div>
      <div className="modal_overlay">
        <div className="modal_content">
          <h2 className="modal_title">
            {`Are you sure you want to delete this ${brandTitleToDelete ? brandTitleToDelete : `category`} ?`}
          </h2>
          <div className="modal_buttons">
            <button className="modal_delate" onClick={deleteCategory}>
              Delete
            </button>
            <button className="modal_cancel" onClick={closeDeleteModal}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delate;

