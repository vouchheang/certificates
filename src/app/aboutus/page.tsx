import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Info from "../../components/Info";
import Left from "../../images/bg-l.png";
import Right from "../../images/bg-r.png";

export default function AboutUs() {
  return (
    <div className="w-full h-auto">
    <div className="w-full h-[70px] px-[40px] py-[10px] gap-0 justify-between">
  <Header />
</div>

    
      <div
        className="w-full pl-8 bg-[#FBFBFB]"
        style={{
          backgroundImage: `url(${Left.src}), url(${Right.src})`,
        }}
      >
        <h1 className="font-Quicksand text-[34px] font-semibold leading-[57.8px] text-center">
          About Us
        </h1>
        <div className="w-full h-[364px] pt-[10px] px-0">
          <h3 className="font-Quicksand text-[32px] font-bold leading-[40px] text-left">
            Our History
          </h3>
          <div className="font-Quicksand text-[16px] leading-[20px]">
            <p className="mb-3">
              <span className="text-[36px] leading-[45px]">Sala</span>  is a
              Cambodian educational platform that provides university and school
              information for high school students. The platform aims to empower
              students to make better college majors and career choices by
              offering educational opportunities and promotions. Sala is the
              first university and school information portal in Cambodia, and it
              has been praised for its ability to help students make informed
              decisions about their future.
            </p>
            <p className="mb-3">
              Sala offers a range of features, including a mobile app that
              allows students to seek advice and guidance, as well as take tests
              to determine their best-fit major and professional career. The
              platform is designed to be user-friendly, with a clean interface
              that makes it easy for students to navigate and find the
              information they need.
            </p>
            <p className="mb-3">
              At Sala, we believe that every student deserves access to quality
              education. That’s why we’re committed to providing the best
              possible resources and support to help students achieve their
              goals. Whether you’re a high school student looking for
              information on colleges and universities, or a college student
              seeking guidance on your career path, Sala has everything you need
              to succeed.
            </p>
            <p className="mb-3">
              At Sala, we believe that every student deserves access to quality
              education. That’s why we’re committed to providing the best
              possible resources and support to help students achieve their
              goals. Whether you’re a high school student looking for
              information on colleges and universities, or a college student
              seeking guidance on your career path, Sala has everything you need
              to succeed.
            </p>
          </div>
        </div>
      </div>
      <div className="pl-8">
        <h3 className="font-Quicksand text-[32px] font-bold leading-[40px]">
          Our Mission
        </h3>
        <div className="font-Quicksand text-[16px] leading-[20px] pt-2">
          <p className="mb-3">
            Educational platform that provides university and school information
            for high school students. The platform aims to empower students to
            make better college majors and career choices by offering
            educational opportunities and promotions. Sala is the first
            university and school information portal in Cambodia, and it has
            been praised for its ability to help students make informed
            decisions about their future.
          </p>
          <p className="mb-3">
            Sala offers a range of features, including a mobile app that allows
            students to seek advice and guidance, as well as take tests to
            determine their best-fit major and professional career. The platform
            is designed to be user-friendly, with a clean interface that makes
            it easy for students to navigate and find the information they need.
          </p>
          <p className="mb-3">
            At Sala, we believe that every student deserves access to quality
            education. That’s why we’re committed to providing the best possible
            resources and support to help students achieve their goals. Whether
            you’re a high school student looking for information on colleges and
            universities, or a college student seeking guidance on your career
            path, Sala has everything you need to succeed.
          </p>
          <p className="mb-3">
            At Sala, we believe that every student deserves access to quality
            education. That’s why we’re committed to providing the best possible
            resources and support to help students achieve their goals. Whether
            you’re a high school student looking for information on colleges and
            universities, or a college student seeking guidance on your career
            path, Sala has everything you need to succeed.
          </p>
        </div>
      </div>

      <div className="w-full">
        <Info />
        <Footer />
      </div>
    </div>
  );
}
