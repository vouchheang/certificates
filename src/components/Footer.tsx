
interface FooterData {
  attributes: {
    text: string;
    link: {
      label: string;
      path: string;
    }[];
  };
}
async function fetchfooterData(): Promise<{
  footerData: FooterData[];
}> {
  try {
    const res1 = await fetch(
      `https://strapi-dev.seksa.today/api/footers?populate=*&timestamp=${new Date().getTime()}`,
      {
        cache: "force-cache",
      }
    );

    if (!res1.ok) {
      throw new Error("Network response was not ok");
    }

    const data1 = await res1.json();

    return { footerData: data1.data };
  } catch (error) {
    console.error("Error fetching home data:", error);
    return { footerData: [] };
  }
}
export default async function Footer() {
  const { footerData } = await fetchfooterData();
  return (
    <div className=" p-5 bg-[#00844C]">
      <p className="text-xs sm:text-sm md:te text-white">
        {footerData[0]?.attributes.text}|{" "}
        <a
          href={footerData[0]?.attributes.link[0].path}
          className="underline"
          target="_blank"
        >
          {footerData[0]?.attributes.link[0].label}
        </a>{" "}
        |{" "}
        <a
          href={footerData[0]?.attributes.link[1].path}
          className="underline"
          target="_blank"
        >
          {footerData[0]?.attributes.link[1].label}
        </a>
      </p>
    </div>
  );
}
