// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Header = () => {
//   const navigate = useNavigate();
//   const [category, setCategory] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [name_en, setName_en] = useState('');
//   const [name_ru, setName_ru] = useState('');
//   const [img, setImg] = useState(null);
//   const [loading, setLoading] = useState(false); 
//   const token = localStorage.getItem("tokenxon");
  
//   const formdata = new FormData();
//   formdata.append("name_en", name_en);
//   formdata.append("name_ru", name_ru);
//   formdata.append("images", img);

//   const logout = () => {
//     localStorage.removeItem("tokenxon");
//     navigate("/");
//   };

//   const getCategory = () => {
//     fetch("https://realauto.limsa.uz/api/categories")
//       .then((res) => res.json())
//       .then((element) => setCategory(element?.data || []));
//   };

//   useEffect(() => {
//     getCategory();
//   }, []);

//   const create = (e) => {
//     e.preventDefault();
//     setLoading(true); 

//     fetch("https://realauto.limsa.uz/api/categories", {
//       method: "POST",
//       headers: {
//         "Authorization": `Bearer ${token}`,
//       },
//       body: formdata,
//     })
//       .then((res) => res.json())
//       .then((elem) => {
//         if (elem.success) {
//           setOpen(false);
//           getCategory();
//           setName_en('');
//           setName_ru('');
//           setImg(null);
//         }
//       })
//       .catch((error) => {
//         console.error("Xatolik yuz berdi:", error);
//       })
//       .finally(() => {
//         setLoading(false); 
//       });
//   };

//   return (
//     <>
//     <header>
//       <div className="header">
//        <nav>
//         <div className="nav">
//           <div className="container">
//               <ul className="nav_list">
//                <li className="nav_item">
//                <button onClick={logout}>Logout</button>
//                </li>
//                <li className="nav_item">
//                <button onClick={() => setOpen(true)}>Open Modal</button>
//                </li>
//               </ul>
//           </div>
//         </div>
//        </nav>
//        <div className="container">
//          <div className="header_box">
//           <ul className="header_list">
//             <li className="header_item">Name_en</li>
//             <li className="header_item center">Name_ru</li>
//             <li className="header_item">Images</li>
//           </ul>
//           {open && (
//         <div className="modal">
//           <for onSubmit={create}>
//             <input onChange={(e) => setName_en(e.target.value)} type="text" placeholder="Name (EN)" value={name_en} required minLength={3}/>
//             <input onChange={(e) => setName_ru(e.target.value)} type="text" placeholder="Name (RU)" value={name_ru} required minLength={3}/>
//             <input type="file" accept="image/*" required onChange={(e) => setImg(e.target.files[0])}/>
//             <button type="submit" disabled={loading}>Submit</button>
//           </for>
//           {loading && <div>Loading...</div>}
//         </div>
//       )}
//              {category?.map((item) => (
//   <section className="category_section" key={item.id}>
//     <h3 className="category_name">{item?.name_en}</h3>
//     <h4 className="category_name">{item?.name_ru}</h4>
//     <div className="category_img">   
//        <img src={`https://realauto.limsa.uz/api/uploads/images/${item?.image_src}`} alt={`Image for ${item?.name_en}`} />
//     </div>
//   </section>
// ))}
//          </div>
//        </div>


//       </div>
//     </header>
//     </>
//   );
// };

// export default Header;

import { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [open, setOpen] = useState(false);
  const [name_en, setName_en] = useState('');
  const [name_ru, setName_ru] = useState('');
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("tokenxon");

  const formdata = new FormData();
  formdata.append("name_en", name_en);
  formdata.append("name_ru", name_ru);
  formdata.append("images", img);

  const logout = () => {
    localStorage.removeItem("tokenxon");
    navigate("/");
  };

  const getCategory = () => {
    fetch("https://realauto.limsa.uz/api/categories")
      .then((res) => res.json())
      .then((element) => setCategory(element?.data || []));
  };

  useEffect(() => {
    getCategory();
  }, []);

  const create = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch("https://realauto.limsa.uz/api/categories", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
      body: formdata,
    })
      .then((res) => res.json())
      .then((elem) => {
        if (elem.success) {
          setOpen(false);
          getCategory();
          setName_en('');
          setName_ru('');
          setImg(null);
        }
      })
      .catch((error) => {
        console.error("Xatolik yuz berdi:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <header>
        <div className="header">
          <nav>
            <div className="nav">
              <div className="container">
                <ul className="nav_list">
                  <li className="nav_item">
                    <button onClick={logout}>Logout</button>
                  </li>
                  <li className="nav_item">
                    <button onClick={() => setOpen(true)}>Open Modal</button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="container">
            <div className="header_box">
              <ul className="header_list">
                <li className="header_item">
                  <p>Name_en</p>
                </li>
                <li className="header_item"><p>Name_ru</p></li>
                <li className="header_item"><p>Images</p></li>
              </ul>
              {open && (
                <div className="modal_overlay">
                  <div className="modal_content">
                  <button className="modal_close" onClick={()=>setOpen(false)}><IoIosCloseCircleOutline/></button>
                    <form onSubmit={create}>
                      <h2 className="modal_title">Add Category</h2>
                      <input
                        onChange={(e) => setName_en(e.target.value)}
                        type="text"
                        placeholder="Name (EN)"
                        value={name_en}
                        required
                        minLength={3}
                      />
                      <input
                        onChange={(e) => setName_ru(e.target.value)}
                        type="text"
                        placeholder="Name (RU)"
                        value={name_ru}
                        required
                        minLength={3}
                      />
                      <input
                        type="file"
                        accept="image/*"
                        required
                        onChange={(e) => setImg(e.target.files[0])}
                      />
                      <button type="submit" disabled={loading}>
                        {loading ? "Loading..." : "Submit"}
                      </button>
                    </form>
                  </div>
                </div>
              )}
              <div className="category_container">
                {category?.map((item) => (
                  <section className="category_section" key={item.id}>
                    <div className="category_name">{item?.name_en}</div>
                    <div className="category_name">{item?.name_ru}</div>
                    <div className="category_img">
                      <img
                        src={`https://realauto.limsa.uz/api/uploads/images/${item?.image_src}`}
                        alt={`Image for ${item?.name_en}`}
                      />
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
