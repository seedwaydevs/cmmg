import { Metadata } from "next";
import AboutContent from "./_components/AboutContent";

export const metadata: Metadata = {
  title: `About`,
  description: "Learn more about us at CMMG",
};

const About = () => {
  return (
    <div>
      <AboutContent />
    </div>
  );
};

export default About;
