import React from 'react';
import "./MailModal.css";
function MailModal({children, show, onClose, mailInformation}) {
  if(!show){
    return null;
  }
  return (
    <div class="modal" id="modal">
      <div className="subject">{`Subjet: ${mailInformation.subject}`}</div>
      <div className="from">{`FROM: ${mailInformation.from}`}</div>
      <div class="content">
        <div>{mailInformation.message}</div>
      </div>
      <div class="actions">
        <button class="toggle-button" onClick={onClose}>
          close
        </button>
      </div>
    </div>
  );
}

export default MailModal