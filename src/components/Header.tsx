import Image from "next/image";
import Menu from "./menu";

interface HeaderData {
  attributes: {
    logo: {
      data: {
        attributes: {
          url: string;
          width: number;
          height: number;
        };
      };
    };
    navbar: {
      label: string;
      path: string;
    }[];
    button: {
      label: string;
      type: string;
      color: string;
    };
    language: {
      data: {
        attributes: {
          url: string;
          width: number;
          height: number;
        };
      };
    };
  };
}

async function fetchheaderData(): Promise<{
  headerData: HeaderData[];
}> {
  try {
    const res1 = await fetch(
      `https://strapi-dev.seksa.today/api/headers?populate=*&timestamp=${new Date().getTime()}`,
      {
        cache: "force-cache",
      }
    );

    if (!res1.ok) {
      throw new Error("Network response was not ok");
    }

    const data1 = await res1.json();

    return { headerData: data1.data };
  } catch (error) {
    console.error("Error fetching home data:", error);
    return { headerData: [] };
  }
}

export default async function Header() {
  const { headerData } = await fetchheaderData();

  return (
    <header className="fixed top-0 left-0 w-full bg-[#FFFFFF] py-6 max-sm:py-4 shadow-sm z-50 max-sm:h-[4rem]">
      <div className="mx-auto flex items-center justify-between px-4">
        <div className="w-[140px] h-[25px]">
          <a href="/">
            <Image
              src={`https://strapi-dev.seksa.today${headerData[0].attributes.logo.data.attributes.url}`}
              alt="Logo"
              width={500}
              height={50}
              className="w-full h-auto"
            />
          </a>
        </div>
        <Menu headerData={headerData} />
      </div>
    </header>
  );
}
