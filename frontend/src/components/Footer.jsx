import React from "react";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer id="contact" className="max-padd-container-footer py-8">
      <div className="flexCenter flex-col gap-y-4">
        <h4 className="text-primary">Follow us on Social Media</h4>
        <SocialIcons />
        <hr className="h-[1px] w-1/5 my-3" />
        <div className="text-primary">
          Copyright &copy; Ecommerce | All Rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
