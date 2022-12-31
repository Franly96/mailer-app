import React, { useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../authentication/UserContext";
import { postData } from "../../services/postData.service";
import { newMailSended } from "../../services/WSService";

const initialState = {
  addresses: "",
  from: "franly",
  message: "",
  subject: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_ADDRESSES":
      return { ...state, addresses: action.payload };
    case "SET_MESSAGE":
      return { ...state, message: action.payload };
    case "SET_FROM":
      return { ...state, from: action.payload };
    case "SET_SUBJECT":
      return { ...state, subject: action.payload };
    default:
      return state;
  }
}
function ComposeMail() {
  const [currentUser] = useContext(UserContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch({ type: "SET_FROM", payload: currentUser });
  }, [currentUser]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await postData(state);
    newMailSended(state.addresses, data._id);
    navigate(-1);
  };
  const handleCancel = (event) => {
    event.preventDefault();
    navigate(-1);
  };

  return (
    <div className="compose-mail-container">
      <h2>New Message:</h2>
      <form onSubmit={handleSubmit}>
        <label>Mail Subject:</label>
        <br />
        <input
          type="text"
          name="Mail Subject"
          id="subject"
          value={state.subject}
          onChange={(e) =>
            dispatch({ type: "SET_SUBJECT", payload: e.target.value })
          }
        />
        <br />
        <label>To:</label>
        <br />
        <input
          type="text"
          name="Mail Subject"
          id="adresses"
          value={state.addresses}
          onChange={(e) =>
            dispatch({ type: "SET_ADDRESSES", payload: e.target.value })
          }
        />
        <br />
        <label>Mail Message:</label>
        <br />
        <textarea
          name="message"
          id="message"
          cols="100"
          rows="20"
          value={state.message}
          onChange={(e) =>
            dispatch({ type: "SET_MESSAGE", payload: e.target.value })
          }></textarea>
        <br />
        <input type="submit" value="Send" />
        <button onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
}

export default ComposeMail;
