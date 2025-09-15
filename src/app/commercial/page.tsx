import { Metadata } from "next";
import CommercialContent from "./_components/CommercialContent";

export const metadata: Metadata = {
  title: `Commercial Music`,
  description: "Our Catalog of commercial music.",
};

const MusicPage = () => {
  return <CommercialContent />;
};

export default MusicPage;
