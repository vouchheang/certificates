import Image from "next/image";

interface InfoData {
  attributes: {
    descriptions: string;
    title: string;
    logo: {
      data: {
        attributes: {
          url: string;
          width: number;
          height: number;
        };
      };
    };
    social: {
      text: string;
      icon: {
        data: {
          attributes: {
            url: string;
            width: number;
            height: number;
          };
        };
      };
    }[];
    contact: {
      text: string;
      icon: {
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
async function fetchinfoData(): Promise<{
  infoData: InfoData[];
}> {
  try {
    const res1 = await fetch(
      "https://strapi-dev.seksa.today/api/infomations?populate[social][populate]=*&populate[contact][populate]=*&populate[logo][populate]=*",
      {
        cache: "no-store",
      }
    );

    if (!res1.ok) {
      throw new Error("Network response was not ok");
    }

    const data1 = await res1.json();

    return { infoData: data1.data };
  } catch (error) {
    console.error("Error fetching home data:", error);
    return { infoData: [] };
  }
}
export default async function Footer() {
  const { infoData } = await fetchinfoData();
  return (
    <div className="w-full bg-[#f9f9f9] flex flex-col lg:flex-row justify-between items-start py-10 px-8">
      <div className="flex flex-col lg:w-2/3">
        <div className="mb-6">
          <Image
            src={`https://strapi-dev.seksa.today${infoData[0]?.attributes.logo.data.attributes.url}`}
            alt="Logo"
            width={500}
            height={50}
            className="w-[100px] h-auto"
          />
        </div>
        <p className="text-base text-gray-800 mb-4">
          {infoData[0]?.attributes.descriptions}
        </p>
        <div className="flex space-x-4">
          <a href={infoData[0]?.attributes.social[0].text} target="_blank">
            {" "}
            <Image
              src={`https://strapi-dev.seksa.today${infoData[0]?.attributes.social[0].icon.data.attributes.url}`}
              alt="Facebook"
              width={500}
              height={50}
              className="w-[24px] h-[24px]"
            />
          </a>
          <a href={infoData[0]?.attributes.social[1].text} target="_blank">
            <Image
              src={`https://strapi-dev.seksa.today${infoData[0]?.attributes.social[1].icon.data.attributes.url}`}
              alt="Instagram"
              width={500}
              height={50}
              className="w-[24px] h-[24px]"
            />
          </a>
          <a href={infoData[0]?.attributes.social[2].text} target="_blank">
            <Image
              src={`https://strapi-dev.seksa.today${infoData[0]?.attributes.social[2].icon.data.attributes.url}`}
              alt="Telegram"
              width={500}
              height={50}
              className="w-[24px] h-[24px]"
            />
          </a>
        </div>
      </div>
      <div className="lg:w-1/3 mt-8 lg:mt-0">
        <h2 className="text-xl font-semibold text-gray-800 opacity-65 mb-4">
          {infoData[0]?.attributes.title}
        </h2>
        <ul className="space-y-2">
          <li className="flex items-center text-gray-600">
            <Image
              src={`https://strapi-dev.seksa.today${infoData[0]?.attributes.contact[0].icon.data.attributes.url}`}
              alt="Map"
              width={500}
              height={50}
              className="w-[20px] h-[20px] opacity-70"
            />
            <span className="ml-3">
              {infoData[0]?.attributes.contact[0].text}
            </span>
          </li>
          <li className="flex items-center text-gray-600">
            <Image
              src={`https://strapi-dev.seksa.today${infoData[0]?.attributes.contact[1].icon.data.attributes.url}`}
              alt="Email"
              width={500}
              height={50}
              className="w-[16px] h-[16px] opacity-50"
            />
            <span className="ml-3">
              {infoData[0]?.attributes.contact[1].text}
            </span>
          </li>
          <li className="flex items-center text-gray-600">
            <Image
              src={`https://strapi-dev.seksa.today${infoData[0]?.attributes.contact[2].icon.data.attributes.url}`}
              alt="Call"
              width={500}
              height={50}
              className="w-[23px] h-[20px] opacity-70 mb-6"
            />
            <span className="ml-3">
              {infoData[0]?.attributes.contact[2].text} <br />
              {infoData[0]?.attributes.contact[3].text}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
