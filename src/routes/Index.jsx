// src/routes/Index.jsx - Use this version

import { createBrowserRouter } from "react-router-dom";

// Import your main layout and all page components
import App from "../App";
import InvoiceBuilder from "../components/InvoiceBuilder";
import AboutUs from "../components/AbousUs"; // Corrected typo from AbousUs
import AskAi from "../components/AskAi";
import HomePage from "../components/HomePage";
import BlogsPage from "../Pages/BlogsPage";
import SingleBlogPage from "../Pages/SingleBlogPage";

const router = createBrowserRouter([
  {
    // This is the parent route that uses App.jsx as the layout.
    // The element should ONLY be <App />.
    path: "/",
    element: <App />,

    // Child routes will be rendered inside the <Outlet /> in App.jsx
    children: [
      {
        // The 'index: true' route renders by default for the "/" path.
        // This makes InvoiceBuilder your homepage.
        index: true,
        element: <HomePage />,
      },
      {
        // The path for "/about". Note there is no leading slash.
        path: "about",
        element: <AboutUs />,
      },
      { path: "invoice", element: <InvoiceBuilder /> },
      { path: "blogs", element: <BlogsPage /> },
      {
        // Route for a single blog post. It's a sibling, not a child.
        // The ':slug' part is a dynamic parameter that will match any string.
        path: "blog/:slug",
        element: <SingleBlogPage />,
      },
      {
        // The path for "/ask-ai"
        path: "ask-ai",
        element: <AskAi />,
      },
    ],
  },
]);

export default router;
