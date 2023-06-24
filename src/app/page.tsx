// "use client";
import styles from "./page.module.css";
import { LokeshGallery } from "@/components/ImageGallery";
import classNames from "classnames";
// import { useEffect, useState } from "react";
import Image from "next/image";
// import { isMobile, MobileView, BrowserView } from "react-device-detect";

function checkBirthday() {
  // Get the current date
  const currentDate = new Date();

  // Set the target birthday date and month
  const targetDate = 24; // The day of the birthday
  const targetMonth = 5; // January is 0, February is 1, and so on (June is 5)

  // Check if the current date matches the target birthday
  if (
    currentDate.getDate() === targetDate &&
    currentDate.getMonth() === targetMonth
  ) {
    // Return true if it's the birthday
    return true;
  }

  // Return false if it's not the birthday
  return false;
}

// const images = [
//   { src: "/cool_and_handsome_sagar_on_glasses.jpeg", aspect_ratio: 1 / 1 },
//   { src: "/crazy_sagar_stands_on_street.jpeg", aspect_ratio: 7 / 6 },
//   { src: "/cricket_vibey_sagar.jpeg", aspect_ratio: 1 / 1 },
//   { src: "/decent_laptop_sagar.jpeg", aspect_ratio: 1 / 1 },
//   { src: "/greenery_view_sagar_mobile_pose.jpeg", aspect_ratio: 1 / 1 },
// ];

// const images1 = [
//   { src: "/mountain_view_superish_sagar.jpeg", aspect_ratio: 1 / 1 },
//   {
//     src: "/night_landscape_hero_look_sagar.jpeg",
//     aspect_ratio: 1 / 1,
//   },
//   { src: "/office_view_sagar_laptop.jpeg", aspect_ratio: 1 / 1 },
// ];

const images = [
  { src: "/greenery_view_sagar_mobile_pose.jpeg", aspect_ratio: 0.85 },
  { src: "/cool_and_handsome_sagar_on_glasses.jpeg", aspect_ratio: 1.5 },
  { src: "/cricket_vibey_sagar.jpeg", aspect_ratio: 1.25 },
  { src: "/decent_laptop_sagar.jpeg", aspect_ratio: 1.5 },
  { src: "/crazy_sagar_stands_on_street.jpeg", aspect_ratio: 0.5 },
  {src: "/river_view_sagar_simple.jpeg", aspect_ratio: 0.7}
];


const images1 = [
  { src: "/mountain_view_superish_sagar.jpeg", aspect_ratio: 1 },
  { src: "/stair_view_sagar_idle.jpeg", aspect_ratio: 1.25 },
  { src: "/transformer_view_sagar_stylish.jpeg", aspect_ratio: 0.75 },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={classNames(styles.description)}>
        <p className={"font-mono text-2xl sm:text-xl shadow-violet-500/50 shadow-lg"}>
          Sagar Abbathi&nbsp;
          <span
            className={classNames(
              "font-mono text-2xl sm:text-xl font-extrabold",
              styles.code
            )}
          >
            is Passionate Upcoming Director, Photographer and Choreography.
          </span>
        </p>
      </div>

      <div className="w-full mt-1 h-[35rem] z-0 relative">
        {checkBirthday() === true ? (
          <div className="absolute bottom-0 z-20 bg-blue-800 shadow-cyan-500/50 shadow-lg border-r-4 border-l-4 border-b-4 border-t-2 bg-cover hover:scale-[1.2] hover:transition-all hover:duration-75 hover:ease-linear">
            <div className="w-full flex justify-center items-center backdrop-brightness-50">
              <h3 className={classNames(styles.code, "p-4")}>
                Happy birthday, Sagar Abbathi! 🥳🥳🥳 May your directorial,
                photographic, and choreographic endeavors continue to shine with
                brilliance and inspire others. Wishing you a year filled with
                boundless creativity, success, and joy!
              </h3>
            </div>
          </div>
        ) : null}
        <Image
          src={"/night_landscape_hero_look_sagar.jpeg"}
          fill={true}
          alt="hero_sagar"
          style={{ objectFit: "contain", zIndex: "-1" }}
          loading="lazy"
        />
      </div>

      <div>
        <h2 className="text-5xl sm:text-2xl font-extrabold font-mono mt-10 mb-10 animate-glow">
          🫴🫴🫴🫴Helping Hands 🫡🫡🫡🫡
        </h2>

        <div
          className={classNames(
            styles.center,
            "border-4 shadow-red-700 shadow-lg hover:scale-[1.03] hover:transition-all hover:duration-75 hover:ease-linear"
          )}
        >
          <LokeshGallery />
        </div>

        <h2 className="text-5xl md:text-2xl font-extrabold font-mono mt-10 mb-10 animate-glow">
          🫴🫴🫴🫴😎 Stylish and Handsome Vibes
        </h2>
        <div
          className={classNames(
            styles.center,
            "border-4 mt-5 shadow-green-700 shadow-lg hover:scale-[1.01] hover:transition-all hover:duration-75 hover:ease-linear"
          )}
        >
          <LokeshGallery galleryImages={images1} />
        </div>

        <h2 className="text-5xl md:text-2xl font-extrabold font-mono mt-10 mb-10 animate-glow">
          🫴🫴🫴🫴😎 Stylish and Handsome Vibes
        </h2>

        <div
          className={classNames(
            styles.center,
            "border-4 mt-5 shadow-yellow-500 shadow-lg hover:scale-[1.03] hover:transition-all hover:duration-75 hover:ease-linear"
          )}
        >
          <LokeshGallery galleryImages={images} />
        </div>
      </div>
    </main>
  );
}
