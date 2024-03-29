import { useContext, useState } from "react";
import callApi from "../axios/axios";
import "./contact.scss";
import { ThemeContext } from "../../Context/ThemeContext";
import { useTranslation } from "react-i18next";
const Contact = ({onTriggerToast}) => {
  const {t} = useTranslation();
  const {theme} = useContext(ThemeContext)
  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const payloadInitial = {
    sender: "",
    email: "",
    message: "",
  };
  const initialClass = "form-input";
  const [canSend, setCanSend] = useState(false);
  const [payload, setPayload] = useState(payloadInitial);
  const [senderClass, setSenderClass] = useState(initialClass);
  const [emailClass, setEmailClass] = useState(initialClass);
  const [messageClass, setMessageClass] = useState(initialClass);
  const checkCanSend = () => {
    setCanSend(
      payload &&
        payload.sender &&
        payload.sender.length > 3 &&
        payload.email &&
        payload.email.match(EMAIL_REGEX) &&
        payload.message
    );
  };
  const setName = (name) => {
    setPayload((prev) => ({
      ...prev,
      sender: name,
    }));
    checkCanSend();
    if (name.length > 3) {
      setSenderClass("form-input form-success");
    } else {
      setSenderClass("form-input form-error");
    }
  };
  const setEmail = (email) => {
    setPayload((prev) => ({
      ...prev,
      email,
    }));
    checkCanSend();
    if (email.match(EMAIL_REGEX)) {
      setEmailClass("form-input form-success");
    } else {
      setEmailClass("form-input form-error");
    }
  };
  const setMessage = (message) => {
    setPayload((prev) => ({
      ...prev,
      message,
    }));
    checkCanSend();
    if (message) {
      setMessageClass("form-input form-success");
    } else {
      setMessageClass("form-input form-error");
    }
  };
  const sendMessage = (evt) => {
    evt.preventDefault();
    callApi
      .post("/email", payload)
      .then((res) => {
        onTriggerToast(res.data)
        setPayload(payloadInitial);
        setCanSend(false);
        setSenderClass(initialClass);
        setEmailClass(initialClass);
        setMessageClass(initialClass);
      })
      .catch((err) => {
        onTriggerToast("Something went wrong: "+ JSON.stringify(err))
      });
  };
  return (
    <section className={"form-section-"+theme} id="contact">
      <h2 className="form-title">{t("Email.Contact")}</h2>
      <form onSubmit={(e) => sendMessage(e)} className="form-container">
        <label htmlFor="name">{t("Email.Name")}</label>
        <input
          id="name"
          type={"text"}
          aria-label="Your Name"
          value={payload.sender}
          onChange={(e) => setName(e.target.value)}
          className={senderClass}
        ></input>

        <label htmlFor="email">{t("Email.Email")}</label>
        <input
          id="email"
          type={"email"}
          aria-label="Your Email"
          value={payload.email}
          onChange={(e) => setEmail(e.target.value)}
          className={emailClass}
        ></input>

        <label htmlFor="message">{t("Email.Message")}</label>
        <textarea
          id="message"
          rows={8}
          value={payload.message}
          onChange={(e) => setMessage(e.target.value)}
          className={messageClass}
        ></textarea>

        <button type="submit" className="send-button" disabled={!canSend}>
          {t("Email.Send")}
        </button>
      </form>
    </section>
  );
};

export default Contact;
