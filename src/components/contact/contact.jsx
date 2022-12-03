import { useState } from "react";
import callApi from "../axios/axios";
import "./contact.scss";
const Contact = () => {
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
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, toggleToast] = useState(false);
  const [toastIcon, setToastIcon] = useState('\u274c')
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
    ("form-input form-error");
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
        setToastMessage(res.data);
        setToastIcon('\u2705')
        toggleToast(true);
        setPayload(payloadInitial);
        setCanSend(false);
        setSenderClass(initialClass);
        setEmailClass(initialClass);
        setMessageClass(initialClass);
      })
      .catch((err) => {
        setToastMessage("Something went wrong: "+ err)
        setToastIcon('\u274c')
      });
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Write to me</h2>
      <form onSubmit={(e) => sendMessage(e)} className="form-container">
        <label>Your Name</label>
        <input
          type={"text"}
          aria-label="Your Name"
          value={payload.sender}
          onChange={(e) => setName(e.target.value)}
          className={senderClass}
        ></input>

        <label>Your Email</label>
        <input
          type={"email"}
          aria-label="Your Email"
          value={payload.email}
          onChange={(e) => setEmail(e.target.value)}
          className={emailClass}
        ></input>

        <label>Type in your message</label>
        <textarea
          rows={8}
          value={payload.message}
          onChange={(e) => setMessage(e.target.value)}
          className={messageClass}
        ></textarea>

        <button type="submit" className="send-button" disabled={!canSend}>
          Send Message
        </button>
      </form>
      {showToast && (
        <div className="toaster">
          {toastMessage}
          <span
            className="close-button"
            onClick={() => {
              setToastMessage("");
              toggleToast(false);
            }}
          >
            {toastIcon}
          </span>
        </div>
      )}
    </div>
  );
};

export default Contact;
