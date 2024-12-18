/* eslint-disable react/prop-types */
import { IoIosCloseCircleOutline } from 'react-icons/io'

const BrandModal = ({setOpen,createBrand,
  setTitle,
  editBrandId,
  setImages,
  title,
  loading}) => {
  return (
    <div>
            <div className="modal_overlay">
                <div className="modal_content">
                  <button
                    className="modal_close"
                    onClick={() => setOpen(false)}
                  >
                    <IoIosCloseCircleOutline />
                  </button>
                  <form onSubmit={createBrand}>
                    <h2 className="modal_title">
                      {editBrandId ? "Edit Brand" : "Add Brand"}
                    </h2>
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
                      onChange={(e) => setImages(e.target.files[0])}
                    />
                    <button type="submit" disabled={loading}>
                      {loading ? "Loading..." : editBrandId ? "Update" : "Submit"}
                    </button>
                  </form>
                </div>
              </div>
    </div>
  )
}

export default BrandModal