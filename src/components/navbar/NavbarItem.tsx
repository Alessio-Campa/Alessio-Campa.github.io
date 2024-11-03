import {ReactNode} from "react";
import {Link} from "react-router-dom";

interface NavbarItemProps {
  children: ReactNode;
  href: string;
  isActive?: boolean;
}

const NavbarItem = ({children, href, isActive = false}: NavbarItemProps) => {
  return (
    <Link to={href} className={`navbar-item ${isActive ? "active" : ""}`}>
      {children}
    </Link>
  )
}

export default NavbarItem

