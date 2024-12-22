import { IoIosCloseCircleOutline } from "react-icons/io";

/* eslint-disable react/prop-types */
const CModal = ({setOpenC, saveBrand}) => {
    const a = ()=> {
        console.log("ishladi");
        setOpenC(false)
    }
  return (
    <div>
   {/* <form onSubmit={a} >
     <input type="text" placeholder="color" />
       <button type='subit' >wefwcrfe</button>
   </form> */}
    <div className="modal_overlay">
           <div className="modal_content">
             <button className="modal_close" onClick={() => a}>
               <IoIosCloseCircleOutline />
             </button>
             <form onSubmit={a}>
               <h2 className="modal_title">
                 {"Add Model"}
               </h2>
               <input
                 required
                //  onChange={(e) => setName(e.target.value)}
                 type="text"
                 placeholder="Enter car color"
                //  value={name}
               />
               <select name="chose" aria-label="Choose a brand"  required>
                 <option value="" disabled>
                   Select a brand
                 </option>
                 {saveBrand?.map((item) => (
                   <option key={item.id} value={item.id}>
                     {item.title}
                   </option>
                 ))}
               </select>
               <button type='subit' >wefwcrfe</button>
             </form>
           </div>
         </div>

    </div>
  )
}

export default CModal