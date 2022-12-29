import { createBrowserRouter } from "react-router-dom";
import ComposeMail from "./Compose/ComposeMail";
import Inbox from "./Inbox/Inbox";
import Root from "./Root/Root";

export const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Inbox /> },
      { path: "*", element: <Inbox /> },
      {
        path: "compose",
        element: <ComposeMail />,
      },
    ],
  }
]);
