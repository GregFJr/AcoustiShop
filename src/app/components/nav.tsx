import React from "react";
import { useState } from "react";
import SideNav from "./sideNav";

interface NavProps {
  onCartClick: () => void;
}

export default function Nav({ onCartClick }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="navigation">
      <div className="logo"><img src="/assets/shared/desktop/logo.svg" alt="logo" /></div>
      
      <div className="hamburger-menu " onClick={toggleSideNav}>
      &#9776;
      </div>

      <SideNav isOpen={isOpen} toggleSideNav={toggleSideNav} />  {/* Pass isOpen and toggleSideNav as props to SideNav */}

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/headphones">Headphones</a>

        <a href="/speakers">Speakers</a>

        <a href="/earphones">Earphones</a>
      </div>

     <div>
      <button onClick={onCartClick}>
        <img src="/assets/shared/desktop/icon-cart.svg" alt="cart icon" />
        </button>
        </div> 
      
    </nav>
  );
}
