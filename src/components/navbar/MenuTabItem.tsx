import {Link} from "react-router-dom";
import {ReactNode} from "react";
import navbarItem from "./NavbarItem";

interface MenuItemProps {
  children: ReactNode;
  href: string;
  isActive?: boolean;
}

const MenuTabItem = ({children, href, isActive = false}: MenuItemProps) => {
  return (
    <div className={`menu-tab-item ${isActive ? "active" : ""}`}>
      <Link to={href}>
        {children}
      </Link>
    </div>
  )
}

export default MenuTabItem