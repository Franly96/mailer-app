import { useEffect, useState } from "react";

export function useFetchMails(query, newMail, mailsListUpdate) {
  const [status, setStatus] = useState("loading");
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setStatus("fetching");
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/mail?${query}`
      );
      const data = await response.json();
      setData(data);
      setStatus("Finished");
    };
    fetchData();
  }, [query, newMail, mailsListUpdate]);
  return { status, data };
}
