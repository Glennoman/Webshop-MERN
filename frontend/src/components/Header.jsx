import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import Navbar from "./Navbar";
import { MdClose, MdMenu } from "react-icons/md";
import { FaBasketShopping } from "react-icons/fa6";

const header = ({ setShowLogin }) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);

  return (
    <header className="fixed right-0 left-0 mx-auto z-10">
      <div className="max-padd-container bg-white">
        <div className="flexBetween py-4 max-xs:px-2 w-full">
          <div className="flexCenter gap-x-10">
            {/* Logo */}
            <Link to="/" className="bold-24">
              <img src={logo} alt="logoImg" className="" />
            </Link>
            {/* Navbar desktop */}
            <Navbar containerStyLes={"hidden md:flex gap-x-5 medium-15"} />
            {/* Navbar Mobile */}
            <Navbar
              containerStyLes={`${
                menuOpened
                  ? "flex items-start flex-col gap-y-10 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
                  : "flex items-start flex-col gap-y-10 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"
              }`}
            />
          </div>
          {/* buttons */}
          <div className="flexCenter gap-x-6 ">
            {!menuOpened ? (
              <MdMenu
                onClick={toggleMenu}
                className="md:hidden cursor-pointer hover:text-secondary text-2xl"
              />
            ) : (
              <MdClose
                onClick={toggleMenu}
                className="md:hidden cursor-pointer hover:text-secondary text-2xl"
              />
            )}
            <div className="flexBetween gap-x-2 sm:gap-x-5">
              <Link className="flex">
                <FaBasketShopping className="text-[22px]">
                  <span className="relative flexCenter w-2 h-2 rounded-full bg-secondary text-white medium-14 -top-1"></span>
                </FaBasketShopping>
              </Link>
              <button
                onClick={() => setShowLogin(true)}
                className="btn-outline rounded-full"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
