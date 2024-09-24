import Image from "next/image";
import background from "../../images/background.png";
import QuestionsList from "../../components/QuestionsList";
import Faqform from "../../components/Faqform";
import DownloadComponent from "../../components/Pdfdownload";
interface FaqData {
  attributes: {
    heading1: string;
    heading2: string;
    heading3: string;
    heading4: string;
    picture: {
      data: {
        attributes: {
          url: string;
          width: number;
          height: number;
        };
      };
    };
    questionsList: {
      heading: string;
      text: string;
    }[];
    faqCard: {
      text: string;
    }[];
    form: {
      label: string;
      type: string;
      placeholder: string;
    }[];
    button: {
      label: string;
      type: string;
      color: string;
    }[];
  };
}
interface Faqicon {
  attributes: {
    faqCard: {
      icon: {
        data: {
          attributes: {
            url: string;
            width: number;
            height: number;
          };
        };
      };
      pdfFile: {
        data: {
          attributes: {
            url: string;
            width: number;
            height: number;
          };
        };
      };
    }[];
    button: {
      image: {
        data: {
          attributes: {
            url: string;
            width: number;
            height: number;
          };
        };
      };
    }[];
  };
}
async function fetchfaqData(): Promise<{
  faqData: FaqData[];
  iconData: Faqicon[];
}> {
  try {
    const [res1, res2] = await Promise.all([
      fetch("https://strapi-dev.seksa.today/api/faqs?populate=*", {
        cache: "no-store",
      }),
      fetch(
        "https://strapi-dev.seksa.today/api/faqs?populate[faqCard][populate]=*&populate[button][populate]=*",
        { cache: "no-store" }
      ),
    ]);
    if (!res1.ok || !res2.ok) {
      throw new Error("Network response was not ok");
    }

    const [data1, data2] = await Promise.all([res1.json(), res2.json()]);

    return { faqData: data1.data, iconData: data2.data };
  } catch (error) {
    console.error("Error fetching home data:", error);
    return { faqData: [], iconData: [] };
  }
}
export default async function FAQPage() {
  const { faqData, iconData } = await fetchfaqData();
 


  return (
    <div
      className="bg-gray-50 lg:mt-[4rem]"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <div className="py-12 max-md:mt-[3.5rem] flex justify-center">
        <div className="container text-center px-4">
          <h1 className="text-2xl sm:text-3xl font-bold mb-9 font-Quicksand text-[#000000]">
            {faqData[0]?.attributes.heading1}
          </h1>
          <div className="relative inline-block lg:right-[22rem] max-md:right-[11rem]">
            <input
              typeof={`${faqData[0]?.attributes.button[1].type}`}
              placeholder={`${faqData[0]?.attributes.button[1].label}`}
              className={`max-md:w-[350px] absolute lg:w-[696px] xl:w-[800px]  h-[57px] border border-[${faqData[0]?.attributes.button[1].color}] rounded-[6px] p-4 pl-10`}
            />
            <div className="w-[18px] h-[18px] ">
              <Image
                src={`https://strapi-dev.seksa.today${iconData[0]?.attributes.button[1].image.data.attributes.url}`}
                width={100}
                height={50}
                alt="picture"
                className="text-[#717171] absolute ml-6 mt-5"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 w-full px-4">
        <div className="container mx-auto">
          <h2 className="text-xl sm:text-3xl font-semibold mb-6 text-center">
            {faqData[0]?.attributes.heading2}
          </h2>
          <QuestionsList questions={faqData[0]?.attributes.questionsList} />
        </div>
      </div>
      <div className="py-12 flex justify-center items-center">
        <div className="container mx-auto">
          <h2 className="sm:text-3xl font-Quicksand mb-8 text-center font-bold">
            {faqData[0]?.attributes.heading3}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {iconData[0]?.attributes.faqCard.map((item, index) => (
              <DownloadComponent
              key={index} // Add a unique key prop
              item={item} // Pass the current item
              index={index} // Pass the index
              faqData={faqData} // Pass the entire faqData
            />
            ))}
          </div>
        </div>
      </div>
      <div className="py-12 px-4">
        <div className="container mx-auto">
          <h2
            id="help"
            className="text-xl sm:text-2xl font-Quicksand font-bold text-center "
          >
            {faqData[0]?.attributes.heading4}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="lg:w-[550px] lg:h-[437px] md:ml-[3rem] mt-[5rem]">
              <Image
                src={`https://strapi-dev.seksa.today${faqData[0]?.attributes.picture.data.attributes.url}`}
                width={800}
                height={50}
                alt="picture"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="p-6 lg:p-9 rounded-lg">
              <Faqform faqData={faqData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
