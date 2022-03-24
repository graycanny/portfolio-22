import React from "react";
import style from "./Contact.module.css";

function Contact() {
  return (
    <div className={style.section}>
      <section className={style.contactMain}>
        <h3 className={style.title}>Get in touch</h3>
        <div className={style.contactCont}>
          <div className={style.reactForm}></div>
          <div className={style.map}>MAP</div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
