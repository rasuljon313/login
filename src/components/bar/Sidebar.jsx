import { useLocation } from 'react-router-dom'; // React Router'dan useLocation import qilish

const Sidebar = () => {
  const location = useLocation(); 

  // Sidebar elementlari
  const sidebarItems = [
    { name: "Home", path: "/home" },
    { name: "Brand", path: "/brand" },
    { name: "Location", path: "/location" },
    { name: "City", path: "/city" },
    { name: "Cars", path: "/car" },
    { name: "Models", path: "/model" },
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

