import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import ComposeMail from "./Compose/ComposeMail";
import Inbox from "./Inbox/Inbox";
import Root from "./Root/Root";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="inbox" element={<Inbox param="inbox" />} />
      <Route path="send" element={<Inbox param="from" />} />
      <Route path="trash" element={<Inbox param="deleted" />} />
      <Route path="compose" element={<ComposeMail />} />
    </Route>
  )
);
