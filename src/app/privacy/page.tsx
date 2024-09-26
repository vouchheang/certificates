import Left from "../../images/Left.png";
import Right from "../../images/Right.png";

interface PrivacyData {
  attributes: {
    title: string;
    listText: {
      children: {
        children: { text: string }[];
      }[];
    }[];
    paragraph: {
      heading: string;
      text: string;
    }[];
  };
}
async function fetchprivacyData(): Promise<{
  privacyData: PrivacyData[];
}> {
  try {
    const res1 = await fetch(
      `https://strapi-dev.seksa.today/api/privacies?populate=*&timestamp=${new Date().getTime()}`,
      {
        cache: "force-cache",
      }
    );

    if (!res1.ok) {
      throw new Error("Network response was not ok");
    }

    const data1 = await res1.json();

    return { privacyData: data1.data };
  } catch (error) {
    console.error("Error fetching home data:", error);
    return { privacyData: [] };
  }
}
export default async function Privacy() {
  const { privacyData } = await fetchprivacyData();

  return (
    <div className="px-0 w-full min-h-screen bg-[#FBFBFB] flex justify-center items-center py-[60px] flex-col">
      <div
        className="w-full px-[20px] py-0 text-justify box-border"
        style={{
          backgroundImage: `url(${Left.src}), url(${Right.src})`,
        }}
      >
        <h1 className="font-semibold leading-[57.8px] text-center text-[34px] mt-[5%]">
          {privacyData[0]?.attributes.title}
        </h1>
        <section className="mb-8 w-5/6 m-auto pr-2">
          <h2 className="text-2xl font-semibold mb-4 text-[24px] leading-[40.8px] pt-[30px]">
            {privacyData[0]?.attributes.paragraph[0].heading}
          </h2>
          <p className="mb-4 font-medium text-[16px] leading-[25.6px]">
            {privacyData[0]?.attributes.paragraph[0].text}
          </p>
        </section>
        <section className="mb-8 w-5/6 m-auto pr-2">
          <h2 className="text-2xl font-semibold mb-4">
            {privacyData[0]?.attributes.paragraph[1].heading}
          </h2>
          <p className="mb-4 font-medium text-[16px] leading-[25.6px] mt-[30px]">
            {privacyData[0]?.attributes.paragraph[1].text}
          </p>
        </section>
        <section className="mb-8 w-5/6 m-auto pr-2">
          <h3 className="font-bold text-[16px] leading-[25.6px] ">
            {privacyData[0]?.attributes.paragraph[2].heading}
          </h3>
          <p className="mb-4 font-medium text-[16px] leading-[25.6px] mt-[30px] ">
            {privacyData[0]?.attributes.paragraph[2].text}
          </p>
        </section>
      </div>
      <div className="w-full px-[20px] py-0 text-justify">
        <section className="mb-8 w-5/6 m-auto pr-2">
          <h3 className="font-bold text-[16px] leading-[25.6px]">
            {privacyData[0]?.attributes.paragraph[3].heading}
          </h3>
          <p className=" font-medium text-[16px] leading-[25.6px] mt-[30px]">
            {privacyData[0]?.attributes.paragraph[3].text}
          </p>
        </section>

        <section className="mb-8 w-5/6 m-auto pr-2">
          <h3 className="text-xl mb-2 text-[16px] font-bold leading-[25.6px]">
            {privacyData[0]?.attributes.paragraph[4].heading}
          </h3>
          <p className=" font-medium text-[16px] leading-[25.6px] mt-[30px] ">
            {privacyData[0]?.attributes.paragraph[4].text}
          </p>
        </section>
        <section className="mb-8 w-5/6 m-auto pr-2">
          <h3 className="text-xl mb-2 text-[16px] font-bold leading-[25.6px] ">
            {privacyData[0]?.attributes.paragraph[5].heading}{" "}
          </h3>
          <p className="mb-4 font-medium text-[16px] leading-[25.6px] mt-[30px]">
            {privacyData[0]?.attributes.paragraph[5].text}
          </p>
          <section className="mb-8">
            <ul className="mb-4 font-medium text-[16px] leading-[25.6px] pl-[20px] list-disc">
              <li>
                {
                  privacyData[0]?.attributes.listText[0].children[0].children[0]
                    .text
                }
              </li>
              <li>
                {
                  privacyData[0]?.attributes.listText[0].children[1].children[0]
                    .text
                }
              </li>
              <li>
                {" "}
                {
                  privacyData[0]?.attributes.listText[0].children[2].children[0]
                    .text
                }
              </li>
              <li>
                {
                  privacyData[0]?.attributes.listText[0].children[3].children[0]
                    .text
                }
              </li>
            </ul>
          </section>
        </section>
      </div>
    </div>
  );
}
