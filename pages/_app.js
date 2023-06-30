import "@/styles/globals.css";
import { Lilita_One } from 'next/font/google'
const font = Lilita_One({subsets: ["latin"], weight: "400"})
export default function App({ Component, pageProps }) {
  return (
  <main className={font.className}>
  <Component {...pageProps} />
  </main>)
}