import React from "react";

export default function Nav() {
  return (
    <nav className="navigation">
      <div><img src="/assets/shared/desktop/logo.svg" alt="logo" /></div>

      <div className="nav-links">
        <a href="/">Home</a>

        <a href="/headphones">Headphones</a>

        <a href="/speakers">Speakers</a>

        <a href="/earphones">Earphones</a>
      </div>

     <div><img src="/assets/shared/desktop/icon-cart.svg" alt="cart icon" /></div> 
    </nav>
  );
}
