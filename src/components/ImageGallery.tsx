"use client";
import { Gallery } from "next-gallery";
import React from "react";

const images = [
  { src: "/sagar_kind_version.jpeg", aspect_ratio: 16 / 16 },
  { src: "/old_handsome_sagar.jpeg", aspect_ratio: 20 / 24 },
  { src: "/sporty_vibe_sagar.jpeg", aspect_ratio: 12 / 10 },
];
const widths = [500, 1000];
const ratios = [1, 3];

export const LokeshGallery = ({ galleryImages = [] }: any) => {
  return (
    <div style={{ height: "100%", width: "70vw" }}>
      <Gallery
        {...{
          images:
            galleryImages && galleryImages?.length > 0
              ? [...galleryImages]
              : [...images],
          widths,
          ratios,
        }}
      />
    </div>
  );
};
