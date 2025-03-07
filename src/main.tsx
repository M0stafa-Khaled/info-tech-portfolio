import ReactDOM from "react-dom/client";
import App from "./App";
import "swiper/css/bundle";
import "swiper/css";
import "./index.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { QueryProvider } from "./lib/react-query/QueryProvider";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryProvider>
    <Provider store={store}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Provider>
  </QueryProvider>
);
