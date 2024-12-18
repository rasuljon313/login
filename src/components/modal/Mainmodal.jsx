import { IoIosCloseCircleOutline } from "react-icons/io";

/* eslint-disable react/prop-types */
const Mainmodal = ({setOpen, catigory, name, nameRu, setName, setNameRu, setImg, edit, loading, resetForm, existingImageSrc}) => {

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
