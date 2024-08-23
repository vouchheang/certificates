import Image from "next/image";
import background from "../../images/background.png";
import pdf from "../../images/Group.png";
import image19 from "../../images/image 19.png";
import Info from "@/components/Info";
import Footer from "@/components/Footer";
import logo from "../../images/Frame 42.png";
export default function FAQPage() {
  
  return (
    <div
      className=" bg-gray-50"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <header className=" fixed top-0 left-0 w-full bg-white py-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl w-[143.37px] h-[29.79px]">
            <Image
            src={logo}
            alt="#"
            />
          </div>
          <nav className="flex space-x-6 font-Quicksand Size-[16px] leading-20px font-bold">
            <a href="#" className="text-[#717171] mt-2">
              Home
            </a>
            <a href="#" className="text-[#717171] mt-2">
              FAQ
            </a>
            <a href="#" className="text-[#717171] mt-2">
              About Us
            </a>
            <button className="bg-[#00844C] text-white rounded-[6px] font-Quicksand w-[73px] h-[46px] p-[8px_15px]">
              Login
            </button>
          </nav>
        </div>
      </header>

      <div className="py-12 mt-[4rem] h-[160px] flex jusitify-center">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold mb-7 font-Quicksand w-600 Size-34px leading-57.8px align-center text-[#000000]">
            How May We Help You?
          </h1>
          <input
            type="text"
            placeholder="Type your question here..."
            className=" max-w-xl border border-[#C3C3C3] rounded-[6px] border-1 p-[16px_15px] w-[699px] h-[52px]"
          />
        </div>
      </div>

   
      <section className="py-12 w-[1320px] h-auto pt-[30px] m-auto mt-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="w-[1320px] h-[466px] flex gap-[30px]">
            <div className="w-[645px] h-[466px]">
              <select className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm w-[640px] h-[56px] mb-4">
                <option className="font-semibold ">What are you doing?</option>
              </select>
              <p className="w-[605px] h-[198px]">
                What is a basic definition of text? Text is the exact, original
                words written by an author. Text is also a specific work as
                written by the original author. Text is also commonly used to
                refer to a text message or to send a text message. Text has
                several other senses as a noun. What is a basic definition of
                text? Text is the exact, original words written by an author.
                Text is also a specific work as written by the original author.
                Text is also commonly used to refer to a text message or to send
                a text message. Text has several other senses as a noun. What is
                a basic definition of text? Text is the exact, original words
                written by an author. Text is also a specific work as written by
                the original author. Text is also commonly used to refer to a
                text message or to send a text message. Text has several other
                senses as a noun
              </p>
              <div className="mt-10">
                <select className="p-4  bg-white border border-gray-200 rounded-lg shadow-sm w-[640px] h-[56px] mb-4 mt-8 ">
                  <option className="font-semibold">What are you doing?</option>
                </select>
                <select className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm w-[640px] h-[56px]">
                  <option className="font-semibold">What are you doing?</option>
                </select>
              </div>
            </div>
            <div className="w-[645px] h-[228px] flex flex-col gap-[30px]">
              <select className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm w-[640px] h-[56px]">
                <option className="font-semibold">What are you doing?</option>
              </select>
              <select className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm w-[640px] h-[56px]">
                <option className="font-semibold">What are you doing?</option>
              </select>
              <select className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm w-[640px] h-[56px]">
                <option className="font-semibold">What are you doing?</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <div className="w-[1550px] ml-[4rem] h-[439px] p-[60px_10px] flex justify-center items-center ">
        <div className="container ">
          <h2 className="text-2xl font-Quicksand mb-6 text-center">
            The Popular FAQ
          </h2>
          <div className="grid grid-cols-3 gap-40px w-[1320px] h-[138px]">
            <div className=" bg-white border border-gray-200 w-[420px] h-[138px] rounded-[6px] border-1 shadow-sm text-center p-[20px_60px] ">
              <Image
                src={pdf}
                alt="FAQ Image"
                className="w-[58.58px] h-[60px] ml-[8rem]"
              />
              <h4 className="font-Quicksand font-bold mt-5">
                How to Use Tool Sola Kits?
              </h4>
            </div>
            <div className=" bg-white border border-gray-200 w-[420px] h-[138px] rounded-[6px] border-1 shadow-sm text-center p-[20px_60px] ml-[70px]">
              <Image
                src={pdf}
                alt="FAQ Image"
                className="w-[58.58px] h-[60px] ml-[8rem]"
              />
              <h4 className="font-Quicksand font-bold mt-5">
                How to Use Tool Sola Kits?
              </h4>
            </div>
            <div className=" bg-white border border-gray-200 w-[420px] h-[138px] rounded-[6px] border-1 shadow-sm text-center p-[20px_60px] ml-[9rem]">
              <Image
                src={pdf}
                alt="FAQ Image"
                className="w-[58.58px] h-[60px] ml-[8rem]"
              />
              <h4 className="font-Quicksand font-bold mt-5">
                How to Use Tool Sola Kits?
              </h4>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-40px mt-[2rem]">
            <div className=" bg-white border border-gray-200 w-[420px] h-[138px] rounded-[6px] border-1 shadow-sm text-center p-[20px_60px]">
              <Image
                src={pdf}
                alt="FAQ Image"
                className="w-[58.58px] h-[60px] ml-[8rem]"
              />
              <h4 className="font-Quicksand font-bold mt-5">
                How to Use Tool Sola Kits?
              </h4>
            </div>
            <div className=" bg-white border border-gray-200 w-[420px] h-[138px] rounded-[6px] border-1 shadow-sm text-center p-[20px_60px]">
              <Image
                src={pdf}
                alt="FAQ Image"
                className="w-[58.58px] h-[60px] ml-[8rem]"
              />
              <h4 className="font-Quicksand font-bold mt-5">
                How to Use Tool Sola Kits?
              </h4>
            </div>
            <div className=" bg-white border border-gray-200 w-[420px] h-[138px] rounded-[6px] border-1 shadow-sm text-center p-[20px_60px] ml-1">
              <Image
                src={pdf}
                alt="FAQ Image"
                className="w-[58.58px] h-[60px] ml-[8rem]"
              />
              <h4 className="font-Quicksand font-bold mt-5">
                How to Use Tool Sola Kits?
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12 w-[1350px] ml-[5rem] p-[60px_0px] h-[550px]">
        <div className="container mx-auto">
          <h2 className="text-2xl font-Quicksand font-bold text-center ml-[5rem]">
            Help Center
          </h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="relative">
              <Image src={image19} alt="#" className="w-[495px] h-[437px]" />
            </div>
            <div className="p-9 rounded-lg shadow-sm ml-[4rem]">
              <form>
                <label
                  htmlFor="email"
                  className="block text-lg font-Quicksand mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-[650px] p-[18px_20px] font-Quicksand border border-[#EDEDED] h-[50px] rounded-[6px] flex justify-between"
                  placeholder="example@gmail.com"
                />
                <label
                  htmlFor="#"
                  className="block text-lg font-Quicksand mt-[2rem]"
                >
                  Description <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="description"
                  className="w-[650px] h-[167px] p-[18px_20px] border border-[#EDEDED] rounded-[6px] mt-3 font-Nunito w-400 Size-[12px] leading-[3rem] font-Quicksand "
                  placeholder="Type your question or issue here..."
                ></textarea>
                <button
                  type="submit"
                  className="bg-[#00844C] mt-5 text-white font-Quicksand font-bold py-2 px-[14px_30px] w-[118px] h-[52px] rounded-[6px] hover:bg-green-600 ml-[33rem]"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Info/>
      <Footer/>
    </div>
  );
}
