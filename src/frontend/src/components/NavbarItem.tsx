// VerticalNavbarItem.tsx
import React from "react";
import { Link } from "react-router-dom";

interface VerticalNavbarItemProps {
  label: string;
  to: string;
  onClick: () => void;
}

const VerticalNavbarItem: React.FC<VerticalNavbarItemProps> = ({
  label,
  to,
  onClick,
}) => {
  return (
    <li style={styles.navItem}>
      <Link to={to} style={styles.link} onClick={onClick}>
        {label}
      </Link>
    </li>
  );
};

const styles = {
  navItem: {
    listStyle: "none",
    margin: "10px 0",
  },
  link: {
    textDecoration: "none",
    color: "#333",
    padding: "10px 15px",
    borderRadius: "5px",
    display: "block",
    transition: "background 0.3s",
  },
};

export default VerticalNavbarItem;
