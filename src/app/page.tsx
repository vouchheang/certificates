import Header from "../components/Header1";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Info from "../components/Info";
import RegisterPage from "./register/page";

export default function Home() {
  return (
    <>
    {/* < RegisterPage /> */}
      <Header />
      <Footer />
      <Info />
      <Button label="Upload"/>
    </>
  );
}
