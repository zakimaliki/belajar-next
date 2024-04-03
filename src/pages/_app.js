// import "@/styles/globals.css";
import { Provider } from "react-redux";
import { wrapper, store } from "../configs/redux/store";
import { Fragment } from "react";

import NextNProgress from "nextjs-progressbar";
function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Provider store={store}>
        <NextNProgress />
        <Component {...pageProps} />
      </Provider>
    </Fragment>
  );
}

export default wrapper.withRedux(App);