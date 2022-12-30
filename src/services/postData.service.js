export async function postData(mailInformation) {
  mailInformation.addresses = mailInformation.addresses.split(",");
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(mailInformation),
  };
  const response = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/mail`,
    requestOptions
  );
  const data = await response.json();
  return data;
}
