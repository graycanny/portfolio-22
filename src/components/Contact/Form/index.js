import React, { useState } from "react";
import style from "./Form.module.css";
import { send } from "emailjs-com";

const serviceID = "service_cubyzad";
const userID = "P4-qgoF8j-tUzPrJF";
const templateID = "template_nsjmi9j";

function Form() {
  const [toSend, setToSend] = useState({
    from_Fname: "",
    from_Lname: "",
    message: "",
    email: "",
  });
  //! ON SUBMIT
  const onSubmit = (e) => {
    e.preventDefault();
    send(`${serviceID}`, `${templateID}`, toSend, `${userID}`)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };
  //! ON CHANGE
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className={style.container}>
      <form action="" className={style.form} onSubmit={onSubmit}>
        <div className={style.firstNameCont}>
          <label for="firstName">First Name</label>
          <input
            type="text"
            name="from_Fname"
            className={style.firstName}
            tabIndex="1"
            onChange={handleChange}
            value={toSend.from_Fname}
          />
        </div>
        <div className={style.lastNameCont}>
          <label for="lastName">Last Name</label>
          <input
            type="text"
            name="from_Lname"
            className={style.lastName}
            tabIndex="2"
            onChange={handleChange}
            value={toSend.from_Lname}
          />
        </div>

        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          className={style.email}
          placeholder="name@newemployer.co.uk"
          tabIndex="3"
          value={toSend.email}
          onChange={handleChange}
        />
        <label for="message">Message</label>
        <textarea
          placeholder="Let's start something..."
          className={style.message}
          name="message"
          value={toSend.message}
          onChange={handleChange}
        />
        <button type="submit" className={style.send}>
          CONTACT
        </button>
      </form>
    </div>
  );
}

export default Form;
