import React, { useContext } from "react";
import UserContext from "../../authentication/UserContext";
import MailPrevElement from "../../components/mailPrevElement/mailPrevElement";
import { useFetchMails } from "../../hooks/useFetchMail";
import { useNewMailConection } from "../../hooks/useNewMailConection";
import "./Inbox.css";

function Inbox({ param }) {
  const [currentUser] = useContext(UserContext);
  const { newMail } = useNewMailConection(currentUser);

  const { data } = useFetchMails(`${param}=${currentUser}`, newMail);
  const mailsItems = data.map((mail) => (
    <MailPrevElement key={mail._id} mail={mail} className="mail-prev-elem" />
  ));
  return (
    <div className="inbox-container">
      <ul>{mailsItems}</ul>
    </div>
  );
}

export default Inbox;
