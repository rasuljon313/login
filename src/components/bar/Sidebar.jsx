// import { Link } from 'react-router-dom';
// import { TbBrandBeats, TbCategory } from 'react-icons/tb';
// import { IoLocationOutline } from 'react-icons/io5';
// import { PiCityLight } from 'react-icons/pi';

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <div className="container">
//         <ul className="sidebar_list">
//           <Link to="/home"> 
//             <li className='sidebar_item'>
//               <TbCategory className='sidebar_item_link' />Category
//             </li>
//           </Link>
//           <Link to="/brand"> 
//             <li className='sidebar_item'>
//               <TbBrandBeats className='sidebar_item_link' />Brands
//             </li>
//           </Link>
//           <Link to="/location"> 
//             <li className='sidebar_item'>
//               <IoLocationOutline  className='sidebar_item_link' />zLocation
//             </li>
//           </Link>
//           <Link to="/city"> 
//             <li className='sidebar_item'>
//             <PiCityLight  className='sidebar_item_link' />Cities
//             </li>
//           </Link>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;


import { useLocation } from 'react-router-dom'; // React Router'dan useLocation import qilish

const Sidebar = () => {
  const location = useLocation(); // Hoziroq sahifa URL manzilini olish

  // Sidebar elementlari
  const sidebarItems = [
    { name: "Home", path: "/home" },
    { name: "Brand", path: "/brand" },
    { name: "Location", path: "/location" },
    { name: "City", path: "/city" },
  ];

  return (
    <div className="sidebar">
      <ul className="sidebar_list">
        {sidebarItems.map((item) => (
          <li
            key={item.path}
            className={`sidebar_item ${location.pathname === item.path ? 'active' : ''}`}
          >
            <a href={item.path}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;

