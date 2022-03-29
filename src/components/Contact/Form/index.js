import React from "react";
import style from "./Form.module.css";

// const serviceID = "service_f0m0qoz";
function Form() {
  return (
    <div className={style.container}>
      <form action="" className={style.form}>
        <div className={style.firstNameCont}>
          <label for="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            className={style.firstName}
            tabIndex="1"
          />
        </div>
        <div className={style.lastNameCont}>
          <label for="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            className={style.lastName}
            tabIndex="2"
          />
        </div>

        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          className={style.email}
          placeholder="name@newemployer.co.uk"
          tabIndex="3"
        />
        <label for="message">Message</label>
        <textarea
          placeholder="Let's start something..."
          className={style.message}
          name="message"
        />
        <button type="submit" className={style.send}>
          CONTACT
        </button>
      </form>
    </div>
  );
}

export default Form;
