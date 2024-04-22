import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Error } from "./components/Error/Error";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home/Home";
import { Places } from "./pages/Places/Places";
import { Events } from "./pages/Events/Events";
import { Place } from "./pages/Place/Place";
import { Event } from "./pages/Event/Event";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "places",
        element: <Places />,
      },
      {
        path: "places/:category",
        element: <Places />,
      },
      {
        path: ":slug",
        element: <Place />,
      },
      {
        path: "/events/:slug",
        element: <Event />,
      },
      {
        path: "events",
        element: <Events />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
