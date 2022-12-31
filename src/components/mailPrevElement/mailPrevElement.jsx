import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import React, { useContext } from "react";
import UserContext from "../../authentication/UserContext";
import { deleteMail } from "../../services/Mail.service";
import "./mailPrevElement.css";

function MailPrevElement({ mail, onRemove, onClick }) {
  const [currentUser] = useContext(UserContext);
  const shouldRenderDeleteBtn = !mail.delete_at && mail.from !== currentUser;
  const handleRemove = (id) => {
    deleteMail(id);
    onRemove();
  };

  return (
    <li key={mail._id} className="mail-list-element">
      <div className="mail-element" onClick={onClick}>
        <div>{mail.from}</div>
        <div>{mail.subject}</div>
        <div>{moment(mail.created_at).format("LL")}</div>
      </div>

      {shouldRenderDeleteBtn && (
        <FontAwesomeIcon
          icon={faTrash}
          className="delete-icon"
          onClick={() => handleRemove(mail._id)}
        />
      )}
    </li>
  );
}

export default MailPrevElement;
