import React from "react";
import "./Contact.css";
import Contact, { ContactProps } from "./Contact";

export interface ContactListProps {
  contacts: ContactProps[];
}

const ContactList: React.FC<ContactListProps> = ({ contacts }) => {
  return (
    <>
      <div className="contact-list">
        {contacts.map((contact, index) => {
          return (
            <>
              <Contact
                key={index}
                name={contact.name}
                email={contact.email}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default ContactList;
