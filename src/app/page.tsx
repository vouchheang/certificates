import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Info from "../components/Info";
import ButtonGoogle from "@/components/ButtonGoogle";
import Form from "@/components/Form";
import LoginPage from "./login/page";
import FAQPage from "./FAQ/page";
import HomePage from "./homepage/page";
export default function Home() {
  return (
    <>
      <LoginPage/>
      <FAQPage/>
      <HomePage/>

      {/* <Header />
      <Footer />
      <Info />
      <Button label="Upload"/>
      <ButtonGoogle />
      <Form /> */}

    </>
  );
}
