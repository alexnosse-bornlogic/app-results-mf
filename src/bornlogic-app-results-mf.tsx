import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import App from "./App";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary(_err, _info, _props) {
    // Customize the root error boundary for your microfrontend here.
    return <div> some awesome error boundary =)</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
