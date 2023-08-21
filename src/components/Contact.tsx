import React from "react";

const Contact: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="contact-container">
          <h2>Contact us</h2>
          <p>If you have any Questions or feedback, feel free to contact us:</p>
          <ul className="contact-details">
            <li>
                Email: johndoe@gmail.com
            </li>
            <li>
                Phone: 123-456-7890
            </li>
            <li>
                Address: <i>
                    1234 Elm street, City, Country
                </i>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contact;
