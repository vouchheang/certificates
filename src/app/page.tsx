import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Info from "../components/Info";
import ButtonLogin from "@/components/ButtonLogin";
import Form from "@/components/Form";
import LoginPage from "./loginpage/page";
import FAQPage from "./faq/page";
import HomePage from "./homepage/page";
import ForgotPassword  from "./forgotpassword/page";
import VerifyOTP from "./verifyOTP/page";
import UpdatePassword from "./updatepassword/page";
import Login from "./login/page";

export default function Home() {
  return (
    <>
      {/* <LoginPage/>
      <FAQPage/> */}
      <HomePage/>
      
     {/* <ForgotPassword/>
     <VerifyOTP/>
      <UpdatePassword/>
      <Login/> */}
      {/* <Header />
      <Footer />
      <Info />
      <Button label="Upload"/>
      <ButtonGoogle />
      <Form /> */}

    </>
  );
}
