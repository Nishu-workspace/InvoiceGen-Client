import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AskAi from "../components/AskAi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/ask-ai",
        element: <AskAi />,
      },
    ],
  },
]);
export default router;
