import React from "react";
import ContactList from "./components/ContactList";
import { ContactData } from "./components/Data/ContactData";

export const App: React.FC = () => {
  const contact = ContactData;

  return (
    <>
      <div className="container">
        <h1>Contact List</h1>
        <ContactList contacts={contact} />{" "}
      </div>
    </>
  );
};
