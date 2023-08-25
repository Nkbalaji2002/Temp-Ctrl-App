import React from "react";

export interface ContactProps {
  name: string;
  email: string;
}

const Contact: React.FC<ContactProps> = ({ name, email }) => {
  return (
    <>
      <div className="contact">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </>
  );
};

export default Contact;
