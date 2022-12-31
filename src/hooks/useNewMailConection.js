import { useEffect, useState } from "react";
import { socket } from "../services/WSService";

export function useNewMailConection(mail) {
  const [newMail, setNewMail] = useState('');

  useEffect(() => {
    //on emmit event to this email address
    socket.on(mail, (newMail) => {
      setNewMail(newMail);
    });

    return () => {
      socket.off(mail);
    };
  }, [mail]);
  return { newMail };
}
