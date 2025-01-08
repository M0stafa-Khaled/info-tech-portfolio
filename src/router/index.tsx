import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const routes = createRoutesFromElements(
  <Route path="/" element={<></>}></Route>
);

const router = createBrowserRouter(routes);

export default router;
