import moment from "moment";
import React from "react";
import "./mailPrevElement.css";

function MailPrevElement({ mail }) {
  return (
    <li key={mail.id} className="mail-list-element">
      <div>{mail.from}</div>
      <div>{mail.subject}</div>
      <div>{moment(mail.created_at).format("LL")}</div>
    </li>
  );
}

export default MailPrevElement;
