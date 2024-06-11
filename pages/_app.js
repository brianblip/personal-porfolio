import "@/styles/globals.css";
import { Outfit } from "next/font/google";
import { Roboto } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const outfit = Outfit({ subsets: ["latin"] });

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={roboto.className}>
      <Component {...pageProps} />
    </div>
  );
}
