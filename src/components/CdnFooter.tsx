"use client";

import { usePathname } from "next/navigation";
import Info from "../components/Info";

const ConditionalFooter = () => {
  const pathname = usePathname();
  const skipHeaderRoutes = ["/login", "/register"];

  if (skipHeaderRoutes.includes(pathname)) {
    return null;
  }

  return (
    <>
      <Info />
    </>
  );
};

export default ConditionalFooter;
