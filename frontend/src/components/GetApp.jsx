import React from "react";
import appStore from "../assets/apple.svg";
import playStore from "../assets/android.svg";
import phones from "../assets/phones.png";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col" id="app">
      <div className="mx-auto max-w-full relative flex w-full flex-col justify-evenly overflow-hidden px-6 py-12 sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-auto 2xl:rounded-5xl bg-gray-200">
        <div className="flex w-full flex-1 flex-col items-start justify-center gap-4 xl:max-w-[555px]">
          <h2 className="bold-40 lg:bold-64">Get our app now!</h2>
          <h4 className="uppercase medium-16 text-secondary">
            Available for iOS and Android
          </h4>
          <p className="py-4">Dummy text to be filled later on the project</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <button className="flexCenter gap-x-3 btn-dark rounded-full !px-12 !py-4">
              <img src={appStore} alt="" />
              App Store
            </button>
            <button className="flexCenter gap-x-3 btn-secondary rounded-full !px-12 !py-4">
              <img src={playStore} alt="" />
              Play Store
            </button>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <img src={phones} alt="phonesImg" width={550} height={870} />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
