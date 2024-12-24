/* eslint-disable react/prop-types */
const Delate = ({ deleteCategory, delateNameC, deleteCarscategory, closeDeleteModal, brandTitleToDelete, takeIDname,take, takeIDlocation, delateName,categoryToDelete }) => {
  
  return (
    <div>
      <div className="modal_overlay">
        <div className="modal_content">
          <h2 className="modal_title">
{`Are you sure you want to delete ${brandTitleToDelete ? brandTitleToDelete : takeIDname || takeIDlocation || delateName || take || delateNameC } ?`}
          </h2>
          <div className="modal_buttons">
            <button className="modal_delate" onClick={deleteCategory || categoryToDelete || deleteCarscategory}>
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

