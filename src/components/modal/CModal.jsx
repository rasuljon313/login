// import { IoIosCloseCircleOutline } from "react-icons/io";

// /* eslint-disable react/prop-types */
// const CarModal = ({ setOpen, loading, categoryBrand, createOrEditCategory, setSelectbrand, name, setName, selectBrand, editID }) => {
//   const close = () => {
//     setOpen(false);
//     setName("");
//     setSelectbrand(null); 
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     createOrEditCategory();
//     setName(""); 
//     setSelectbrand(null);  
//   };

//   return (
//     <div>
//       <div className="modal_overlay">
//         <div className="modal_content">
//           <button className="modal_close" onClick={() => close()}>
//             <IoIosCloseCircleOutline />
//           </button>
//           <form onSubmit={handleSubmit}>
//             <h2 className="modal_title">
//               {editID ? "Edit Model" : "Add Model"}
//             </h2>
//             <input
//               required
//               onChange={(e) => setName(e.target.value)}
//               type="text"
//               placeholder="Enter model name"
//               value={name}
//             />
//             <select onChange={(e) => setSelectbrand(e.target.value)}  name="chose" aria-label="Choose a brand" value={selectBrand || ""}  required>
//               <option value="" disabled>
//                 Select a brand
//               </option>
//               {categoryBrand?.map((item) => (
//                 <option key={item.id} value={item.id}>
//                   {item.title}
//                 </option>
//               ))}
//             </select>
//             <button type="submit" disabled={loading}>
//               {loading ? "Loading..." : editID ? "Update" : "Submit"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default CarModal;