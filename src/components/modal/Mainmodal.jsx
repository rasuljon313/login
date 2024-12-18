import { IoIosCloseCircleOutline } from "react-icons/io";

/* eslint-disable react/prop-types */
const Mainmodal = ({setOpen, catigory, name, nameRu, setName, setNameRu, setImg, edit, loading, resetForm, existingImageSrc  
}) => {
    
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            setOpen(false);  
            resetForm();    
        }
    };

    return (
        <div>
            <div className="modal_overlay" onClick={handleOverlayClick}>
                <div className="modal_content">
                    <button className="modal_close" onClick={() => { setOpen(false); resetForm(); }}>
                        <IoIosCloseCircleOutline />
                    </button>
                    <form onSubmit={catigory}>
                        <h2 className="modal_title">
                            {edit ? "Edit Category" : "Add Category"}
                        </h2>
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

        <input onChange={(e) => setName(e.target.value)} type="text" placeholder={`Name (EN)`} value={name} required  minLength={3} />
        <input onChange={(e) => setNameRu(e.target.value)} type="text" placeholder={`Name (RU)`} value={nameRu} required minLength={3} />
        <input type="file" accept="image/*" onChange={(e) => setImg(e.target.files[0])} />
        <button type="submit" disabled={loading}> {loading ? "Loading..." : edit ? "Update" : "Submit"} </button>           
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Mainmodal;


// import { IoIosCloseCircleOutline } from "react-icons/io";

// /* eslint-disable react/prop-types */
// const Mainmodal = ({
//     setOpen,
//     category, // for category related data
//     createOrEditLocation, // for location related data
//     Hname, Lname, HnameRu, lnameText, HsetName, lsetName, HsetNameRu, lsetText,
//     setImg, Hedit, loading, resetForm, existingImageSrc, isLocation // New prop to distinguish between category or location
// }) => {

//     // Close modal and reset form on overlay click
//     const handleOverlayClick = (e) => {
//         if (e.target === e.currentTarget) {
//             setOpen(false);
//             resetForm();
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (category) {
//             // Handle category creation or edit
//             category();
//         } else if (createOrEditLocation) {
//             // Handle location creation or edit
//             createOrEditLocation();
//         }
//     };

//     return (
//         <div>
//             <div className="modal_overlay" onClick={handleOverlayClick}>
//                 <div className="modal_content">
//                     <button className="modal_close" onClick={() => { setOpen(false); resetForm(); }}>
//                         <IoIosCloseCircleOutline />
//                     </button>
//                     <form onSubmit={handleSubmit}>
//                         <h2 className="modal_title">
//                             {Hedit ? (isLocation ? "Edit Location" : "Edit Category") : (isLocation ? "Add Location" : "Add Category")}
//                         </h2>
                        
//                         {existingImageSrc && (
//                             <div className="existing-image">
//                                 <p>Existing Image:</p>
//                                 <img 
//                                     src={`https://realauto.limsa.uz/api/uploads/images/${existingImageSrc}`} 
//                                     alt="Existing" 
//                                     style={{ width: '100px', height: 'auto' }} 
//                                 />
//                             </div>
//                         )}

//                         {/* Conditionally render fields based on category or location */}
//                         <input 
//                             onChange={(e) => {
//                                 isLocation ? lsetName(e.target.value) : HsetName(e.target.value);
//                             }} 
//                             type="text" 
//                             placeholder="Name (EN)" 
//                             value={isLocation ? Lname : Hname} 
//                             required 
//                             minLength={3} 
//                         />
                        
//                         <input 
//                             onChange={(e) => {
//                                 isLocation ? lsetText(e.target.value) : HsetNameRu(e.target.value);
//                             }} 
//                             type="text" 
//                             placeholder="Name (RU)" 
//                             value={isLocation ? lnameText : HnameRu} 
//                             required 
//                             minLength={3} 
//                         />
                        
//                         <input 
//                             type="file" 
//                             accept="image/*" 
//                             onChange={(e) => setImg(e.target.files[0])} 
//                         />
                        
//                         <button type="submit" disabled={loading}>
//                             {loading ? "Loading..." : Hedit ? (isLocation ? "Update Location" : "Update Category") : (isLocation ? "Submit Location" : "Submit Category")}
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Mainmodal;
