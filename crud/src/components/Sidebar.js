import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <ul className="">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/">Categories</Link>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
