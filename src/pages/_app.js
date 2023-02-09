import "@/styles/globals.css";
import { GlobalProvider } from "../../context/GlobalContext";

import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script src="https://www.gstatic.com/firebasejs/7.21.1/firebase-app.js" />
      <Script src="https://www.gstatic.com/firebasejs/7.21.1/firebase-database.js" />

      <GlobalProvider>
        <Component {...pageProps}></Component>
      </GlobalProvider>
    </>
  );
}
