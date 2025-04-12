import "@/styles/globals.css";
import localFont from "next/font/local"
const myFont = localFont({src: "../public/NationalPark-VariableFont_wght.ttf"})
//const font = National_Park({subsets: ["latin"], weight: "400"})
export default function App({ Component, pageProps }) {
  return (
  <main className={myFont.className}>
  <Component {...pageProps} />
  </main>)
}