import Left from "../../images/Left.png";
import Right from "../../images/Right.png";

function Terms() {
  return (
   
      <div
        className="px-0 w-full min-h-screen bg-[#FBFBFB] flex justify-center items-center py-[60px] flex-col"
       
      >   
          <div className="w-full px-[20px] py-0 text-justify box-border"  style={{
          backgroundImage: `url(${Left.src}), url(${Right.src})`,
        }}>
          <h1 className="font-semibold leading-[57.8px] text-center text-[34px] mt-[5%]">
            Privacy Policy
          </h1>
            <section className="mb-8 w-5/6 m-auto pr-2">
              <h2 className="text-2xl font-semibold mb-4 text-[24px] leading-[40.8px] pt-[30px]">
                Who we are
              </h2>
              <p className="mb-4 font-medium text-[16px] leading-[25.6px]">
                Sala is a product of SALATECH PTE. LTD company. We created Sala
                with a simple vision in mind; Enrich students' journey. Over
                50,000 graduated high school students annually seek the best fit
                major and college for their future professional path.
              </p>
            </section>
            <section className="mb-8 w-5/6 m-auto pr-2">
              <h2 className="text-2xl font-semibold mb-4">
                What personal data we receive or collect from you
              </h2>
              <p className="mb-4 font-medium text-[16px] leading-[25.6px] mt-[30px]">
                Lorem ipsum dolor sit amet consectetur. Lacus praesent vulputate
                tincidunt quis. Ac netus fringilla at nisl odio. Tristique sed
                tincidunt mauris sed nibh augue mattis fermentum. Morbi
                pellentesque augue at eleifend integer. Diam non feugiat feugiat
                risus. Aenean sagittis odio arcu vestibulum maecenas. Tristique
                ante imperdiet amet pellentesque. Hac pellentesque ac nec velit.
                Sit auctor congue accumsan est dui tempus. Aliquam ut amet
                vulputate integer laoreet eget. Rhoncus donec amet rutrum in
                etiam turpis nulla. Risus nisi purus eu dolor nisl eget. Quam
                pulvinar mi mattis tincidunt id tortor. Tellus a mi volutpat
                arcu ullamcorper ac. Mauris varius massa aliquam gravida odio
                varius. Scelerisque pharetra in suspendisse tellus consequat.
                Orci tellus tincidunt diam malesuada. Felis eu vitae blandit
                semper sed lectus ut diam. Nunc vel aliquam facilisis nibh eget
                maecenas ipsum consequat. At mi posuere.
              </p>
            </section>
            <section className="mb-8 w-5/6 m-auto pr-2">
              <h3 className="font-bold text-[16px] leading-[25.6px] ">
                Profile Information
              </h3>
              <p className="mb-4 font-medium text-[16px] leading-[25.6px] mt-[30px] ">
                After you create an account, you may choose to provide
                additional information on your Student Profile.
              </p>
            </section></div>
            <div className="w-full px-[20px] py-0 text-justify">
            <section className="mb-8 w-5/6 m-auto pr-2">
              <h3 className="font-bold text-[16px] leading-[25.6px]">
                Comments
              </h3>
              <p className=" font-medium text-[16px] leading-[25.6px] mt-[30px]">
                When users signed up on the site we collect the data shown in
                the comments form, and also the visitor's IP address and browser
                user agent string to help spam detection. When users signed up
                on the site we collect the data shown in the comments form, and
                also the visitor's IP address and browser user agent string to
                help spam detection.
                After approval of your comment, your profile picture is visible
                to the public in the context of your comment.
                </p>
            </section>

            <section className="mb-8 w-5/6 m-auto pr-2">
              <h3 className="text-xl mb-2 text-[16px] font-bold leading-[25.6px]">
                Cookies
              </h3>
              <p className=" font-medium text-[16px] leading-[25.6px] mt-[30px] ">
                If you leave a comment on our site you may opt-in to save your
                name, email address and website in cookies. These are for your
                convenience so that you do not have to fill in your details
                again when you leave another comment. These cookies will last
                for one year.
                If you have an account and you log in to this site, we will set
                temporary cookie to determine if your browser accepts cookies.
                This cookie
              </p>
              <p className=" font-medium text-[16px] leading-[25.6px] ">
                contains no personal data and is discarded when you close your
                browser.
            
            
                When you log in, we will also set up several cookies to save
                your login information and your screen display choices. Login
                cookies last for two{" "}
              </p>
              <p className=" font-medium text-[16px] leading-[25.6px] ">
                days, and screen options cookies last for a year. If you select
                "Remember Me", your login will persist for two weeks. If you log
                out of your account, the login cookies will be removed.{" "}
              </p>
            </section>
            <section className="mb-8 w-5/6 m-auto pr-2">
              <h3 className="text-xl mb-2 text-[16px] font-bold leading-[25.6px] ">
                How we use the information we receive or collect
              </h3>
              <p className="mb-4 font-medium text-[16px] leading-[25.6px] mt-[30px]">
                In general, SALA Enrollment may use your Registration Data
                and/or other information or data we receive or collect, as well
                as data we derive or infer from combinations of the foregoing,
                for a variety of purposes such as:
              </p>
              <section className="mb-8">
                <ul className="mb-4 font-medium text-[16px] leading-[25.6px] pl-[20px] list-disc">
                  <li>
                    To facilitate the creation of and secure your account on the
                    SALA Enrollment service.
                  </li>
                  <li>
                    To measure and analyze service usage and enhance the
                    listener experience on our service. We use tracking
                    information to determine how well each page and station
                    performs overall, based on aggregate listener demographics
                    and traffic patterns to those pages and stations. This helps
                    us continue to build a better service for you.
                  </li>
                  <li>To send you information that you agreed to receive.</li>
                  <li>
                    To alert you to the latest developments and features on our
                    service and to notify you of administrative information,
                    such as security or support and maintenance advisories.
                  </li>
                </ul>
              </section>
            </section>
          </div>
        </div>

  );
}

export default Terms;
