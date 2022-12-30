import { createBrowserRouter } from "react-router-dom";
import ComposeMail from "./Compose/ComposeMail";
import Inbox from "./Inbox/Inbox";
import Root from "./Root/Root";

export const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Inbox param="inbox" /> },
      { path: "inbox", element: <Inbox param="inbox" /> },
      { path: "send", element: <Inbox param="from" /> },
      { path: "trash", element: <Inbox param="deleted" /> },
      {
        path: "compose",
        element: <ComposeMail />,
      },
    ],
  },
]);
