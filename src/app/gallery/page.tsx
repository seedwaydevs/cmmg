import PhotoGallery from "@/components/gallery/Gallery";
import { Metadata } from "next";
import React from "react";

type Props = {};
export const metadata: Metadata = {
  title: `Gallery`,
  description: "See what we've been up to.",
};
const page = (props: Props) => {
  return (
    <div>
      <PhotoGallery />
    </div>
  );
};

export default page;
