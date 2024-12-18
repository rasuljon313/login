/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// import { IoIosCloseCircleOutline } from 'react-icons/io'

// const BrandModal = ({setOpen,createBrand,setTitle,editBrandId,setImages,title,loading, existingImageSrc, setExistingImageSrc}) => {

//     const resetForm = () => {
//       setTitle("");
//       setImages(null);
//       setExistingImageSrc(null); 
//     };
    
//   return (
//     <div>
//             <div className="modal_overlay">
//                 <div className="modal_content">
//                   <button
//                     className="modal_close"
//                     onClick={() => {setOpen(false), resetForm()}}
//                   >
//                     <IoIosCloseCircleOutline />
//                   </button>
//                   <form onSubmit={createBrand}>
//                     <h2 className="modal_title">
//                       {editBrandId ? "Edit Brand" : "Add Brand"}
//                     </h2>
//                     <input
//                       onChange={(e) => setTitle(e.target.value)}
//                       type="text"
//                       placeholder="Title"
//                       value={title}
//                       required
//                       minLength={3}
//                     />
//                     {existingImageSrc && (
//                             <div className="existing-image">
//                                 <p>Existing Image:</p>
//                                 <img 
//                                     src={`https://realauto.limsa.uz/api/uploads/images/${existingImageSrc}`} 
//                                     alt="Existing Category" 
//                                     style={{ width: '100px', height: 'auto' }} 
//                                 />
//                             </div>
//                         )}
//                     <input
//                       required
//                       type="file"
//                       accept="image/*"
//                       onChange={(e) => setImages(e.target.files[0])}
//                     />
//                     <button type="submit" disabled={loading}>
//                       {loading ? "Loading..." : editBrandId ? "Update" : "Submit"}
//                     </button>
//                   </form>
//                 </div>
//               </div>
//     </div>
//   )
// }

// export default BrandModal
import { IoIosCloseCircleOutline } from 'react-icons/io'

const BrandModal = ({ setOpen, createBrand, setTitle, editBrandId, setImages, title, loading, existingImageSrc, setExistingImageSrc }) => {

    const resetForm = () => {
        setTitle("");
        setImages(null);
        setExistingImageSrc(null); 
    };

    // Handling form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // If no new image is uploaded, keep the existing image
        if ( existingImageSrc) {
            setImages(existingImageSrc);  // Use the existing image
        }
        createBrand(e);
    }

    return (
        <div>
            <div className="modal_overlay">
                <div className="modal_content">
                    <button
                        className="modal_close"
                        onClick={() => { setOpen(false); resetForm(); }}
                    >
                        <IoIosCloseCircleOutline />
                    </button>
                    <form onSubmit={handleSubmit}>
                        <h2 className="modal_title">
                            {editBrandId ? "Edit Brand" : "Add Brand"}
                        </h2>
                        <input
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                            placeholder="Title"
                            value={title}
                            required
                            minLength={3}
                        />
                        {existingImageSrc && (
                            <div className="existing-image">
                                <p>Existing Image:</p>
                                <img 
                                    src={`https://realauto.limsa.uz/api/uploads/images/${existingImageSrc}`} 
                                    alt="Existing Category" 
                                    style={{ width: '100px', height: 'auto' }} 
                                />
                            </div>
                        )}
                        <input
                            required={!existingImageSrc}
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
    );
}

export default BrandModal;
