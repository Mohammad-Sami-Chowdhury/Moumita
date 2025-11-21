import React, { useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "react-sticky-header/styles.css";
import MobileMenu from "../../components/MobileMenu";
import "./style.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Couple", href: "#couple" },
  { label: "Story", href: "#story" },
  { label: "Gallery", href: "#gallery" },
];

const Header = () => {
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRef = useRef(null);

  const handleHover = (e) => {
    const navRect = navRef.current.getBoundingClientRect();
    const linkRect = e.target.getBoundingClientRect();
    setIndicatorStyle({
      left: linkRect.left - navRect.left + "px",
      width: linkRect.width + "px",
      opacity: 1,
    });
  };

  const handleLeave = () => {
    setIndicatorStyle({ opacity: 0 });
  };

  return (
    <div className="Header_root">
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="logo">
                <h2>
                  <a href="/home">Evan & Moumita</a>
                </h2>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="header-menu d-lg-block d-none">
                <ul
                  className="mobail-menu d-flex"
                  ref={navRef}
                  style={{ position: "relative" }}
                >
                  {/* Animated indicator */}
                  <span className="nav-indicator" style={indicatorStyle} />
                  {navLinks.map((item) => (
                    <li key={item.href}>
                      <AnchorLink
                        href={item.href}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleLeave}
                      >
                        {item.label}
                      </AnchorLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-12">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
