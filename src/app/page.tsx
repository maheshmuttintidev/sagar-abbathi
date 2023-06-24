import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import celebrateDance from "../../public/celebration_on_birthday.jpg";

import { LokeshGallery } from "@/components/ImageGallery";
import classNames from "classnames";

const inter = Inter({ subsets: ["latin"] });

const images = [
  { src: "/lokesh_stylish_theme_picture_shiny_dark.jpg", aspect_ratio: 1 / 1 },
  { src: "/lokesh_stylish_look_in_jeans_shirt.jpg", aspect_ratio: 7 / 6 },
  { src: "/lokesh_standing_style_with_car.jpg", aspect_ratio: 1 / 1 },
  { src: "/lokesh_standing_style_in_forest_tree.jpg", aspect_ratio: 1 / 1 },
  { src: "/lokesh_standing_style_in_ceremony_chair.jpg", aspect_ratio: 1 / 1 },
];

const images1 = [
  { src: "/lokesh_standing_moon_style.jpg", aspect_ratio: 1 / 1 },
  {
    src: "/lokesh_sit_on_stairs_with_great_saturation.jpg",
    aspect_ratio: 1 / 1,
  },
  { src: "/lokesh_sit_on_ceremony_stage.jpg", aspect_ratio: 1 / 1 },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={classNames(styles.description)}>
        <p className={"font-mono text-2xl shadow-violet-500/50 shadow-lg"}>
          Lokesh Doppasani&nbsp;
          <span
            className={classNames(
              "font-mono text-2xl font-extrabold",
              styles.code
            )}
          >
            is Very Enthusiastic and Passionate Photographer.
          </span>
        </p>
      </div>

      <div className="fixed top-40 mt-10 bg-blue-800 shadow-cyan-500/50 shadow-lg border-r-4 border-l-4 border-b-4 border-t-2 z-20 bg-[url('/celebration_on_birthday.jpg')] bg-cover hover:scale-[1.2] hover:transition-all hover:duration-75 hover:ease-linear">
        <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50">
          <h3 className={classNames(styles.code, "p-4")}>
            7th June 2023 Came - Wish You a Happy Birth Day. May God bless you
            and protect you with Abundant Love and Grace.
          </h3>
        </div>
      </div>

      <div
        className={classNames(
          styles.center,
          "border-4 mt-24 shadow-red-700 shadow-lg hover:scale-[1.03] hover:transition-all hover:duration-75 hover:ease-linear"
        )}
      >
        <LokeshGallery />
      </div>

      <div
        className={classNames(
          styles.center,
          "border-4 mt-5 shadow-green-700 shadow-lg hover:scale-[1.03] hover:transition-all hover:duration-75 hover:ease-linear"
        )}
      >
        <LokeshGallery galleryImages={images1} />
      </div>

      <div
        className={classNames(
          styles.center,
          "border-4 mt-5 shadow-yellow-500 shadow-lg hover:scale-[1.03] hover:transition-all hover:duration-75 hover:ease-linear"
        )}
      >
        <LokeshGallery galleryImages={images} />
      </div>
    </main>
  );
}
