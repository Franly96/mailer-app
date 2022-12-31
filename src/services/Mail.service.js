export async function addMail(mailInformation) {
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

export async function deleteMail(id) {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({id}),
  };
  const response = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/mail`,
    requestOptions
  );
  const data = await response.json();
  return data;
}
