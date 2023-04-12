import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { DevSupport } from "@react-buddy/ide-toolbox-next";
import { ComponentPreviews, useInitial } from "@/components/dev";
import { Provider } from "react-redux";
import { store } from "@/store/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </DevSupport>
  );
}
