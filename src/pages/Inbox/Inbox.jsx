import React, { useContext, useState } from "react";
import UserContext from "../../authentication/UserContext";
import MailModal from "../../components/MailModal/MailModal";
import MailPrevElement from "../../components/mailPrevElement/mailPrevElement";
import { useFetchMails } from "../../hooks/useFetchMail";
import { useNewMailConection } from "../../hooks/useNewMailConection";
import "./Inbox.css";

function Inbox({ param }) {
  const [currentUser] = useContext(UserContext);
  const [mailsListUpdate, setMailsListUpdate] = useState();
  const { newMail } = useNewMailConection(currentUser);
  const [showModal, setShowModal] = useState(false);
  const [mailDetail, setMailDetail] = useState();
  const { data } = useFetchMails(
    `${param}=${currentUser}`,
    newMail,
    mailsListUpdate
  );

  const updateData = (id) => {
    setMailsListUpdate(id);
  };

  const mailsItems = data.map((mail) => (
    <MailPrevElement
      key={mail._id}
      mail={mail}
      className="mail-prev-elem"
      onRemove={() => {
        updateData(mail._id);
      }}
      onClick={() => {
        setMailDetail(mail);
        setShowModal(true);
      }}
    />
  ));
  return (
    <div className="inbox-container">
      <ul>{mailsItems}</ul>
      <MailModal show={showModal} onClose={() => setShowModal(false)} mailInformation={mailDetail}/>
    </div>
  );
}

export default Inbox;
