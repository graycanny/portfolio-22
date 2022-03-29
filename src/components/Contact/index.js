import React from "react";
import style from "./Contact.module.css";
import Form from "./Form";
import Map from "./Map";

function Contact() {
  return (
    <div id="contact" className={style.section}>
      <section className={style.contactMain}>
        <h3 className={style.title}>Get in touch</h3>
        <div className={style.contactCont}>
          <div className={style.reactForm}>
            <Form />
          </div>
          <div className={style.map}>
            <Map />
            <div className={style.textCont}>
              <h3 className={style.mapH}>
                I live right near the bustle of one of the UK's finest cities,
                Manchester.
              </h3>
              <p className={style.mapP}>
                Due to that, I'm mainly interested in hybrid work in and around
                this area, but also willing to work remote.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
