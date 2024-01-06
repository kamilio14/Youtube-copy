import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Vsetko, { loader as vsetkoLoader } from "./components/Vsetko";
import ExactVid from "./components/ExactVid";
import Hry from "./components/Hry";
import Hudba from "./components/Hudba";
import Mixi, { action as actionMixi } from "./components/Mixi";
import Login, {
  loader as loginLoader,
  action as loginAction,
} from "./components/Login";
import Layout from "./Layout";
import checkOf from "./utilities";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/login/"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />
      <Route
        path="/"
        element={
          <div className="all-page">
            <Layout />
          </div>
        }
      >
        <Route index element={<Vsetko />} loader={vsetkoLoader} />
        <Route path=":id" element={<ExactVid />} loader={checkOf} />
        <Route path="hry" element={<Hry />} />
        <Route path="mixi" element={<Mixi />} />
        <Route path="hudba" element={<Hudba />} />
      </Route>
    </>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
