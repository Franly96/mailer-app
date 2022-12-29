import React from "react";
import MailPrevElement from "../../components/mailPrevElement/mailPrevElement";
import { useFetchMails } from "../../hooks/useFetchMail";
import "./Inbox.css";

function Inbox() {
  const { data } = useFetchMails("");
  const mailsItems = data.map((mail) => <MailPrevElement mail= {mail} className="mail-prev-elem"/>);
  return (
    <div className="inbox-container">
      <ul>{mailsItems}</ul>
    </div>
  );
}

export default Inbox;
