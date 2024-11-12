import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Conditionally render Header and Footer only if the current route is not "/"
  return (
    <>
      {router.pathname !== "/" && <Header />}
      <Component {...pageProps} />
      {router.pathname !== "/" && <Footer />}
    </>
  );
}
