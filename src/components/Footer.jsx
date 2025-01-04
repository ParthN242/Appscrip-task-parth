import React from "react";
import "../styles/footer.css";
import Image from "next/image";
import { Flag, Linkedin, Instagram, ArrowDown } from "@/assets";
import {
  FOOTER_LEFT_LINKS,
  FOOTER_QUICK_LINKS,
  PAYMENT_ICONS,
} from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_top">
        <div className="footer_top_left">
          <div className="footer_top_left_title_text">
            <h5 className="footer_title">Be the first to know</h5>
            <p className="footer_text">Sign up for updates from mettā muse.</p>
          </div>
          <div className="footer_top_left_input_form">
            <input
              type="email"
              placeholder="Enter your e-mail..."
              className="footer_top_input"
            />
            <button className="footer_top_submit">SUBSCRIBE</button>
          </div>
        </div>
        <div className="footer_top_right">
          <div className="footer_contact">
            <h5 className="footer_title">CONTACT US</h5>
            <div className="footer_contact_text">
              <p className="footer_text">+44 221 133 5360</p>
              <span className="footer_country_dot"></span>
              <p className="footer_text">customercare@mettamuse.com</p>
            </div>
          </div>
          <div className="footer_currency">
            <h5 className="footer_title">CURRENCY</h5>
            <div className="footer_country">
              <Image
                src={Flag}
                alt="USA Flag"
                title="USA Flag"
                className="footer_country_flag"
              />
              <span className="footer_country_dot"></span>
              <p className="footer_text">USD</p>
            </div>
            <p className="footer_small_text">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="footer_bottom_left">
          <div className="footer_bottom_list_container">
            <div className="footer_title">
              mettā muse{" "}
              <span className="">
                <Image
                  src={ArrowDown}
                  width={20}
                  height={20}
                  alt="Arrow down"
                  title="Arrow down"
                  className="footer_mobile_down_icon"
                />
              </span>
            </div>
            <ul className="footer_list">
              {FOOTER_LEFT_LINKS.map((link) => (
                <li key={link.key}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer_bottom_list_container">
            <div className="footer_title">
              Quick Links{" "}
              <span className="">
                <Image
                  src={ArrowDown}
                  width={20}
                  height={20}
                  alt="Arrow down"
                  title="Arrow down"
                  className="footer_mobile_down_icon"
                />
              </span>
            </div>
            <ul className="footer_list">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.key}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer_bottom_right">
          <div className="footer_bottom_list_container">
            <h5 className="footer_title">
              FOLLOW US{" "}
              <span className="">
                <Image
                  src={ArrowDown}
                  width={20}
                  height={20}
                  alt="Arrow down"
                  title="Arrow down"
                  className="footer_mobile_down_icon"
                />
              </span>
            </h5>
            <div className="footer_social_icons">
              <Image
                src={Instagram}
                width={32}
                height={32}
                alt="Instagram icon"
                title="Instagram icon"
              />
              <Image
                src={Linkedin}
                width={32}
                height={32}
                alt="Linkedin icon"
                title="Linkedin icon"
              />
            </div>
          </div>
          <div className="footer_payment">
            <h5 className="footer_title">mettā muse Accepts </h5>
            <ul className="footer_payment_icons">
              {PAYMENT_ICONS.map(({ icon, label }, index) => (
                <li key={index}>
                  <Image
                    src={icon}
                    width={56}
                    height={35}
                    alt={label}
                    title={label}
                    className="footer_payment_icons_image"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p className="footer_copyright_text">
          Copyright © 2023 mettamuse. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
