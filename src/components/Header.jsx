import React from "react";
import { Logo, Menu, headerlogo } from "@/assets";
import Image from "next/image";
import "../styles/header.css";
import { NAVBAR_ICONS, NAVBAR_LINKS } from "../constants";

const Header = () => {
  return (
    <header className="header">
      <div className="top_navbar">
        <div>
          <Image
            src={headerlogo}
            alt="lorem"
            title="lorem"
            className="header_svg"
            width={16}
            height={16}
          />
          <span className="text">Lorem ipsum dolor</span>
        </div>
      </div>
      <div className="container center_navbar">
        <div className="left">
          <Image src={Menu} alt={"Menu"} title={"Menu"} className="menu_icon" />
          <Image src={Logo} alt={"Logo"} title={"Logo"} className="Logo" />
        </div>
        <div className="navbar_heading">
          <p>Logo</p>
        </div>
        <ul className="navbar_icons">
          {NAVBAR_ICONS.map(({ icon, alt }, index) => (
            <li key={index} id={alt}>
              <Image src={icon} width={24} height={24} alt={alt} title={alt} />
            </li>
          ))}
          <li className="language">
            <select name="language" id="language">
              <option value="eng">ENG</option>
              <option value="in">IN</option>
            </select>
          </li>
        </ul>
      </div>
      <div className="bottom_navbar">
        <ul className="navbar_links">
          {NAVBAR_LINKS.map((link, index) => (
            <li key={index}>{link.label}</li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
