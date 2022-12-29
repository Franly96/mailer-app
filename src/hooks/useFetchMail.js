import { useEffect, useState } from "react";

export function useFetchMails(query) {
  const [status, setStatus] = useState("loading");
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setStatus("fetching");
      const response = await fetch("http://localhost:3000/mail?" + query);
      const data = await response.json();
      setData(data);
      setStatus("Finished");
    };
    fetchData();
  }, [query]);
  return { status, data };
}
