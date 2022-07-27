import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./styles/codebase.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import { configureStore } from "./redux/store";
import { MoralisProvider } from "react-moralis";
const store = configureStore();

const persistor = persistStore(store);
ReactDOM.render(
  <Provider store={store}>
    <MoralisProvider
      serverUrl="https://qnk5mrtly5rm.usemoralis.com:2053/server"
      appId="rfJV5hCgwRqNfqU9OR3IJm9CO64DBxWkYziMFMjA"
    >
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <App />
      </PersistGate>
    </MoralisProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
