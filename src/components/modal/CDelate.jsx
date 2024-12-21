/* eslint-disable react/prop-types */
const CDelate = ({ delateItem, closeM, TakeColor }) => {
    return (
      <div className="modal">
        <h2 className="modal_title">
          {`Are you sure you want to delete ${TakeColor}?`}
        </h2>
        <div className="modal_buttons">
          <button className="modal_delate" onClick={delateItem}>Delete</button>
          <button className="modal_cancel" onClick={closeM}>Cancel</button>
        </div>
      </div>
    );
  };
  
  export default CDelate;
  
