import React from "react";
import { CiMail } from "react-icons/ci";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

const ContactBody = () => {
  return (
    <div className="flex lg:gap-20 gap-y-20 gap-5 md:flex-row flex-col">
      <ContactDetails />
      <ContactForm />
    </div>
  );
};

export default ContactBody;
