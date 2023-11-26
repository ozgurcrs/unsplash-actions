import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./layouts/index.tsx";
import { PluginInitContextProvider } from "./providers/index.tsx";
import { App } from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <PluginInitContextProvider>
    <Layout>
      <App />
    </Layout>
  </PluginInitContextProvider>
);
