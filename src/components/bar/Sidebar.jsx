import { Link } from 'react-router-dom';
import { TbBrandBeats, TbCategory } from 'react-icons/tb';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="container">
        <ul className="sidebar_list">
          <Link to="/home"> 
            <li className='sidebar_item'>
              <TbCategory className='sidebar_item_link' />Category
            </li>
          </Link>
          <Link to="/brand"> 
            <li className='sidebar_item'>
              <TbBrandBeats className='sidebar_item_link' />Brands
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

