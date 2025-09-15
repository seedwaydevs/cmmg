import { Metadata } from "next";
import ContactContent from "./_component/ContactContent";

export const metadata: Metadata = {
  title: `Contact`,
  description: "Contact Us. We are ready to listen.",
};

const ContactPage = () => {
  return <ContactContent />;
};

export default ContactPage;
