"use client";
import React from "react";
import Image from "next/image";

interface DownloadComponentProps {
  item: {
    pdfFile: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    icon: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
  index: number;
  faqData: {
    attributes: {
      faqCard: {
        text: string;
      }[];
    };
  }[];
}

const DownloadComponent: React.FC<DownloadComponentProps> = ({
  item,
  index,
  faqData,
}) => {
  const downloadPDF = (url: string, filename?: string): void => {
    fetch(url)
      .then((response: Response) => response.blob())
      .then((blob: Blob) => {
        const blobURL: string = URL.createObjectURL(blob);
        const a: HTMLAnchorElement = document.createElement("a");
        a.style.display = "none";
        a.href = blobURL;
        a.download = filename || "document.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(blobURL);
      })
      .catch((error: Error) => console.error("Error downloading PDF:", error));
  };

  return (
    <a
      href="#"
      onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        downloadPDF(
          `https://strapi-dev.seksa.today${item.pdfFile.data.attributes.url}`,
          `${item.pdfFile.data.attributes.url}`
        );
      }}
    >
      <div className="bg-white border border-gray-200 rounded-[6px] shadow-sm text-center p-6">
        <Image
          src={`https://strapi-dev.seksa.today${item.icon.data.attributes.url}`}
          alt="picture"
          width={500}
          height={50}
          className="w-14 h-14 mx-auto mb-4"
        />
        <h4 className="font-Quicksand font-bold">
          {faqData[0]?.attributes.faqCard[index]?.text}
        </h4>
      </div>
    </a>
  );
};

export default DownloadComponent;
