import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import { ToastContainer } from "react-toastify";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "../styles/responsiveTableComponents.css";
import "react-toastify/dist/ReactToastify.css";
import "../styles/selectComponents.css";
import "../styles/swiperSlider.css";
import "../styles/home.css";
import "../styles/pagination.css";
import "../styles/about.css";
import "../styles/shop.css";
import "../styles/productDetails.css";
import "../styles/collapsibleComponents.css";
import "../styles/blogs.css";
import "../styles/loading.css";
import { Provider } from "react-redux";
import { store } from "../redux/app/store";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });
  }, [router.events]);

  return (
    <>
      <ToastContainer />
      <LoadingBar
        waitingTime={100}
        color="#FCB700"
        height={3}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
