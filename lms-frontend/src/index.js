import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import { SocketProvider } from "./Meet/context/SocketProvider";
import { PiChatCenteredDotsBold } from "react-icons/pi";
import { IoIosArrowDropupCircle } from "react-icons/io";

const store = configureStore({
  reducer: rootReducer,
});

const handleMoveToTopClick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <SocketProvider>
          <App />
          <div className="fixed bottom-32 right-9 flex flex-col gap-7">
            <button
              title="Move To Top"
              className="block bg-blue-500 text-white rounded-full p-4 shadow-md hover:bg-blue-600 focus:outline-none"
              onClick={handleMoveToTopClick}
            >
              <IoIosArrowDropupCircle className="w-8 h-8" />
            </button>
            <a
              href="http://localhost:3001"
              title="Chat Room"
              target="_blank"
              className="block bg-blue-500 text-white rounded-full p-4 shadow-md hover:bg-blue-600 focus:outline-none"
            >
              <PiChatCenteredDotsBold className="w-8 h-8" />
            </a>
          </div>
        </SocketProvider>
        <Toaster />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
