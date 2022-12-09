import type { AppProps } from "next/app";
import "@module-federation/nextjs-mf/src/include-defaults";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
