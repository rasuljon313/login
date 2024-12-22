/* eslint-disable react/prop-types */
import { IoIosCloseCircleOutline } from "react-icons/io";

const CModal = ({ setOpenC, pushApiC, saveBrand, setBrandId, setColor }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    pushApiC(); 
    setOpenC(false); 
  };

  return (
    <div>
      <div className="modal_overlay">
        <div className="modal_content">
          <button className="modal_close" onClick={() => setOpenC(false)}>
            <IoIosCloseCircleOutline />
          </button>
          <form onSubmit={handleSubmit}>
            <h2 className="modal_title">{"Add Model"}</h2>
            <input
              required
              onChange={(e) => setColor(e.target.value)}
              type="text"
              placeholder="Enter car color"
            />
            <select
              name="chose"
              onChange={(e) => setBrandId(e.target.value)}
              aria-label="Choose a brand"
              required
            >
              <option value="" disabled>
                Select a brand
              </option>
              {saveBrand?.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CModal;
