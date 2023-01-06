import { Raleway, Inter } from "@next/font/google";
//Wrap whole app in store provider
import {store} from "../store";
import { Provider } from "react-redux";
import { useSelector, useDispatch} from 'react-redux';
import LoadingScreen from "../components/loadingScreen";
// import { fetchResumeData } from "../slices/resumeDataSlice";
// const raleway = Raleway({
//   weight: ["300", "400", "500", "600", "700", "800", "900"],
//   variable: '--font-raleway',

// })

const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: '--font-inter',
})

const raleway = Raleway({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: '--font-raleway',
})

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { useState, useEffect, useRef } from "react";

let persistor = persistStore(store);

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setIsLoading] = useState(store.getState().resumeData.status == "loading");
 // store.dispatch(fetchResumeData());
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
            <main className={`${raleway.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
