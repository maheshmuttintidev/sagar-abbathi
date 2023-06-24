"use client";
import { Gallery } from "next-gallery";
import React from "react";

const images = [
  { src: "/lokesh_light_and_pure_white_portait.jpg", aspect_ratio: 20 / 24 },
  { src: "/lokesh_lion_sit_on_chair.jpg", aspect_ratio: 12 / 10 },
  { src: "/lokesh_stylish_with_camera.jpg", aspect_ratio: 16 / 16 },
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
