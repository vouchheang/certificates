import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Info from "../components/Info";

export default function Home() {
  return (
    <>
      <Header />
      <Footer />
      <Info />
      <Button label="Upload"/>
    </>
  );
}
