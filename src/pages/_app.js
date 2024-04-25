import "@/styles/globals.css";
import ReactLenis from "@studio-freight/react-lenis";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ReactLenis root duration={1}>
        <Component {...pageProps} />
      </ReactLenis>
    </>
  )
}
