import Left from "../images/Left.png";
import Right from "../images/Right.png";

function Terms() {
  return (
    <div className="w-full px-0 ">
      <div
        className="w-full min-h-screen bg-[#FBFBFB] flex justify-center items-center"
        style={{
          backgroundImage: `url(${Left.src}), url(${Right.src})`,
          backgroundPosition: "left top, right top",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundSize: "auto, auto",
        }}
      >
        <div className="w-full py-[60px] px-0 flex flex-col items-center">
          <h1 className="font-semibold leading-[57.8px] text-center text-[34px] mt-[5%]">
            Terms of Use
          </h1>
          <div className="w-full max-w-[1200px] px-[20px] py-0">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[24px] leading-[40.8px] pt-[30px]">
                Who we are
              </h2>
              <p className="mb-4 font-medium text-[16px] leading-[25.6px]">
                Lorem ipsum dolor sit amet consectetur. Facilisis in libero
                purus felis amet vestibulum. Tortor in turpis amet pellentesque
                mattis. Consectetur consequat sem ut ut malesuada in tortor.
                Nisl diam risus posuere suspendisse sit. Adipiscing suspendisse
                volutpat ipsum morbi diam felis.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                What personal data we receive or collect from you
              </h2>
              <p className="mb-4 font-medium text-[16px] leading-[25.6px]">
                Lorem ipsum dolor sit amet consectetur. Integer commodo sed in
                accumsan amet phasellus dolor dolor aliquet. Cursus curabitur
                mauris enim aliquam. Accumsan tempus fusce neque lectus morbi.
                Vivamus enim sed faucibus odio nunc fringilla risus. Sagittis
                commodo morbi luctus elit aliquet scelerisque est et. Aenean ac
                nibh viverra malesuada massa vitae convallis. Nunc massa amet mi
                sed. Consequat diam fermentum justo integer non a fusce
                vulputate ac. Nisi quis mauris enim urna in leo quisque lectus
                vestibulum. Faucibus eu sagittis velit nulla. Nisl aliquam et
                habitasse ultrices amet. Id praesent sed mauris sit at egestas
                vitae facilisi nec. Nibh id cras quam urna tincidunt sit dictum
                scelerisque vel. Orci mauris faucibus nam morbi cum arcu. Est
                mattis a leo mi. Sed dictumst morbi ante feugiat. Natoque
                vivamus rhoncus at sed sed a.
              </p>
            </section>
            <section className="mb-8">
              <h3 className="font-bold text-[16px] leading-[25.6px]">
                Profile Information
              </h3>
              <p className="mb-4 font-medium text-[16px] leading-[25.6px] mt-[30px]">
                After you create an account, you may choose to provide
                additional
                <span className="mx-[20px]"> </span>
                information on your Student Profile.
              </p>
              <p className=" font-medium text-[16px] leading-[25.6px]">
                Lorem ipsum dolor sit amet consectetur. Sed eget id faucibus
                condimentum vitae in lacus. Ipsum dui lectus enim cras eu
                egestas arcu malesuada fames. Auctor erat arcu proin euismod
                dolor ipsum. Nulla vitae pellentesque rhoncus in odio gravida.{" "}
              </p>
              <p className="mb-4 font-medium text-[16px] leading-[25.6px]">
                Odio eu lobortis lectus at. Sed facilisis condimentum vitae
                vitae proin eget. Mattis cursus est pellentesque urna sagittis
                ornare elementum facilisis. Sem vivamus aliquam semper felis ac.
                Pulvinar diam arcu massa consequat urna. Eget nisl donec nibh eu
                lobortis elementum dolor. Massa nam egestas in nunc. Rhoncus leo
                sit lacinia faucibus orci purus amet. Non quam ultricies
                dignissim lectus. Eu dignissim laoreet massa mattis auctor
                tortor elementum. Nisi diam cras pellentesque semper in id.
                Lacus dictumst consequat ligula nisl fermentum sapien magna
                auctor non. Tempus tempus eros turpis egestas.
              </p>
            </section>
            <section className="mb-8">
              <h3 className="text-xl mb-2 text-[16px] font-bold leading-[25.6px]">
                Cookies
              </h3>
              <p className="mb-4 font-medium text-[16px] leading-[25.6px] mt-[30px]">
                If you leave a comment on our site you may opt-in to save your
                name,
                <span className="mx-[20px]"> </span>
                email address and website in cookies. These are for your
                convenience
                <span className="mx-[20px]"> </span>
                so that you do not have to fill in your details again when you
                leave
                <span className="mx-[20px]"> </span>
                another comment. These cookies will last for one year.
                <br />
                If you have an account and you log in to this site, we will set
                a<span className="mx-[20px]"> </span>
                temporary cookie to determine if your browser accepts cookies.
                This cookie contains no personal data and is discarded when you
                close your
                <span className="mx-[20px]"> </span>
                browser.
                <br />
                When you log in, we will also set up several cookies to save
                your
                <span className="mx-[20px]"> </span>
                login information and your screen display choices. Login cookies
                last for two days, and screen options cookies last for a year.
                If you <span className="mx-[20px]"> </span>
                select "Remember Me", your login will persist for two weeks.
                <span className="mx-[20px]"> </span>
                If you log out of your account, the login cookies will be
                removed.
              </p>
            </section>
            <section className="mb-8">
              <h3 className="text-xl mb-2 text-[16px] font-bold leading-[25.6px] ">
                How we use the information we receive or collect
              </h3>
              <p className="mb-4 font-medium text-[16px] leading-[25.6px] mt-[30px]">
                In general, SALA Enrollment may use your Registration Data
                and/or
                <span className="mx-[20px]"> </span>
                other information or data we receive or collect, as well as data
                we
                <span className="mx-[20px]"> </span>
                derive or infer from combinations of the foregoing, for a
                variety of <span className="mx-[20px]"> </span> purposes such
                as:
              </p>
              <section className="mb-8 mt-[30px]">
                <ul className="mb-4 font-medium text-[16px] leading-[25.6px] pl-[20px] list-disc">
                  <li>
                    To facilitate the creation of and secure your account on the
                    SALA
                    <span className="mx-[20px]"> </span>
                    Enrollment service.
                  </li>
                  <li>
                    To measure and analyze service usage and enhance the
                    listener
                    <span className="mx-[20px]"> </span>
                    experience on our service. We use tracking information to
                    determine <span className="mx-[20px]"> </span>
                    how well each page and station performs overall, based on
                    aggregate
                    <span className="mx-[20px]"> </span>
                    listener demographics and traffic patterns to those pages
                    and <span className="mx-[20px]"> </span>
                    stations. This helps us continue to build a better service
                    for you.
                  </li>
                  <li>To send you information that you agreed to receive.</li>
                  <li>
                    To alert you to the latest developments and features on our
                    service
                    <span className="mx-[20px]"> </span>
                    and to notify you of administrative information, such as
                    security or <span className="mx-[20px]"> </span>
                    support and maintenance advisories.
                  </li>
                </ul>
              </section>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terms;
