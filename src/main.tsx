import ReactDOM from "react-dom/client";
import App from "./App";
import "swiper/css/bundle";
import "swiper/css";
import "./index.css";
import { store } from "./app/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
