import Left from "../images/Left.png";
import Right from "../images/Right.png";

function Contact() {
  return (
    <div
      className="w-[1920px] h-[762px] bg-[#FBFBFB] flex justify-center items-center"
      style={{
        backgroundImage: `url(${Left.src}), url(${Right.src})`,
        backgroundPosition: "left top, right top",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      <div className="w-[906px] h-[554px] gap-[30px]  ">
        <h1 className=" font-semibold text-[34px] leading-[57.8px] text-center">
          Contact Us
        </h1>
        <form className="flex flex-col gap-[30px]">
          <div className="w-[906px] h-[78px] flex flex-col gap-[10px]">
            <label className="font-semibold text-[14px] leading-[17.5px] ">
              Name
            </label>
            <input
              className="w-[906px] h-[50px] font-medium text-[12px] leading-[17.5px]  rounded-[6px] border-[1px] p-[18px_20px] gap-[10px] "
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>

          <div className="w-[906px] h-[78px] flex flex-col gap-[10px]">
          <label className="font-semibold text-[14px] leading-[17.5px] "
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-[906px] h-[50px] font-medium text-[12px] leading-[17.5px]  rounded-[6px] border-[1px] p-[18px_20px] gap-[10px] "
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="w-[906px] h-[185px] flex flex-col  gap-[10px]">
          <label className="font-semibold text-[14px] leading-[17.5px] "
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-[906px] h-[185px] font-medium text-[12px] leading-[17.5px]  rounded-[6px] border-[1px] p-[18px_20px] gap-[10px]"
              id="message"
              placeholder="Write your message here..."
            
            ></textarea>
          </div>

       <div className="w-[906px] h-[78px]  gap-[10px] text-center ">
            <button
              type="submit"
              className=" bg-[#00844C] font-semibold text-[14px] w-[234px] h-[52px] rounded-[6px]  border-[1px] p-[18px_20px] gap-[10px] text-[#FFFFFF] leading-[17.5px] "
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
