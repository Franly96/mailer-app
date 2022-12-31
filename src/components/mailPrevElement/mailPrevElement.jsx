import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import React, { useContext } from "react";
import UserContext from "../../authentication/UserContext";
import "./mailPrevElement.css";

function MailPrevElement({ mail }) {
  const [currentUser] = useContext(UserContext);
  const shouldRenderDeleteBtn = !mail.delete_at && mail.from !== currentUser;
  return (
    <li key={mail._id} className="mail-list-element">
      <div>{mail.from}</div>
      <div>{mail.subject}</div>
      <div>{moment(mail.created_at).format("LL")}</div>
      {shouldRenderDeleteBtn && <FontAwesomeIcon icon={faTrash} className={"delete-icon"}/>}
    </li>
  );
}

export default MailPrevElement;
